import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from "next/server";

interface MailProps{ 
    send_from: string
    recipients: string
    ccAddress: string
    reply_to: string
    text: string
    subject: string
    message: string
}

export async function POST(request: NextRequest){
    const { send_from, recipients, ccAddress, reply_to, text, subject, message }:MailProps = await request.json();
    
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

    try {
        await transporter.sendMail(options)
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ message: 'Error sending email', error: error.message }, { status: 500 });
    }

    //send email

}