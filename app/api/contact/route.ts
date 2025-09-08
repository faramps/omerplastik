import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER, 
        pass: process.env.ZOHO_PASS, 
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.ZOHO_USER}>`, // Gönderen olarak Zoho hesabı
      to: process.env.ZOHO_USER, // Gelen mailleri alacağın adres
      replyTo: email, // Reply tıklandığında formu dolduran kişiye gidecek
      subject: "Web Sitesi İletişim Formu",
      html: `
        <h3>Yeni İletişim Mesajı</h3>
        <p><strong>Gönderen:</strong> ${name} (${email})</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Mail gönderme hatası:", err);
    return NextResponse.json({ success: false, error: "Mail gönderilemedi" }, { status: 500 });
  }
}
