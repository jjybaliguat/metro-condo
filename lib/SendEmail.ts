import nodemailer from 'nodemailer'

interface MailProps {
    subject: string,
    message: string,
    recipients: string,
    ccAddress: string,
    send_from: string,
    reply_to: string,
    text: string
}

export const sendEmail = async ({subject, message, recipients, ccAddress, send_from, reply_to, text}:MailProps) => {
    //create email transporter
    const transporter = nodemailer.createTransport({
        host: process.env.NEXT_PUBLIC_EMAIL_HOST,
        port : process.env.NEXT_PUBLIC_EMAIL_PORT,
        auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS
        },
        tls:{
            rejectUnauthorized:false
        }
    })

    //Option for sending email
    const options = {
        from: send_from,
        to: recipients,
        cc: ccAddress,
        replyTo: reply_to,
        text: text,
        subject: subject,
        html: message
    }

    //send email
    transporter.sendMail(options)
}