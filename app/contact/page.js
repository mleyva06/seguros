"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

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
              Please provide your information to get started.
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
                First Name
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
                placeholder="Enter your first name"
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-[#4A4A4A] mb-2"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                Last Name
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
                placeholder="Enter your last name"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phonenumber"
                className="block text-sm font-medium text-[#4A4A4A] mb-2"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                Phone Number
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
                placeholder="Enter your phone number"
              />
            </div>

            {/* Zip Code */}
            <div>
              <label
                htmlFor="zipcode"
                className="block text-sm font-medium text-[#4A4A4A] mb-2"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                Zip Code
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
                placeholder="Enter your zip code"
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
              {isSubmitting ? "GUARDANDO..." : "NEXT"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

