"use client";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Translations from "@/components/Translations";

export default function Home() {
  const controls = useAnimation();
  const [key, setKey] = useState(0);
  const [loading, setLoading] = useState(false);

  const prosesAdimlar = [
    {
      id: 1,
      baslik: "pt1",
      aciklama: "pa1",
      pozisyon: "left",
    },
    {
      id: 2,
      baslik: "pt2",
      aciklama: "pa2",
      pozisyon: "right",
    },
    {
      id: 3,
      baslik: "pt3",
      aciklama: "pa3",
      pozisyon: "left",
    },
    {
      id: 4,
      baslik: "pt4",
      aciklama: "pa4",
      pozisyon: "right",
    },
    {
      id: 5,
      baslik: "pt5",
      aciklama: "pa5",
      pozisyon: "left",
    },
  ];

  useEffect(() => {
    controls.start("visible");
  }, [controls, key]);

  // Form submit handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      setLoading(false);

      if (res.ok) {
        alert("Mesajınız gönderildi ✅");
        e.currentTarget.reset();
      } else {
        alert("Gönderim sırasında hata oluştu ❌");
      }
    } catch (error) {
      console.error("Form gönderme hatası:", error);
      setLoading(false);
      alert("Form gönderilemedi, lütfen tekrar deneyin ❌");
    }
  };
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    setAnimateKey((prev) => prev + 1);
  }, []);

  return (
    <>
      <LanguageSwitcher />
      {/* Ana Sayfa Hero Section */}
      <section
        id="homepage"
        className="relative h-screen w-full overflow-hidden"
      >
        <Image
          src="/images/mainbg1.webp"
          alt="Anasayfa"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <motion.h1
            key={key + "title"}
            initial={{ x: -200, opacity: 0 }}
            animate={controls}
            variants={{
              visible: {
                x: 0,
                opacity: 1,
                transition: { duration: 2, ease: "easeOut", delay: 0.5 },
              },
            }}
            className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
          >
            <Translations id="mainfirst"  />
          </motion.h1>
          <motion.p
            key={key + "subtitle"}
            initial={{ x: -200, opacity: 0 }}
            animate={controls}
            variants={{
              visible: {
                x: 0,
                opacity: 1,
                transition: { duration: 2, ease: "easeOut", delay: 0.8 },
              },
            }}
            className="mt-4 text-lg md:text-2xl text-white/90 font-medium drop-shadow-lg"
          >
            <Translations id="mainsecond"  />
          </motion.p>
        </div>
      </section>
      {/* Hakkımızda */}
<motion.section
  className="bg-gray-200 dark:bg-gray-900 py-16 px-4 transition-colors duration-300"
  id="about"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.01 }}
  transition={{ type: "spring", stiffness: 90, damping: 15 }}
