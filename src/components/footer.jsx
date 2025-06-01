import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#dadada] py-12">
      <div className="max-w-7xl mx-auto px-16">
        <div className="flex justify-center space-x-12 mb-8">
          <img src="/images/img_group.svg" alt="social" className="w-11 h-11" />
          <img src="/images/img_group_blue_gray_700.svg" alt="social" className="w-11 h-11" />
          <img src="/images/img_group_blue_gray_700_44x44.svg" alt="social" className="w-11 h-11" />
        </div>

        {/* Privacy and Terms Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 mb-6">
          <a href="#" className="text-black text-sm font-medium hover:text-gray-600">
            წესები და პირობები
          </a>
          <a href="#" className="text-[#3E3E3E] font-[Inter] text-sm font-medium leading-none">
            კონფიდენციალურობის პოლიტიკა
          </a>
        </div>

        <div className="text-center">
          <p className="text-[#3E3E3E] font-[Inter] text-[12px] font-medium leading-none">
            © 2025 ყველა უფლება დაცულია
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
