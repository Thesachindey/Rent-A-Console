'use client';
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 font-sans">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <span className="text-2xl font-bold text-white tracking-wide">
            BRAND<span className="text-indigo-500">.</span>
          </span>
          <p className="text-sm text-slate-400 leading-relaxed">
            Building modern web experiences with clean design and focus on performance.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-indigo-400 transition-colors">𝕏</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">GitHub</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">LinkedIn</a>
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Product</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Stay Updated</h4>
          <p className="text-sm text-slate-400 mb-4">Subscribe to our weekly newsletter.</p>
          <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-slate-800 text-white placeholder-slate-500 text-sm px-4 py-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
            />
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2.5 rounded-md transition-colors whitespace-nowrap">
              Join
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Border Line */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} BRAND Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
