import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  // Configura il trasportatore email
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Invia l'email
    await transporter.sendMail({
      from: `"Nea Website" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `Nuovo messaggio da ${name}: ${subject}`,
      text: `Nome: ${name}\nEmail: ${email}\nMessaggio: ${message}`,
      html: `<p><strong>Nome:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Messaggio:</strong> ${message}</p>`,
    });

    return NextResponse.json({ message: 'Email inviata con successo' }, { status: 200 });
  } catch (error) {
    console.error('Errore nell\'invio dell\'email:', error);
    return NextResponse.json({ error: 'Errore nell\'invio dell\'email' }, { status: 500 });
  }
}