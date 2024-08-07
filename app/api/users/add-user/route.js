import { connectToDB } from '@/utils/database';
import User from '@/models/user';
import nodemailer from 'nodemailer';

export async function POST(request) {
  await connectToDB();
  
  try {
    const data = await request.json();
    const newUser = await User.create(data);

    // Send email to yourself
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.MY_EMAIL,
      subject: 'New Contact Created',
      text: `A new contact has been created with the following details:\n\nName: ${newUser.name}\nPhone: ${newUser.phone}\nEmail: ${newUser.email}\nBudget: ${newUser.budget}\nReady: ${newUser.ready}\nHow: ${newUser.how}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
}
