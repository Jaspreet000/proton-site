import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { email, name, message, phone, company, hear } = await req.json();

    // Configure the email transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail', // You can use any email service like Gmail, Outlook, etc.
      auth: {
        user: process.env.SMTP_USER, // Your email address (set in environment variables)
        pass: process.env.SMTP_PASS, // Your email password (set in environment variables)
      },
    });

    // Sending the email
    await transporter.sendMail({
      from: process.env.SMTP_USER, // Sender address
      to: 'vivek@protondatalabs.org', // Receiver's email - vivek@protondatalabs.org
      subject: `New Message from ${name}`, // Subject of the email
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Where did you hear about us:</strong> ${hear}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // Return a success response
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
