import FormCard from "@/app/ui/form";
import Image from "next/image";

export default function Home() {
  return (
    <main >
      <div className="w-screen bg-[#00a884] my-container py-10 ">
        <div className="flex gap-[14px] items-center mb-4">
          <Image
            src={"/assets/whatsapp.svg"}
            alt="Chat Without Saving Number"
            width={35}
            height={35}
          />
          <p className="text-white align-middle inline-block uppercase font-[500]">
            Chat Now
          </p>
        </div>
      </div>
      <div className="-top-7 relative md:-top-15 my-container m-auto">
        <div className="flex gap-3 flex-wrap-reverse bg-white p-5 rounded-sm text-[#252525]">
          <div className="text-container md:flex-1 w-full">
            <h1 className="text-xl font-extralight">
              Instant WhatsApp chat without saving numbers
            </h1>
            <h2 className="text-md font-normal">
              Seamless Messaging Experience for Quick Connections
            </h2>
            <div className="flex items-end gap-3 flex-wrap mt-2 max-sm:justify-center">
              <a
                href="https://www.buymeacoffee.com/rawat"
                target="_blank"
                className="w-full md:w-[150px] md:h-[150px]"
              >
              <Image
                src={"/assets/bmc_qr.png"}
                alt="Chat without saving number, buy me a coffee"
                width={150}
                height={150}
                className="w-full"
              />
              </a>
              <a
                href="https://www.buymeacoffee.com/rawat"
                target="_blank"
                className="p-2 px-3 rounded-full bg-[#ffdd00] flex gap-1 items-center max-sm:w-full justify-center"
              >
                <Image
                  src={"/assets/bmc_gif.gif"}
                  alt="Chat without saving number, buy me a coffee"
                  width={25}
                  height={25}
                />
                <p className="text-sm font-medium">Buy me a coffee</p>
              </a>
            </div>
          </div>
          <FormCard />
        </div>
      </div>
    </main>
  );
}
