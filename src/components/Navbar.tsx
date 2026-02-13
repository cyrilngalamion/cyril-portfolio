import starIcon from "../assets/image/star.png";
import swordIcon from "../assets/image/sword.png";
import chestIcon from "../assets/image/chest.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIconsVisible, setIsIconsVisible] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMenuOpen && !(e.target as Element).closest(".menu-container")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Close icons when clicking outside
  useEffect(() => {
    const handleClickOutsideIcons = (e: MouseEvent) => {
      if (isIconsVisible && !(e.target as Element).closest(".desktop-menu-container")) {
        setIsIconsVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutsideIcons);
    return () => document.removeEventListener("click", handleClickOutsideIcons);
  }, [isIconsVisible]);

  return (
    <nav className="w-full bg-[#252a32] border-b border-[#afb1a1]/30 py-3 sm:py-3 md:py-4 fixed top-0 z-50">
      <div className="w-full flex items-center justify-between px-4 sm:px-6 md:px-8">
        {/* Logo */}
        <div className="text-sm sm:text-sm md:text-base lg:text-xl font-bold font-headerfont">
          <span className="text-[#cfc1b1]/80">CYRIL </span>
          <span className="text-[#6df7b1]">ESTRELLADA</span>
        </div>

        {/* Desktop Menu - Hidden on mobile */}
        <div className="hidden md:block overflow-visible desktop-menu-container">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-base sm:text-lg md:text-xl relative">
            {/* MENU Text - Hidden when icons are visible */}
            <button
              onClick={() => setIsIconsVisible(!isIconsVisible)}
              className={`text-[#ffe822] font-headerfont text-md sm:text-sm md:text-base cursor-pointer hover:text-[#6df7b1] transition-all duration-300 ${
                isIconsVisible ? "opacity-0 invisible" : "opacity-100 visible"
              }`}
            >
              <h6>MENU</h6>
            </button>

            {/* Navigation Icons (Slide in from right on click) */}
            <div
              className={`flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-13 absolute right-10 transition-all duration-500 ${
                isIconsVisible
                  ? "translate-x-0 opacity-100 pointer-events-auto"
                  : "translate-x-full opacity-0 pointer-events-none"
              }`}
            >
              <button
                onClick={() => {
                  navigate("/landing-page");
                  setIsIconsVisible(false);
                }}
                className={`transition text-sm sm:text-base md:text-lg ${
                  isActive("/landing-page")
                    ? "text-[#ffe822]"
                    : "text-[#cfc1b1] hover:text-[#ffe822]"
                }`}
                aria-label="Landing Page"
              >
                <img
                  src={starIcon}
                  alt="Star"
                  className="w-4 h-4 sm:w-5 absolute self-center sm:h-5 md:w-6 md:h-6"
                />
              </button>

              <button
                onClick={() => {
                  navigate("/home");
                  setIsIconsVisible(false);
                }}
                className={`transition text-sm sm:text-base md:text-lg ${
                  isActive("/home")
                    ? "text-[#ffe822]"
                    : "text-[#cfc1b1] hover:text-[#ffe822]"
                }`}
                aria-label="Home"
              >
                <img
                  src={swordIcon}
                  alt="Sword"
                  className="w-4 h-4 sm:w-5 ml-1 self-center absolute sm:h-5 md:w-4 md:h-6"
                />
              </button>

              <button
                onClick={() => {
                  navigate("/");
                  setIsIconsVisible(false);
                }}
                className={`transition text-sm sm:text-base md:text-lg ${
                  isActive("/")
                    ? "text-[#ffe822]"
                    : "text-[#cfc1b1] hover:text-[#ffe822]"
                }`}
                aria-label="Projects"
              >
                <img
                  src={chestIcon}
                  alt="Chest"
                  className="w-4 h-4 sm:w-5 absolute self-center sm:h-5 md:w-6 md:h-6"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Visible only on mobile */}
        <div className="block md:hidden menu-container relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#ffe822] font-headerfont text-xl sm:text-base cursor-pointer hover:text-[#6df7b1] transition-colors"
          >
            <h6>MENU</h6>
          </button>

          {/* Dropdown Menu */}
          <div
            className={`absolute right-0 top-full mt-2 bg-[#252a32] border border-[#afb1a1]/30 rounded-lg shadow-lg py-2 w-48 transition-all duration-300 ${
              isMenuOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-2"
            }`}
          >
            <button
              onClick={() => {
                navigate("/landing-page");
                setIsMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 font-headerfont py-3 text-sm transition-colors ${
                isActive("/landing-page")
                  ? "text-[#ffe822] bg-[#afb1a1]/10"
                  : "text-[#cfc1b1] hover:text-[#ffe822] hover:bg-[#afb1a1]/10"
              }`}
            >
              <img
                  src={starIcon}
                  alt="Star"
                  className="w-4 h-4 sm:w-5 self-center sm:h-5 md:w-6 md:h-6"
                />
              <span>LANDING PAGE</span>
            </button>

            <button
              onClick={() => {
                navigate("/home");
                setIsMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 font-headerfont px-4 py-3 text-sm transition-colors ${
                isActive("/home")
                  ? "text-[#ffe822] bg-[#afb1a1]/10"
                  : "text-[#cfc1b1] hover:text-[#ffe822] hover:bg-[#afb1a1]/10"
              }`}
            >
              <img
                  src={swordIcon}
                  alt="Sword"
                  className="w-3 h-4 sm:w-5 mr-1 self-center sm:h-5 md:w-6 md:h-6"
                />
              <span>HOME</span>
            </button>

            <button
              onClick={() => {
                navigate("/projects");
                setIsMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 font-headerfont self-center px-4 py-1 text-sm transition-colors ${
                isActive("/projects")
                  ? "text-[#ffe822] bg-[#afb1a1]/10"
                  : "text-[#cfc1b1] hover:text-[#ffe822] hover:bg-[#afb1a1]/10"
              }`}
            >
              <img
                  src={chestIcon}
                  alt="Chest"
                  className="w-4 h-4 sm:w-5  sm:h-5 md:w-6 md:h-6"
                />
              <span>PROJECTS</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;