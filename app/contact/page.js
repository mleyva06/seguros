"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

// Prevent static generation to avoid build-time errors
export const dynamic = 'force-dynamic';

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    phonenumber: "",
    zipcode: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const { data, error } = await supabase
        .from("contact")
        .insert([
          {
            name: formData.name,
            last_name: formData.lastname,
            phone_number: formData.phonenumber,
            zip_code: formData.zipcode,
          },
        ])
        .select();

      if (error) {
        throw error;
      }

      // Redirigir a la página de éxito
      router.push("/success");
    } catch (error) {
      console.error("Error saving data:", error);
      setSubmitMessage("Error al guardar la información. Por favor, intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Header Navigation */}
      <header className="relative z-10 flex items-center justify-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5">
        {/* Logo */}
        <div className="-mt-14 md:-mt-15 lg:-mt-18">
          <Image
            src="/asc.png"
            alt="Lemonade"
            width={280}
            height={100}
            priority
            className="h-44 md:h-48 lg:h-64 w-auto"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="-mt-25 md:-mt-30 lg:-mt-35 relative z-10 flex flex-col items-center px-4 sm:px-8 pt-8 sm:pt-12 pb-20">
        <div className="max-w-md w-full">
          {/* Title */}
          <div className="text-center mb-8">
         
            <p
              className="text-lg sm:text-xl text-[#4A4A4A] font-normal"
              style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
            >
              Por favor proporciona tu información para comenzar.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#4A4A4A] mb-2"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-[#4A4A4A] focus:outline-none focus:ring-2 focus:ring-[#FF006A] focus:border-transparent"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
                placeholder="Ingresa tu nombre"
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-[#4A4A4A] mb-2"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                Apellido
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-[#4A4A4A] focus:outline-none focus:ring-2 focus:ring-[#FF006A] focus:border-transparent"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
                placeholder="Ingresa tu apellido"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phonenumber"
                className="block text-sm font-medium text-[#4A4A4A] mb-2"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                Número de Teléfono
              </label>
              <input
                type="tel"
                id="phonenumber"
                name="phonenumber"
                value={formData.phonenumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-[#4A4A4A] focus:outline-none focus:ring-2 focus:ring-[#FF006A] focus:border-transparent"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
                placeholder="Ingresa tu número de teléfono"
              />
            </div>

            {/* Zip Code */}
            <div>
              <label
                htmlFor="zipcode"
                className="block text-sm font-medium text-[#4A4A4A] mb-2"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                Código Postal
              </label>
              <input
                type="text"
                id="zipcode"
                name="zipcode"
                value={formData.zipcode}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-[#4A4A4A] focus:outline-none focus:ring-2 focus:ring-[#FF006A] focus:border-transparent"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
                placeholder="Ingresa tu código postal"
              />
            </div>

            {/* Submit Message */}
            {submitMessage && (
              <div
                className={`mt-4 p-3 rounded-md text-sm ${
                  submitMessage.includes("Error")
                    ? "bg-red-100 text-red-700"
                    : "bg-green-100 text-green-700"
                }`}
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                {submitMessage}
              </div>
            )}

            {/* Next Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full mt-8 bg-gradient-to-r from-[#FF006A] to-[#E5005F] hover:from-[#E5005F] hover:to-[#CC0054] text-white font-semibold py-4 rounded-md text-base transition-all shadow-sm tracking-wide uppercase ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
            >
              {isSubmitting ? "GUARDANDO..." : "SIGUIENTE"}
            </button>

            {/* Or Divider */}
            <div className="flex items-center justify-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span
                className="px-4 text-sm text-[#4A4A4A]"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                O
              </span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/17866629243"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-4 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-4 rounded-md text-base transition-all shadow-sm tracking-wide uppercase flex items-center justify-center gap-2"
              style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Contactar por WhatsApp
            </a>
          </form>
        </div>
      </main>
    </div>
  );
}

