import path from "path";
import express from "express";
import dotenv from "dotenv";
import connectDataBase from "./config/database.js";
import cors from "cors";
import nodemailer from "nodemailer";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import compression from "compression";

dotenv.config();
connectDataBase();
const app = express();
 
app.use(cors());
app.use(compression())
app.use(express.json({ limit: "1500kb" }));

let transport = {
  service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
};

let transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

app.post("/send-contact-form", (req, res, next) => {
  let name 
  let email
  let service
  let phone
   let city

  try{
    name = req.body.name;
    email = req.body.email;
    service = req.body.service;
    phone = req.body.phone;
    city = req.body.city;
  }
  catch(e){
    res.json({
      msg: "fail",
    });
  }
  let formType = req.body.formType ?? "Get in Touch";
  let content = `Form-type: ${formType} \n Name: ${name} \n Email: ${email} \n Phone Number: ${phone} \n Body Part To Be Treated: ${service} \n City/Town: ${city}`;

  let mail = {
    from: name,
    to: process.env.RECIEVER,
    subject: "New Message From PeakCare",
    text: content,
    replyTo:email
  };
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail",
      });
    } else {
      res.json({
        msg: "success",
      });
    }
  });
});


const __dirname=path.resolve()

if(process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https')
      res.redirect(`https://${req.header('host')}${req.url}`)
    else
      next()
  })
}

app.use('/uploads', express.static(path.join(__dirname, '/uploads/')))

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(path.resolve(), "/frontend/build"))); 
  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(path.resolve(), "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running!");
  });
}

app.use(notFound);
app.use(errorHandler);

const Port = process.env.PORT || 5000;


app.listen(
  Port,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${Port}`)
);