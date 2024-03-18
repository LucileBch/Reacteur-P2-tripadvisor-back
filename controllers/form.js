// ---------- FORM Controllers ----------
// Import packages
require(`dotenv`).config();
const formData = require(`form-data`);
const Mailgun = require(`mailgun.js`);

// Mailgun configuration
const mailgun = new Mailgun(formData);
const client = mailgun.client({
  username: process.env.MAILGUN_USERNAME,
  key: process.env.MAILGUN_API_KEY,
});

// ---------- POST ----------
const formPost = async (req, res) => {
  try {
    console.log(req.body);
    const { firstname, lastname, email, message } = req.body;

    if (firstname && lastname && email && message) {
      const messageData = {
        from: `${firstname} ${lastname} <${email}>`,
        to: process.env.EMAIL,
        subject: `Formulaire TripAdvisor`,
        message: `${message}`,
      };

      console.log(messageData);

      const response = await client.messages.create(
        process.env.MAILGUN_DOMAIN,
        messageData
      );
      console.log(response);

      res.status(200).json(response);
    } else {
      res.status(400).json({ message: `Missing parameters` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export controller
module.exports = { formPost };
