const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Customer Services */}
          <div>
            <h3
              className="font-bold text-lg mb-4"
              style={{
                fontFamily: "Mulish, sans-serif",
                color: "#0C0F35",
              }}
            >
              CUSTOMER SERVICES
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Track your Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Return & Exchange
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Shipping & Delivery
                </a>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3
              className="font-bold text-lg mb-4"
              style={{
                fontFamily: "Mulish, sans-serif",
                color: "#0C0F35",
              }}
            >
              ABOUT US
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Helpful Links */}
          <div>
            <h3
              className="font-bold text-lg mb-4"
              style={{
                fontFamily: "Mulish, sans-serif",
                color: "#0C0F35",
              }}
            >
              HELPFUL LINKS
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* More Information */}
          <div>
            <h3
              className="font-bold text-lg mb-4"
              style={{
                fontFamily: "Mulish, sans-serif",
                color: "#0C0F35",
              }}
            >
              MORE INFORMATION
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Bulk Orders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Corporate Gifts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Affiliate Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Wholesale
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="#"
            className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            <span className="text-gray-700">f</span>
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            <span className="text-gray-700">t</span>
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            <span className="text-gray-700">in</span>
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            <span className="text-gray-700">ig</span>
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            <span className="text-gray-700">yt</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 text-center text-gray-500">
          <p>&copy; 2024 IQ Jewelry. All rights reserved. | Privacy Policy | Terms of Service | Sitemap</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
