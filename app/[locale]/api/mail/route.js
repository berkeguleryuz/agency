import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request, res) {
  const { name, email, company, phone, message, budget } = await request.json();

  const { data, error } = await resend.emails.send({
    from: "Clodron <onboarding@resend.dev>",
    to: "berke@clodron.com",
    subject: "New Customer Request",
    html: `
    <h3>Customer Information</h3>
    <li>Name: ${name}</li>
    <li>E-mail: ${email}</li>
    <li>Company: ${company}</li>
    <li>Phone: ${phone}</li>
    <li>Message: ${message}</li>
    <li>Budget: ${budget}</li>
    `,
  });

  if (error) {
    return Response.json({ message: "Email did not send." });
  }

  return Response.json({ message: "Email sent successfully" });
}
