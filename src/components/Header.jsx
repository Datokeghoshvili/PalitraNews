import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="mx-auto flex flex-col pt-12 lg:pt-0 pb-0.5 justify-center items-center w-full max-w-[375px] lg:max-w-fit lg:mb-[90px] gap-y-[12px] bg-white text-center">
      <div className="flex items-center justify-between lg:justify-start w-full px-4">
        {/* Logo */}
        <div
          className="w-[31px] h-[46px] bg-[#2e2e2e] text-white flex items-center justify-center text-xs font-bold
        lg:mr-[99px]  lg:w-[72px] lg:h-[72px]"
        >
          <img
            className="w-[26px] h-[27px] lg:w-[72px] lg:h-[72px]"
            src="./images/logo.svg"
            alt=""
          />
        </div>
        <nav className="hidden lg:flex lg:flex-row lg:gap-[1.6rem] ">
          <a href="#">საზოგადოება</a>
          <a href="#">პოლიტიკა</a>
          <a href="#">ეკონომიკა</a>
          <a href="#">სპორტი</a>
          <a href="#">მეცნიერება</a>
          <a href="#">კულტურა</a>
          <a href="#">მოდა</a>
          <a href="#">ჯანმრთელობა</a>
        </nav>

        <div className="flex  justify-end items-center gap-2 flex-1 px-4">
          <input
            type="text"
            placeholder="მოძებნე"
            class="w-[150px] h-[24px] px-3 text-gray-600 text-sm border border-gray-300 rounded-full placeholder:text-gray-400 focus:outline-none"
          />
          <button className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center">
            <FaUser className="text-gray-600 text-sm" />
          </button>
        </div>
      </div>

      <nav className="flex flex-wrap justify-center gap-2 text-[#636363] text-[12px] font-normal leading-[18.2px] w-[375px] h-[79px] px-3 lg:hidden">
        {/* Dropdown */}
        <div className="relative">
          <button
            className="flex items-center gap-1"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            კატეგორიები <FiChevronDown size={14} />
          </button>
          {showDropdown && (
            <div className="absolute mt-1 bg-white border border-gray-200 rounded shadow-md z-10 text-[#202020] font-inter text-[12px] not-italic font-medium leading-[18.2px]">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                მთავარი
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                ახალი
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                ეკონომიკა
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                კულტურა
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                ჯანმრთელობა
              </a>
            </div>
          )}
        </div>

        <a href="#">პოლიტიკა</a>
        <a href="#">მოდა</a>
        <a href="#">სპორტი</a>
        <a href="#">სპორტი</a>
      </nav>
    </header>
  );
}
