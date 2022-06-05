import nodeMailer from "nodemailer";

export const sendMail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: smtp.gmail.com,
    port: 465,
    service: gmail,
    auth: {
      user: "nguyennnt.uit@gmail.com",
      pass: "pmahidsgxgymkccp",
    },
  });

  const mailOptions = {
    from: "nguyennnt.uit@gmail.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};
