import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      contact,
      address,
      message,
    } = body;

    // Set up transporter
    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_EMAIL_HOST,
      port: Number(process.env.NEXT_PUBLIC_EMAIL_PORT) || 587,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    // Mail options
    const mailOptions = {
      from: '"MCL Quotes" <builders@metrocondoliving.com>',
      to: 'builders@metrocondoliving.com',
      cc: ['metrocondolifestyle@gmail.com', 'justinejeraldbaliguat@gmail.com'],
      subject: `Quote from ${name}`,
      html: `
        <div>
          <p>Name: <strong>${name}</strong></p>
          <p>Email: <strong>${email}</strong></p>
          <p>Phone: <strong>${contact}</strong></p>
          <p>Address: <strong>${address}</strong></p>
          <div style="margin-top: 25px">
            <p>Message: </p>
            <p style="text-align: center">${message}</p>
          </div>
        </div>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, messageId: info.messageId }, { status: 200 });

  } catch (error: any) {
    console.error('Email send error:', error.message);
    return NextResponse.json(
      { success: false, message: 'Failed to send email.' },
      { status: 500 }
    );
  }
}
