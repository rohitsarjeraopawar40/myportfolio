import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isopen, setIsopen] = useState(false);
  const [active, setActive] = useState("");
  const [isScroll, setIsScroll] = useState(false);
  // scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleMenuItemClick = (sectionid) => {
    setActive(sectionid);
    setIsopen(false);
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experiance", label: "Experiance" },
    { id: "works", label: "Works" },
    { id: "education", label: "Education" },
  ];
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScroll
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec] ">&lt;</span>
          <span className="text-[#ffffff] ">Rohit</span>
          <span className="text-[#ffffff] ">Pawar</span>
          <span className="text-[#8245ec] "> /</span>
          <span className="text-[#8245ec] ">&gt;</span>
        </div>
        {/* desktop */}
        <ul className="hidden md:flex space-x-8 text-gray-300 ">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                setActive === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        {/* social media */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/rohitsarjeraopawar40"
            target="_blank"
            rel="noopener norefferer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/rohitpawar-web-dev/"
            target="_blank"
            rel="noopener norefferer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        {/* mobile device */}
        <div className="md:hidden">
          {isopen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsopen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsopen(true)}
            />
          )}
        </div>
      </div>
      {/* mobile menu items  */}
      {isopen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white text-lg font-semibold ${
                  active === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button
                  className=""
                  onClick={() => handleMenuItemClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/rohitsarjeraopawar40"
                target="_blank"
                rel="noopener norefferer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rohitpawar-web-dev/"
                target="_blank"
                rel="noopener norefferer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
