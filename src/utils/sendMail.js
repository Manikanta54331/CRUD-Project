const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});


const getEmailContent = (type, user) => {
  switch (type) {
    case "created":
      return {
        subject: "User Created Successfully",
        text: `Hello ${user.name},\n\nYour account has been successfully created!`,
      };
    case "updated":
      return {
        subject: "User Updated Successfully",
        text: `Hello ${user.name},\n\nYour account details have been updated!`,
      };
    case "deleted":
      return {
        subject: "User Deleted Successfully",
        text: `Hello ${user.name},\n\nYour account has been deleted from our system.`,
      };
    default:
      return {
        subject: "Notification",
        text: `Hello ${user.name},\n\nThis is a system notification.`,
      };
  }
};

const sendEmail = async (to, type, user) => {
  const { subject, text } = getEmailContent(type, user);

  const mailOptions = {
    from: process.env.SMTP_USER,
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to ${to}");
  } catch (error) {
    console.error("Email sending failed:", error);
  }
};

module.exports = sendEmail;
