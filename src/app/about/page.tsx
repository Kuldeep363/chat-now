import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="my-container text-light p-3 bg-white bg-opacity-70 min-h-screen">
        <div className="flex gap-[14px] items-center mb-4">
          <Image
            src={"/assets/whatsapp.svg"}
            alt="Chat Without Saving Number"
            width={35}
            height={35}
          />
          <p className="align-middle inline-block uppercase font-[500]">
            Chat Now
          </p>
        </div>
        <header>
          <h1 className="text-xl font-extralight">Chat Now - Send WhatsApp Messages Without Saving Contacts</h1>
          <p>
            Discover the hassle-free way to send WhatsApp messages without
            saving contacts using Chat Now.
          </p>
        </header>

        <section className="mt-3">
          <p>
            Are you tired of being unable to send WhatsApp messages without
            saving contacts? Chat Now is the solution you've been looking
            for. Now, you can effortlessly send messages to any phone number,
            even if it's not in your contact list.
          </p>
        </section>

        <section className="mt-3">
          <h2 className="font-medium">How to Use Chat Now for Direct WhatsApp Messages</h2>
          <p>Using Chat Now is simple:</p>
          <ul>
            <li> Enter the phone number.</li>
            <li> Enter desired message.</li>
            <li> Press "Start Chatting Now".</li>
            <li> Enjoy a seamless redirection to the WhatsApp chat.</li>
          </ul>
          <p className="mt-2 font-medium">Say goodbye to the hassle of saving unnecessary contacts!</p>
        </section>

        <section className="mt-3">
          <h2 className="font-medium">Features of Chat Now</h2>
          <ul>
            <li>Send direct WhatsApp messages.</li>
            <li>Copy and paste the new phone number effortlessly.</li>
            <li>Send WhatsApp messages without cluttering your contacts.</li>
            <li>Skip the process of saving unnecessary phone numbers.</li>
            <li>Quickly send messages for FREE.</li>
          </ul>
        </section>

        <section className="mt-3">
          <h2 className="font-medium">Privacy Policy</h2>
          <p>
            Rest assured, Chat Now prioritizes your privacy. We don't
            collect any of your data. The phone number you enter is securely
            forwarded to the WhatsApp app on your device to initiate a WhatsApp
            chat.
          </p>
        </section>
        <section className="mt-3">
        <p>Any query?</p>
        <a className="bg-[#00a884] text-white text-center p-2 rounded-full cursor-pointer mt-1 inline-block" target="_blank" href={"mailto:kuldeep363rawat@gmail.com"}>Contact now</a>
        </section>

        <footer className="mt-3 text-xs">
          <p>&copy; 2023 Chat Now. All rights reserved.</p>
        </footer>
    </div>
  );
};

export default page;
