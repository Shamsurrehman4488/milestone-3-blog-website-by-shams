import Link from 'next/link';
 

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl md:w-[980px] mx-auto">
        {/* Footer */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Logo and Social Links */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2 mb-6">
               
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">ShamsiBlogs</h3>
            </div>

            <p className="text-gray-600 text-xs max-w-xs">
            Exploring ideas, sharing insights, and fostering community through the written word.
            </p>
         {/* icons */}   
         <div className="flex w-[150px] gap-1">
  {/* Facebook */}
  <Link href="#" className="text-gray-400  hover:border-2 border-gray-200 rounded-full p-2">
    <span className="sr-only">Facebook</span>
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  </Link>

  {/* Twitter */}
  <Link href="#" className="text-gray-400 hover:text-teal-600 hover:border-2 border-gray-200 rounded-full p-2">
    <span className="sr-only">Twitter</span>
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
  </Link>

  {/* Instagram */}
  <Link href="#" className="text-gray-400 hover:text-teal-600 hover:border-2 border-gray-200 rounded-full p-2">
    <span className="sr-only">Instagram</span>
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
    </svg>
  </Link>

  {/* Pinterest */}
  <Link href="#" className="text-gray-400 hover:text-teal-600 hover:border-2 border-gray-200 rounded-full p-2">
    <span className="sr-only">Pinterest</span>
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
    </svg>
  </Link>

  {/* YouTube */}
  <Link href="#" className="text-gray-400 hover:text-teal-600 hover:border-2 border-gray-200 rounded-full p-2">
    <span className="sr-only">YouTube</span>
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  </Link>
</div>
          


          </div>

          {/* Category Section */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-[#9A9CAA] uppercase tracking-wider mb-4">CATEGORY</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="#" className="text-[#272343] hover:text-[#007580] hover:underline">Technology</Link></li>
              <li><Link href="#" className="text-[#272343] hover:text-[#007580] hover:underline">Lifestyle</Link></li>
              <li><Link href="#" className="text-[#272343] hover:text-[#007580] hover:underline">Travel</Link></li>
              <li><Link href="#" className="text-[#272343] hover:text-[#007580] hover:underline">Food</Link></li>
               
            </ul>
          </div>

          {/* Support Section */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-[#9A9CAA] uppercase tracking-wider mb-4">SUPPORT</h3>
            <ul className="space-y-2 text-xs">
             <li><Link href="#" className="text-[#272343] hover:text-[#007580] hover:underline">About</Link></li>
             <li><Link href="#" className="text-[#272343] hover:text-[#007580] hover:underline">Contact</Link></li>
              <li><Link href="#" className="text-[#272343] hover:text-[#007580] hover:underline">Terms & Conditions</Link></li>
              <li><Link href="#" className="text-[#272343] hover:text-[#007580] hover:underline">Privacy Policy</Link></li>
           
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <h3 className="text-sm font-semibold text-center lg:text-left text-[#9A9CAA] uppercase tracking-wider mb-4">Email Us</h3>
            <p className="mt-4 text-center lg:text-left text-xs text-gray-600">
            Get the latest posts delivered right to your inbox.
            </p>
            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  className="w-full px-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your email"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-white bg-[#029FAE] rounded-md sm:rounded-l-none sm:rounded-r-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
            
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8  pt-8 border-t  text-center border-gray-200">
          <div className="text-center">
            <p className="text-gray-400 text-xs text-center ">
            © 2024 ShamsiBlogs. All rights reserved. 
            </p>
            
          </div>
        </div>
        </div>
    </footer>
  );
};

export default Footer;