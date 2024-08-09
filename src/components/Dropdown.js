import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        Discover
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
            >
              Linktree for Instagram
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
            >
              Linktree for TikTok
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
            >
              Linktree for Twitter
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
            >
              Linktree for LinkedIn
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
