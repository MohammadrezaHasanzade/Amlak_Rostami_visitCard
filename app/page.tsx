"use client";

import Image from "next/image";
import neshanPng from "../public/Neshan-Logo.svg";
import baladPng from "../public/Balad-Logo.svg";
import { BsInstagram, BsTelegram, BsWhatsapp } from "react-icons/bs";
import { FaMobileScreenButton } from "react-icons/fa6";
import { userInfo } from "@/config/conf";
import DynamicText from "@/components/DynamicText/DynamicText";

export default function Home() {
  return (
    <main className="relative w-full h-11/12 min-h-160">
      <Image
        src={userInfo.bgImg}
        alt="backgroundImage"
        sizes="(max-width: 768px) 100vw, (max-width:1200px) 100vw, 100vw"
        fill
        priority
        className="object-cover object-center absolute top-0 left-0 -z-20"
      />
      <section className="z-50 text-white size-full min-h-160 backdrop-brightness-75 flex flex-col justify-between items-center gap-5 pt-8 bg-linear-to-t from-black/90 via-black/50 to-black/10">
        <div className="flex flex-col justify-center items-center gap-3 text-pretty">
          <h2 className="text-4xl font-extrabold shine-text">
            {userInfo.bussiness_name}
          </h2>
          <p className="font-semibold shine-text-gold">{userInfo.title_one}</p>
          <p className="font-bold text-sm shine-text-gold">
            {userInfo.title_two}
          </p>
          <a
            href={`tel:${userInfo.phoneNumber}`}
            className="font-semibold text-2xl flex justify-center items-center gap-2 hover:scale-105 transition-all"
          >
            <span className="tracking-wider shine-text">{userInfo.phone}</span>
            <span className="shine-text">
              <FaMobileScreenButton />
            </span>
          </a>
          <DynamicText data={userInfo.title_three} />
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-5 text-pretty pb-10">
          <div className="flex flex-col justify-center items-center gap-3">
            <p className="text-gray-400 font-semibold">
              ما را در شبکه های اجتماعی دنبال کنید
            </p>
            <div className="flex justify-center items-center gap-5">
              <a
                href={`https://wa.me/${userInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-all"
              >
                <span className="text-5xl text-green-600">
                  <BsWhatsapp />
                </span>
              </a>
              <a
                href={`https://t.me/${userInfo.telegram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-all"
              >
                <span className="text-5xl text-blue-600">
                  <BsTelegram />
                </span>
              </a>
              <a
                href={`https://instagram.com/${userInfo.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-all"
              >
                <span className="text-5xl text-pink-500">
                  <BsInstagram />
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <h5 className="text-gray-400 font-bold">آدرس و مسیریابی</h5>
            <p className="text-gray-300 text-sm">{userInfo.address}</p>
            <div className="flex justify-center items-center gap-10">
              <a
                href={`https://nshn.ir/?lat=${userInfo.lat}&lng=${userInfo.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-all"
              >
                <Image src={neshanPng} alt="neshan app logo" width={100} />
              </a>
              <a
                href={`${userInfo.balad_loc}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-all"
              >
                <Image src={baladPng} alt="balad app logo" width={50} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
