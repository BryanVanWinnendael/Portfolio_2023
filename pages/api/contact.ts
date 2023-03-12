import { mailOptions, transporter } from "../../config/nodemailer"

const CONTACT_MESSAGE_FIELDS: any = {
  name: "Name",
  email: "Email",
  message: "Message",
}

const generateEmailContent = (data: any) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
    ""
  )
  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `<h3 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h3><p class="form-answer" align="left">${val}</p>`)
  }, "")

  return {
    text: stringData,
    html: `<!DOCTYPE html><html> <head> <title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" > <h2>New Contact Message</h2> <div class="form-container">${htmlData}</div></td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </body></html>`,
  }
}

const GenerateEmailBack = () => {
  return {
    text: "",
    html: `<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            .footer{
                text-align: center;
                margin-top: 50px;
                background-color: #0e0e0e;
                color: white;
                width: 100%;
                height: fit-content !important;
                border-radius: 5px;
                padding: 5px;
            }
            .heading{
                font-weight: bold;
                margin: 5px;
                font-size: xx-large;
            }
            .message{
                font-size: large;
            }
           
        </style>
    </head>
    <body>
        <h1>Thank you for your email</h1>
        <p class="message">Thank you for contacting us. We will get back to you as soon as possible.</p>
        <div class="footer">
                <p class="heading">BRYAN VAN</p>
                <p class="heading">WINNENDAEL</p>
        </div>
    </body>
    </html>`,
  }
}

const handler = async (
  req: { method: string; body: any },
  res: {
    status: (arg0: number) => {
      (): any
      new (): any
      send: { (arg0: { message: string }): any; new (): any }
      json: { (arg0: { success?: boolean; message?: any }): any; new (): any }
    }
  }
) => {
  if (req.method === "POST") {
    const data = req.body
    if (!data || !data.name || !data.email || !data.message) {
      return res.status(400).send({ message: "Bad request" })
    }

    try {
      await transporter
        // email to myself
        .sendMail({
          ...mailOptions,
          ...generateEmailContent(data),
          subject: "Portfolio - Contact received",
        })
        .then(async () => {
          mailOptions.to = data.email
          await transporter.sendMail({
            ...mailOptions,
            ...GenerateEmailBack(),
            subject: "Contact - Portfolio Bryan Van Winnendael",
          })
        })

      return res.status(200).json({ success: true })
    } catch (err: any) {
      return res.status(400).json({ message: err.message })
    }
  }
  return res.status(400).json({ message: "Bad request" })
}
export default handler
