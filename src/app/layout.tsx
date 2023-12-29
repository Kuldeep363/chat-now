import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Whatsapp - chat now | Instant WhatsApp Chat | Chat Without Saving Number | Seamless Messaging",
  description:
    "Connect instantly on WhatsApp without saving numbers. Enjoy a seamless messaging experience, chat without adding to contacts, and save time with our efficient communication solution.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="keywords"
          content="Instant WhatsApp Chat, Chat Without Saving Number, Seamless Messaging, Contact-Free Communication, Hassle-Free Chat, WhatsApp Web Interface, Efficient Messaging Solution, Time-Saving Chat, No Contact List Addition, Quick Connect on WhatsApp"
        />
        <link
          rel="icon"
          href="/favicon.png"
          type="image/x-icon"
          sizes="16x16"
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen" id="bkg">
        {children}
        <ToastContainer/>
        </div>
      </body>
    </html>
  );
}
