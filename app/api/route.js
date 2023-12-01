import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, company, phone, message, budget } = req.body;

      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.MAIL_USER,
        to: process.env.MAIL_TO,
        subject: "New Job Request",
        text: `
          Name: ${name}
          Email: ${email}
          Company: ${company}
          Phone: ${phone}
          Message: ${message}
          Budget: $${budget}
        `,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ success: true, message: "E-mail sent!" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({
          success: false,
          message: "E-posta gönderme hatası: " + error.message,
        });
    }
  } else {
    res.status(405).end();
  }
}
