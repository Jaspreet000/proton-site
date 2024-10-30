import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { email, name, message, phone, company, hear, role, industry, objectives } = await req.json();

    // Configure the email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER, // Set this in environment variables
        pass: process.env.SMTP_PASS, // Set this in environment variables
      },
    });

    // Define the HTML content of the email
    const emailContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #4F46E5;">New Contact Message from Proton DataLabs</h2>
        <hr style="border: none; border-top: 1px solid #ddd;" />

        <table style="width: 100%; max-width: 600px; margin: 20px 0; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Name:</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Email:</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Phone:</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Company:</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${company}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>How did you hear about us:</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${hear}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Role in Organization:</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${role}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Primary Industry:</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${industry}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Organizational Objectives:</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${objectives}</td>
          </tr>
        </table>

        <h3 style="color: #4F46E5;">Message</h3>
        <p style="padding: 15px; border: 1px solid #ddd; background: #f9f9f9; color: #555;">${message}</p>

        <hr style="border: none; border-top: 1px solid #ddd;" />
        <footer style="font-size: 0.9em; color: #666;">
          <p>This message was sent from the contact form on Proton DataLabs.</p>
        </footer>
      </div>
    `;

    // Send the email
    await transporter.sendMail({
      from: `"Proton DataLabs" <${process.env.SMTP_USER}>`, // Sender's email address
      to: 'vivek@protondatalabs.com', // Receiver's email
      subject: `New Contact Message from ${name}`,
      html: emailContent, // HTML email content
    });

    // Return a success response
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
