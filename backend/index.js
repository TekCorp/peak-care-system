import path from "path";
import express from "express";
import dotenv from "dotenv";
import connectDataBase from "./config/database.js";
import cors from "cors";
import nodemailer from "nodemailer";
import blogRoutes from "./routes/apiRouter.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import categoryRouter from "./routes/categoryRouter.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import locationRouter from "./routes/locationRouter.js";
import compression from "compression";
import awsRoutes from "./routes/awsRoutes.js"

dotenv.config();
connectDataBase();

const app = express();
 
app.use(cors());
app.use(compression())
app.use(express.json({ limit: "1500kb" }));
 
app.use("/api/users", userRoutes);
app.use("/api/upload", uploadRoutes);
app.use('/api/categories', categoryRouter);
app.use("/", blogRoutes);
app.use('/api/locationpages', locationRouter);
app.use("/api/backup-files", awsRoutes);

// let transport = {
//   host: "d304917a.ess.barracudanetworks.com", 
//   port: 587, 
//   secure: false,
//     auth: {
//       user: process.env.USER,
//       pass: process.env.PASS,
//     },
//     tls: {
//       rejectUnauthorized: false, 
//     },
// };
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

app.post("/send-appointment", (req, res, next) => {
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


app.post("/send-contact-form-main", (req, res, next) => {
  let name 
  let email
  let subject
   let message

   let formType

  try{
    name = req.body.name;
    email = req.body.email;
    subject = req.body.subject;
    message = req.body.message;
    formType = req.body.formType
  }
  catch(e){
    res.json({
      msg: "fail",
    });
  }
  let content = `Form-type: ${formType} \n Name: ${name} \n Email: ${email} \n Subject: ${subject} \n message: ${message}`;

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

app.post("/send-quote", (req, res, next) => {
  let name = req.body.name;
  let email = req.body.email;
  let phone = req.body.phone;
  let message = req.body.message;
  let formType = req.body.formType;
  let content = `Form-type: ${formType} \n name: ${name} \n email: ${email} \n phone number: ${phone} \n message : ${message}`;

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

app.post("/send-newsletter", (req, res, next) => {
  let email = req.body.email;
  let formType = req.body.formType;
  let content = `Form-type: ${formType} \n client-email: ${email}`;

  let mail = {
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

app.post("/send-assesment", (req, res) => {
  let email = req.body.email;
  let formType = req.body.formType;
  let {assementData} = req.body;
  const content = `
Form-type: ${formType}
Client-email: ${email}

Contact Details:
  FirstName: ${assementData.firstName}
  LastName: ${assementData.lastName}
  Email: ${assementData.email}
  Phone: ${assementData.phone}

Address Details:
  Street Address: ${assementData.streetAddress}
  AddressLine2: ${assementData.addressLine2}
  City: ${assementData.city}
  State: ${assementData.addState}
  PostalCode: ${assementData.postalCode}

Personal Details:
  Occupation: ${assementData.occupation}


Property Details
  PropertySize: ${assementData.propertySize}
  PropertyType: ${assementData.propertyType}
  Property Status: ${assementData.propertyStatus}
  List Price: ${assementData.listPrice}
  Additional Text Message: ${assementData.additionalText}
  Date: ${assementData.date.split('T')[0]}

`;

  const filesAttachment = assementData.propertyPhotos.map(photoPath => ({
    path: photoPath,
  }));



  let mail = {
    to: process.env.RECIEVER,
    subject: "New Message From PeakCare",
    text: content,
    replyTo:email,
    attachments:filesAttachment
  };
  
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err);
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

// HTTPS Redirection Middleware
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