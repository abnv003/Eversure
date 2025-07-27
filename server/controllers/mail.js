import sendMail from "../utils/mailer.js";

export const sendMailController = async (req, res) => {
  const { name, contact, subject, body } = req.body;

  if (!name || !contact || !subject || !body) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const to = process.env.CONTACT_RECEIVER; // fixed admin email

  const message = `
    Name: ${name}
    Contact: ${contact}
    ---------------------------
    ${body}
  `;

  try {
    const info = await sendMail(to, subject, message);
    res.status(200).json({ success: true, messageId: info.messageId });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
};