>
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-64 items-start">
      {/* Sol Taraf */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, x: -50, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: false, amount: 0.01 }}
        transition={{ type: "spring", stiffness: 90, damping: 15, duration: 0.8 }}
      >
        <div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center lg:text-left">
            <Translations id="about"  />
          </h2>
          <div className="w-full h-1 bg-green-600 dark:bg-green-400 mb-8"></div>
        </div>
        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p className="text-lg">
            <span className="font-semibold text-green-700 dark:text-green-400">
              <Translations id="mainfirst"  />
            </span>
            <Translations id="paragraf1"  />
          </p>
          <p className="text-lg">
            <Translations id="paragraf2"  />
          </p>
          <p className="text-lg">
            <Translations id="paragraf3"  />
          
          </p>
          <p className="text-lg">
            <Translations id="paragraf4"  />
            
          </p>
          <p className="text-lg">
            <Translations id="paragraf5"  />
          </p>
          <p className="text-lg">
            <Translations id="paragraf6"  />
          </p>
          

        </div>
      </motion.div>

      {/* Sağ Taraf - Proses Diyagramı */}
      <div className="relative">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          <Translations id="processes"  />
        </h3>
        <div className="relative h-auto">
          {prosesAdimlar.map((adim, index) => {
            const isLeft = adim.pozisyon === "left";
            return (
              <motion.div
                key={adim.id}
                className="relative mb-16"
                initial={{ opacity: 0, x: isLeft ? -100 : 100, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.01 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.001,
                }}
              >
                <div className={`relative ${isLeft ? "mr-auto" : "ml-auto"} w-80`}>
                  <div
                    className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/30 p-6 border-l-4 ${
                      isLeft
                        ? "border-green-500 dark:border-green-400"
                        : "border-blue-500 dark:border-blue-400"
                    } transform hover:scale-105 transition-all duration-300 hover:shadow-xl dark:hover:shadow-gray-900/50`}
                  >
                    <div className="flex items-center mb-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                          isLeft
                            ? "bg-green-500 dark:bg-green-600"
                            : "bg-blue-500 dark:bg-blue-600"
                        }`}
                      >
                        {adim.id}
                      </div>
                      <h4 className="ml-3 font-semibold text-gray-900 dark:text-white">
                        <Translations id={adim.baslik}  />
                      </h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      <Translations id={adim.aciklama}  />
                    </p>
                  </div>
                </div>

                {/* Zigzag Çizgi */}
                {index < prosesAdimlar.length - 1 && (
                  <div className="absolute top-full left-0 w-full h-16 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 400 64" fill="none">
                      <path
                        d={
                          isLeft
                            ? "M80 0 L80 20 L320 20 L320 44 L320 64"
                            : "M320 0 L320 20 L80 20 L80 44 L80 64"
                        }
                        stroke="currentColor"
                        className="text-gray-400 dark:text-gray-500"
                        strokeWidth="3"
                        fill="none"
                      />
                      <circle
                        cx={isLeft ? "320" : "80"}
                        cy="64"
                        r="4"
                        fill="currentColor"
                        className="text-gray-400 dark:text-gray-500"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
</motion.section>


      {/* Ürünler */}
      <motion.section
        id="products"
        className="min-h-screen dark:bg-gray-800 bg-gray-100 w-full flex flex-col items-center justify-center py-12 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
    viewport={{ once: false, amount: 0.001 }}
    transition={{ duration: 0.8 }}
>
  {/* Başlık */}
  <div className="w-full max-w-7xl mb-12">
    <h2 className="text-4xl  font-bold text-center text-gray-800 dark:text-white mb-4">
      <Translations id="productsTitle"  />
    </h2>
    <div className="w-84 h-1 bg-green-600 dark:bg-green-400 mx-auto"></div>
  </div>




  {/* Ürün Başlık */}
  <div className="w-full max-w-7xl space-y-2">
    <h1 className=" text-3xl md:text-4xl  font-bold text-red-600 dark:text-[#ff0033] ml-4">
      <Translations id="product1title"  />
    </h1>
    <div className=" w-full h-1  bg-red-600 dark:bg-red-500  max-w-8xl mx-auto mb-4"></div>
  </div>

  {/* İçerik Container */}
  <div className="w-full max-w-7xl space-y-16 mt-4">
    {/* Üst Kısım - Soldan */}
    <motion.div
      className="flex flex-col md:flex-row items-center"
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.001 }}
      transition={{ type: "spring", stiffness: 90, damping: 15 }}
      
    >
      
      {/* Görsel */}
      <div className="w-full md:w-96 h-72 bg-gray-300 rounded-2xl overflow-hidden flex-shrink-0">
        <Image
          src="/images/yanmaz.png"
          alt="Granül geri dönüşüm"
          width={500}
          height={450}
          className="object-cover w-full h-full"
        />
      </div>
      {/* Paragraf */}
      <div className="w-full md:flex-1 md:pl-8">
        <p className="text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-200 text-center md:text-left mt-4 md:mt-0">
          <Translations id="product1"  />
        </p>
      </div>
    </motion.div>

    {/* Orta Çizgi */}
    <h1 className="text-left lg:text-right text-blue-600 dark:text-blue-600 my-4 text-3xl md:text-4xl font-bold mr-7 ">
      <Translations id="product2title"  />
    </h1>
    <div className="w-full h-1 bg-blue-600 dark:bg-blue-600 max-w-8xl mx-auto"></div>

    {/* Alt Kısım - Sağdan */}
    <motion.div
      className="flex flex-col md:flex-row-reverse items-center mb-4"
      initial={{ x: 200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.001 }}
      transition={{ type: "spring", stiffness: 90, damping: 15 }}
    >
      {/* Görsel */}
      <div className="w-full md:w-96 h-72 bg-gray-300 rounded-2xl overflow-hidden flex-shrink-0 relative">
        <Image
          src="/images/poli.png"
          alt="Granül üretimi"
          width={500}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>
      {/* Paragraf */}
      <div className="w-full md:flex-1 md:pr-8">
        <p className="text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-200 text-center md:text-left mt-4 md:mt-0">
          <Translations id="product2"  />
        </p>
      </div>
    </motion.div>
  </div>
</motion.section>

      {/* İletişim */}
      <motion.section
  id="contact"
  className="w-full min-h-screen bg-gray-200 dark:bg-gray-900 flex flex-col items-center py-16 px-6"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: false, amount: 0.001 }}
  transition={{ duration: 0.8 }}
>
  <h2 className="text-4xl font-bold text-center mb-2">
    <Translations id="contact"  />
  </h2>
  <div className="w-84 h-1 bg-green-600 dark:bg-green-400 mb-12"></div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl">
    {/* Sol Taraf - Soldan */}
    <motion.div
      className="space-y-6"
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.001 }}
      transition={{ type: "spring", stiffness: 90, damping: 15 }}
    >
      <p className="text-gray-700 dark:text-gray-300">
        <Translations id="touch"  />
      </p>
      <div className="flex items-center gap-3 text-lg text-gray-800 dark:text-gray-200">
        <FaPhoneAlt className="text-green-600 dark:text-green-400" />
        <a
          href="tel:+905555555555"
          className=" group relative"
        >
          +90 532 766 61 27
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full rounded-full"></span>
        </a>
      </div>
      <div className="flex items-center gap-3 text-lg text-gray-800 dark:text-gray-200">
        <FaEnvelope className="text-green-600 dark:text-green-400" />
        <a
          href="mailto:info@ornek.com"
          className=" group relative"
        >
          contact@omerplastik.com
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full rounded-full"></span>
        </a>
      </div>
      <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps?q=37.569713,29.333586&hl=tr&z=14&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </motion.div>

    {/* Sağ Taraf - Sağdan */}
    <motion.div
      className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-8"
      initial={{ x: 200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.001 }}
      transition={{ type: "spring", stiffness: 90, damping: 15 }}
    >
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Name"
          required
          className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          required
          className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition"
        >
          {loading ? "Gönderiliyor..." : "Gönder"}
        </button>
      </form>
    </motion.div>
  </div>
      </motion.section>

    </>
  );
}
