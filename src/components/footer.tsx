import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full md:px-16 px-6 py-8 border-[#6B7280] text-black">
      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row justify-between gap-8 py-8">
        {/* Newsletter Section */}
        <div className="flex flex-col gap-6 w-full md:w-[380px] items-start">
          <h1 className="text-3xl md:text-4xl italic font-bold">Send Me News</h1>
          <div className="flex w-full gap-4">
            <input
              className="border-b-2 border-black focus:outline-none w-full bg-transparent text-[#6B7280] placeholder-gray-400"
              placeholder="Enter your email"
            />
            <button className="px-4 py-2 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-200 transition duration-300">
              GET INSIGHTS
            </button>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col sm:flex-row justify-between gap-8 md:gap-20">
          <div className="flex flex-col gap-4">
            <h1 className="text-xl md:text-2xl font-bold">Content</h1>
            <div className="flex flex-col gap-2">
              <a href="#" className="hover:text-gray-300 transition duration-200">Blog</a>
              <a href="#" className="hover:text-gray-300 transition duration-200">Podcasts</a>
              <a href="#" className="hover:text-gray-300 transition duration-200">Books</a>
              <a href="#" className="hover:text-gray-300 transition duration-200">Subscription</a>
            </div>
          </div>
          {/* Add more sections if needed, removed duplicates for clarity */}
          <div className="flex flex-col gap-4">
            <h1 className="text-xl md:text-2xl font-bold">Support</h1>
            <div className="flex flex-col gap-2">
              <a href="#" className="hover:text-gray-300 transition duration-200">Help</a>
              <a href="#" className="hover:text-gray-300 transition duration-200">FAQ</a>
              <a href="#" className="hover:text-gray-300 transition duration-200">Terms</a>
              <a href="#" className="hover:text-gray-300 transition duration-200">Privacy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-6 border-t border-gray-600">
        <Link to="/" className="flex items-end">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold mr-1">Q.</p>
          <p className="italic text-2xl sm:text-3xl md:text-3xl font-light">Studio</p>
        </Link>
        <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-400">
          <div className="flex gap-2">
            <p>@2025</p>
            <p>Q.studio by Raj Mane</p>
          </div>
          <p>All rights reserved</p>
          <a href="#" className="hover:text-gray-300 transition duration-200">Privacy</a>
          <a href="#" className="hover:text-gray-300 transition duration-200">Contact</a>
        </div>
      </div>
    </div>
  );
}