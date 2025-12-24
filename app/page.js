import Image from "next/image";
import Link from "next/link";
import FAQAccordion from "./components/FAQAccordion";
import Footer from "./components/Footer";

export default function Home() {
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
      <main className="-mt-25 md:-mt-30 lg:-mt-35 relative z-10 flex flex-col items-center px-4 sm:px-6 md:px-8 pt-10 sm:pt-12 md:pt-16 pb-32 sm:pb-36 md:pb-40">
        <div className="max-w-3xl text-center">
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] text-[#4A4A4A] mb-4 sm:mb-5 leading-[1.1] tracking-tight px-2"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
          >
            Affordable Obamacare health insurance for you and your family
          </h1>
          <p 
            className="text-base sm:text-lg text-[#4A4A4A] mb-8 sm:mb-10 md:mb-12 font-normal px-4"
            style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
          >
            Get covered in minutes. Essential health benefits. Subsidies available for qualifying families.
          </p>
          <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6">
            <Link 
              href="/contact"
              className="bg-[#FF006A] py-4 px-10 hover:bg-[#E5005F] text-white font-semibold px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-md text-sm sm:text-base transition-colors shadow-sm tracking-wide text-center sm:w-auto"
              style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
            >
              GET A QUOTE
            </Link>
            <Link 
              href="#" 
              className="text-[#FF006A] text-xs sm:text-sm hover:underline font-medium"
              style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
            >
              How Obamacare health insurance works
            </Link>
          </div>
          
          {/* Health Image */}
          <div className="mt-6 sm:mt-7 md:mt-8 -mb-32 sm:-mb-36 md:-mb-40 w-full max-w-[1922px]">
            <Image
              src="/familyok.png"
              alt="Health illustration"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority={false}
            />
          </div>
        </div>
      </main>

      {/* Trusted Section */}
      <section className="relative z-10 py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto text-center mt-5 mb-5">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#4A4A4A] mb-3"
            style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
          >
            Trusted by millions of Americans
          </h2>
          <p 
            className="text-sm sm:text-base text-[#4A4A4A] mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto font-normal px-4"
            style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
          >
            We help you find the best Obamacare plans with essential health benefits and affordable premiums
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 max-w-5xl mx-auto">
            {/* Plans from $0 Section */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 bg-white rounded-full flex items-center justify-center mb-4 sm:mb-5 shadow-sm p-1">
                <Image
                  src="/costo.png"
                  alt="Plans from $0"
                  width={288}
                  height={288}
                  className="w-full h-full object-contain"
                  quality={100}
                  unoptimized
                />
              </div>
              <p 
                className="text-xl sm:text-2xl text-[#4A4A4A] leading-relaxed text-center px-2"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                <span className="font-semibold">Plans from</span><br />
                <span className="font-bold">$0/month</span>
              </p>
            </div>

            {/* Pre-existing Conditions Section */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 bg-white rounded-full flex items-center justify-center mb-4 sm:mb-5 shadow-sm p-1">
                <Image
                  src="/pre.png"
                  alt="Pre-existing conditions"
                  width={288}
                  height={288}
                  className="w-full h-full object-contain"
                  quality={100}
                  unoptimized
                />
              </div>
              <p 
                className="text-xl sm:text-2xl text-[#4A4A4A] leading-relaxed text-center px-2"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                <span className="font-semibold">Pre-existing conditions</span><br />
                <span className="font-semibold">don&apos;t matter</span>
              </p>
            </div>

            {/* Government Subsidies Section */}
            <div className="flex flex-col items-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 bg-white rounded-full flex items-center justify-center mb-4 sm:mb-5 shadow-sm p-1">
                <Image
                  src="/gobierno.png"
                  alt="Government subsidies"
                  width={288}
                  height={288}
                  className="w-full h-full object-contain"
                  quality={100}
                  unoptimized
                />
              </div>
              <p 
                className="text-xl sm:text-2xl text-[#4A4A4A] leading-relaxed text-center px-2"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                <span className="font-semibold">Government subsidies</span><br />
                <span className="font-semibold">available</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More products from Lemonade Section */}
      <section className="relative z-10 py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#4A4A4A] mb-3 text-center"
            style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
          >
            Our Additional Services
          </h2>
          <div className="flex items-center justify-center gap-2 mb-8 sm:mb-10 md:mb-12">
            
            <p 
              className="text-sm sm:text-base text-[#4A4A4A] text-center font-normal px-4"
              style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
            >
              Professional services tailored to meet your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
            {/* Health Insurance Service Card */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 md:p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 -my-6 sm:-my-7 md:-my-8 flex items-center justify-center">
                <Image
                  src="/segurosalud.png"
                  alt="Health Insurance"
                  width={176}
                  height={176}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 
                className="text-xl sm:text-xl md:text-2xl font-semibold text-[#4A4A4A] mb-2"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                Health Insurance
              </h3>
              <p 
                className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-5 md:mb-6 flex-grow"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                Comprehensive health coverage plans for individuals and families with affordable premiums
              </p>
              <Link 
                href="/contact"
                className="bg-[#FF006A] hover:bg-[#E5005F] text-white font-semibold px-4 sm:px-5 md:px-6 py-2.5 sm:py-2.5 md:py-3 rounded-md text-xs sm:text-sm transition-colors w-full mb-2 tracking-wide text-center block"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                LEARN MORE
              </Link>
              <p 
                className="text-[10px] sm:text-xs text-gray-600"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                GET A QUOTE TODAY
              </p>
            </div>

            {/* Immigration Forms Service Card */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 md:p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 -my-6 sm:-my-7 md:-my-8 flex items-center justify-center">
                <Image
                  src="/edu.png"
                  alt="Immigration Forms"
                  width={176}
                  height={176}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 
                className="text-xl sm:text-xl md:text-2xl font-semibold text-[#4A4A4A] mb-2"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                Immigration Forms
              </h3>
              <p 
                className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-5 md:mb-6 flex-grow"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                Expert assistance with immigration form preparation and documentation for your visa applications
              </p>
              <Link 
                href="/contact"
                className="bg-[#FF006A] hover:bg-[#E5005F] text-white font-semibold px-4 sm:px-5 md:px-6 py-2.5 sm:py-2.5 md:py-3 rounded-md text-xs sm:text-sm transition-colors w-full mb-2 tracking-wide text-center block"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                LEARN MORE
              </Link>
              <p 
                className="text-[10px] sm:text-xs text-gray-600"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                START YOUR APPLICATION
              </p>
            </div>

            {/* LLC Creation Service Card */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 md:p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 -my-6 sm:-my-7 md:-my-8 flex items-center justify-center">
                <Image
                  src="/llc.png"
                  alt="LLC Creation"
                  width={176}
                  height={176}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 
                className="text-xl sm:text-xl md:text-2xl font-semibold text-[#4A4A4A] mb-2"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                LLC Creation
              </h3>
              <p 
                className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-5 md:mb-6 flex-grow"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                Complete LLC formation services to help you start your business with proper legal structure
              </p>
              <Link 
                href="/contact"
                className="bg-[#FF006A] hover:bg-[#E5005F] text-white font-semibold px-4 sm:px-5 md:px-6 py-2.5 sm:py-2.5 md:py-3 rounded-md text-xs sm:text-sm transition-colors w-full mb-2 tracking-wide text-center block"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                LEARN MORE
              </Link>
              <p 
                className="text-[10px] sm:text-xs text-gray-600"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                FORM YOUR LLC NOW
              </p>
            </div>

            {/* Web Development Service Card */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 md:p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 -my-6 sm:-my-7 md:-my-8 flex items-center justify-center">
                <Image
                  src="/web.png"
                  alt="Web Development"
                  width={176}
                  height={176}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 
                className="text-xl sm:text-xl md:text-2xl font-semibold text-[#4A4A4A] mb-2"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                Web Development
              </h3>
              <p 
                className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-5 md:mb-6 flex-grow"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                Professional web development services to create modern, responsive websites for your business
              </p>
              <Link 
                href="/contact"
                className="bg-[#FF006A] hover:bg-[#E5005F] text-white font-semibold px-4 sm:px-5 md:px-6 py-2.5 sm:py-2.5 md:py-3 rounded-md text-xs sm:text-sm transition-colors w-full mb-2 tracking-wide text-center block"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                LEARN MORE
              </Link>
              <p 
                className="text-[10px] sm:text-xs text-gray-600"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                GET YOUR QUOTE
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Good to know Section */}
      <section className="relative z-10 py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#4A4A4A] mb-4 sm:mb-5 md:mb-6"
            style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
          >
            Good to know...
          </h2>
          <p 
            className="text-base sm:text-lg text-[#4A4A4A] mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-4"
            style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
          >
            Health insurance can be confusing, so we worked hard to make it simple. If you still have questions, you can check out{' '}
            <Link href="#" className="text-[#FF006A] underline hover:no-underline">
              Obamacare explained
            </Link>
          </p>
          
          <div className="flex justify-center px-2">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
