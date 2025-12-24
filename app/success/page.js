"use client";

import Image from "next/image";
import Link from "next/link";

export default function SuccessPage() {
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
      <main className="-mt-15 md:-mt-10 lg:-mt-20 relative z-10 flex flex-col items-center px-4 sm:px-8 pt-8 sm:pt-12 pb-20">
        <div className="max-w-md w-full flex flex-col items-center">
          {/* Success Illustration */}
          <div className="mb-6 sm:mb-8 flex items-center justify-center">
            <Image
              src="/successok.png"
              alt="Success"
              width={300}
              height={300}
              className="w-20 sm:w-16 md:w-24 h-auto"
              priority
            />
          </div>

          {/* Success Message */}
          <div className="text-center mb-8">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl text-[#4A4A4A] font-semibold mb-4"
              style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
            >
              ¡Éxito!
            </h1>
            <p
              className="text-base sm:text-lg text-[#4A4A4A] font-normal mb-2"
              style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
            >
              Tu información ha sido recibida exitosamente.
            </p>
            <p
              className="text-base sm:text-lg text-[#4A4A4A] font-normal"
              style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
            >
              Un representante se pondrá en contacto contigo pronto.
            </p>
          </div>

          {/* Continue Button */}
          <Link
            href="/"
            className="w-full mt-8 bg-gradient-to-r from-[#FF006A] to-[#E5005F] hover:from-[#E5005F] hover:to-[#CC0054] text-white font-semibold py-4 rounded-md text-base transition-all shadow-sm tracking-wide uppercase text-center"
            style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
          >
            Continuar
          </Link>
        </div>
      </main>
    </div>
  );
}

