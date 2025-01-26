import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, phoneNumber, service, selectedCity, address , date} =
      await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "powrsofficial@gmail.com",
        pass: "mrnb eptw copm wuce", // Replace with your Gmail app password
      },
    });

    const mailOption = {
      from: "powrsofficial@gmail.com",
      to: "amracleaning@gmail.com",
      subject: "New Contact Form Submission",
      html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone Number:</strong> ${phoneNumber}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>City:</strong> ${selectedCity}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Date:</strong> ${date}</p>
      `,
    };

    await transporter.sendMail(mailOption);

    return new Response(
      JSON.stringify({ message: "Email Sent Successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          Location: "/success",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Failed to Send Email" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}