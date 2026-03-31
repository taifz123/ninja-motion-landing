import type { VercelRequest, VercelResponse } from "@vercel/node";
import Stripe from "stripe";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY!);

const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET!;
const PDF_URL = process.env.PDF_URL!; // Public URL to the hosted PDF file
const FROM_EMAIL = process.env.FROM_EMAIL || "Ninja Motion Therapies <hello@ninjamotiontherapies.com.au>";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const sig = req.headers["stripe-signature"] as string;

  let event: Stripe.Event;
  try {
    const body = await getRawBody(req);
    event = stripe.webhooks.constructEvent(body, sig, WEBHOOK_SECRET);
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    return res.status(400).json({ error: `Webhook Error: ${err.message}` });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const customerEmail = session.customer_details?.email;

    if (customerEmail) {
      try {
        // Fetch the PDF to attach it
        const pdfResponse = await fetch(PDF_URL);
        const pdfBuffer = Buffer.from(await pdfResponse.arrayBuffer());

        await resend.emails.send({
          from: FROM_EMAIL,
          to: customerEmail,
          subject: "Your 7-Day Movement Reset is here",
          html: `
            <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #333;">
              <h1 style="color: #0A0A0A; font-size: 24px;">Thanks for your purchase!</h1>
              <p style="font-size: 16px; line-height: 1.6;">
                Your <strong>7-Day Pain & Movement Reset</strong> guide is attached to this email.
              </p>
              <p style="font-size: 16px; line-height: 1.6;">
                Start Day 1 whenever you are ready — each session takes about 10 minutes.
              </p>
              <p style="font-size: 16px; line-height: 1.6;">
                If you have any questions, DM
                <a href="https://www.instagram.com/ninjamotiontherapies_/" style="color: #D4AF37;">@ninjamotiontherapies_</a>
                on Instagram — Yuhan personally responds.
              </p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
              <p style="font-size: 13px; color: #999;">
                Ninja Motion Therapies · Leichhardt, Inner West Sydney
              </p>
            </div>
          `,
          attachments: [
            {
              filename: "7-Day-Movement-Reset.pdf",
              content: pdfBuffer,
            },
          ],
        });

        console.log(`PDF sent to ${customerEmail}`);
      } catch (emailErr) {
        console.error("Failed to send email:", emailErr);
        return res.status(500).json({ error: "Failed to send email" });
      }
    }
  }

  return res.status(200).json({ received: true });
}

// Read raw body for Stripe signature verification
function getRawBody(req: VercelRequest): Promise<string> {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => (data += chunk));
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}

export const config = {
  api: {
    bodyParser: false, // Stripe needs the raw body for signature verification
  },
};
