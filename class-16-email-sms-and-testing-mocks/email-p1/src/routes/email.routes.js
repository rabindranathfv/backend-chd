import { Router } from "express";
import nodemailer from "nodemailer";
import { EMAIL, PSW_EMAIL } from "../config/config.js";

const router = Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  user: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL,
    pass: PSW_EMAIL,
  },
});

router.post("/send", async (req, res) => {
  console.log("IMAGE PATH***", `${process.cwd()}` + `/img/pet-loro.png`);
  try {
    // bulk SMS --> envio masivo de SMS
    let result = await transporter.sendMail({
      from: EMAIL,
      to: req.body.email,
      subject: "sending email with nodemail and gmail",
      html: `
      <div>
        <h1>Esto es un email de prueba con imagenes</h1>
        <img src="cid:loro" />
      </div>
      `,
      attachments: [
        {
          filename: "pet-loro.png",
          path: `${process.cwd()}` + `/public/img/pet-loro.png`,
          cid: "loro",
        },
        {
          filename: `ejercicios.pdf`,
          path: `${process.cwd()}` + `/public/file/ejercicios.pdf`,
        },
      ],
    });
    console.log(
      "🚀 ~ file: email.routes.js:43 ~ router.post ~ result:",
      result
    );

    res.send({ ok: true, result: `email send to ${req.body.email}` });
  } catch (error) {
    console.log("🚀 ~ file: email.routes.js:47 ~ router.post ~ error:", error);
  }
});

export default router;
