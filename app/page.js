import Image from "next/image";
import Link from "next/link";
import FAQAccordion from "./components/FAQAccordion";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Header Navigation */}
      <header className="relative z-10 flex items-center justify-center sm:justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5">
        {/* Desktop: Left Navigation */}
        <nav className="hidden sm:flex items-center gap-2 sm:gap-4 md:gap-7 text-xs sm:text-sm font-medium" style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}>
          <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors hidden sm:inline-block">Individual Plans</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors hidden md:inline-block">Family Plans</Link>
          <Link href="#" className="text-gray-900 font-semibold">Health</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors hidden sm:inline-block">Medicaid</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors hidden md:inline-block">Medicare</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors hidden lg:inline-block">Resources</Link>
        </nav>

        {/* Center Logo */}
        <div className="sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
          <Image
            src="/logo.png"
            alt="Lemonade"
            width={140}
            height={50}
            priority
            className="h-6 sm:h-7 md:h-9 w-auto"
          />
        </div>

        {/* Desktop: Right Navigation */}
        <nav className="hidden sm:flex items-center" style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}>
          <Link href="#" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">My Account</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center px-8 pt-16 pb-40">
        <div className="max-w-3xl text-center">
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] text-[#4A4A4A] mb-5 leading-[1.1] tracking-tight"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
          >
            Affordable Obamacare health insurance for you and your family
          </h1>
          <p 
            className="text-[18px] text-[#4A4A4A] mb-12 font-normal"
            style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
          >
            Get covered in minutes. Essential health benefits. Subsidies available for qualifying families.
          </p>
          <div className="flex flex-col items-center gap-6">
            <button 
              className="bg-[#FF006A] hover:bg-[#E5005F] text-white font-semibold px-12 py-4 rounded-md text-base transition-colors shadow-sm tracking-wide"
              style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
            >
              GET A QUOTE
            </button>
            <Link 
              href="#" 
              className="text-[#FF006A] text-sm hover:underline font-medium"
              style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
            >
              How Obamacare health insurance works
            </Link>
          </div>
          
          {/* Health Image */}
          <div className="mt-8 -mb-40 w-full max-w-[1922px]">
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
      <section className="relative z-10 py-16 px-8 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto text-center mt-5 mb-5">
          <h2 
            className="text-3xl md:text-4xl font-semibold text-[#4A4A4A] mb-3"
            style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
          >
            Trusted by millions of Americans
          </h2>
          <p 
            className="text-base text-[#4A4A4A] mb-12 max-w-3xl mx-auto font-normal"
            style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
          >
            We help you find the best Obamacare plans with essential health benefits and affordable premiums
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Payouts Section */}
            <div className="flex flex-col items-center">
              <div className="w-34 h-34 bg-white rounded-full flex items-center justify-center mb-5 shadow-sm p-4">
                <Image
                  src="/payouts.4d0cf05c.svg"
                  alt="Payouts"
                  width={50}
                  height={50}
                  className="w-full h-full object-contain"
                />
              </div>
              <p 
                className="text-2xl text-[#4A4A4A] leading-relaxed text-center"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                <span className="font-semibold">Coverage up to</span><br />
                <span className="font-bold text-base" >$1,000,000+</span>
              </p>
            </div>

            {/* Approval Rate Section */}
            <div className="flex flex-col items-center">
              <div className="w-34 h-34 bg-white rounded-full flex items-center justify-center mb-5 shadow-sm p-4">
                <Image
                  src="/apps.1249990e.svg"
                  alt="Approved"
                  width={50}
                  height={50}
                  className="w-full h-full object-contain"
                />
              </div>
              <p 
                className="text-2xl text-[#4A4A4A] leading-relaxed text-center"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                <span className="font-semibold">No medical exam</span><br />
                <span className="font-semibold">required</span>
              </p>
            </div>

            {/* Years in Business Section */}
            <div className="flex flex-col items-center">
                <div className="w-34 h-34 bg-white rounded-full flex items-center justify-center mb-5 shadow-sm p-4">
                <Image
                  src="/years.800c7078.svg"
                  alt="Years in business"
                  width={50}
                  height={50}
                  className="w-full h-full object-contain"
                />
              </div>
              <p 
                className="text-2xl text-[#4A4A4A] leading-relaxed text-center"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                <span className="font-bold text-base">10+ years</span><br />
                <span className="font-semibold">of Obamacare</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More products from Lemonade Section */}
      <section className="relative z-10 py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-semibold text-[#4A4A4A] mb-3 text-center"
            style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
          >
            Choose the right plan for you
          </h2>
          <div className="flex items-center justify-center gap-2 mb-12">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" fill="#FF006A"/>
            </svg>
            <p 
              className="text-base text-[#4A4A4A] text-center font-normal"
              style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
            >
              All plans include essential health benefits and preventive care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Bronze Plan Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <Image
                  src="/homeowners_desktop.98f9c1b4.svg"
                  alt="Bronze Plan"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 
                className="text-2xl font-semibold text-[#4A4A4A] mb-2"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                Bronze
              </h3>
              <p 
                className="text-sm text-gray-600 mb-6 flex-grow"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                Lowest monthly premium, higher out-of-pocket costs
              </p>
              <button 
                className="bg-[#FF006A] hover:bg-[#E5005F] text-white font-semibold px-6 py-3 rounded-md text-sm transition-colors w-full mb-2 tracking-wide"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                GET A QUOTE
              </button>
              <p 
                className="text-xs text-gray-600"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                FROM $200/MO
              </p>
            </div>

            {/* Silver Plan Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <Image
                  src="/car_desktop.2ab76640.svg"
                  alt="Silver Plan"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 
                className="text-2xl font-semibold text-[#4A4A4A] mb-2"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                Silver
              </h3>
              <p 
                className="text-sm text-gray-600 mb-6 flex-grow"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                Moderate monthly premium and out-of-pocket costs
              </p>
              <button 
                className="bg-[#FF006A] hover:bg-[#E5005F] text-white font-semibold px-6 py-3 rounded-md text-sm transition-colors w-full mb-2 tracking-wide"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                GET A QUOTE
              </button>
              <p 
                className="text-xs text-gray-600"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                FROM $300/MO
              </p>
            </div>

            {/* Gold Plan Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <Image
                  src="/pet_desktop.f68654f6.svg"
                  alt="Gold Plan"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 
                className="text-2xl font-semibold text-[#4A4A4A] mb-2"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                Gold
              </h3>
              <p 
                className="text-sm text-gray-600 mb-6 flex-grow"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                Higher monthly premium, lower out-of-pocket costs
              </p>
              <button 
                className="bg-[#FF006A] hover:bg-[#E5005F] text-white font-semibold px-6 py-3 rounded-md text-sm transition-colors w-full mb-2 tracking-wide"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                GET A QUOTE
              </button>
              <p 
                className="text-xs text-gray-600"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                FROM $400/MO
              </p>
            </div>

            {/* Platinum Plan Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <Image
                  src="/life_desktop.a1f2740e.svg"
                  alt="Platinum Plan"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 
                className="text-2xl font-semibold text-[#4A4A4A] mb-2"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                Platinum
              </h3>
              <p 
                className="text-sm text-gray-600 mb-6 flex-grow"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                Highest monthly premium, lowest out-of-pocket costs
              </p>
              <button 
                className="bg-[#FF006A] hover:bg-[#E5005F] text-white font-semibold px-6 py-3 rounded-md text-sm transition-colors w-full mb-2 tracking-wide"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                GET A QUOTE
              </button>
              <p 
                className="text-xs text-gray-600"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                FROM $500/MO
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Good to know Section */}
      <section className="relative z-10 py-16 px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className="text-4xl md:text-5xl font-semibold text-[#4A4A4A] mb-6"
            style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
          >
            Good to know...
          </h2>
          <p 
            className="text-[18px] text-[#4A4A4A] mb-12 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
          >
            Health insurance can be confusing, so we worked hard to make it simple. If you still have questions, you can check out{' '}
            <Link href="#" className="text-[#FF006A] underline hover:no-underline">
              Obamacare explained
            </Link>
          </p>
          
          <div className="flex justify-center">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
