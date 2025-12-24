import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F7F7F7] border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <p 
              className="text-sm text-gray-600 leading-relaxed"
              style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
            >
              Affordable health insurance for you and your family. Get covered in minutes.
            </p>
          </div>

          {/* Account & Support */}
          <div>
            <h3 
              className="text-base font-semibold text-[#4A4A4A] mb-4"
              style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
            >
              Account & Support
            </h3>
            <ul className="space-y-3">
            
              <li>
                <Link 
                  href="mailto:mleyva.dev@gmail.com" 
                  className="text-sm text-gray-600 hover:text-[#FF006A] transition-colors"
                  style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  href="mailto:mleyva.dev@gmail.com" 
                  className="text-sm text-gray-600 hover:text-[#FF006A] transition-colors"
                  style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <Link 
                href="#" 
                className="text-gray-600 hover:text-[#FF006A] transition-colors"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                Privacy Policy
              </Link>
              <span className="text-gray-400">|</span>
              <Link 
                href="#" 
                className="text-gray-600 hover:text-[#FF006A] transition-colors"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                Terms of Service
              </Link>
              <span className="text-gray-400">|</span>
              <Link 
                href="#" 
                className="text-gray-600 hover:text-[#FF006A] transition-colors"
                style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
              >
                Cookie Policy
              </Link>
            </div>

            {/* Copyright */}
            <p 
              className="text-sm text-gray-600"
              style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
            >
              © {new Date().getFullYear()} American Solutions Center LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

