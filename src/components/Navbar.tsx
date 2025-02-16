import { motion, useScroll, useTransform } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    [
      isDark ? "rgba(0, 0, 0, 0)" : "rgba(255, 255, 255, 0)",
      isDark ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)",
    ]
  );

  // Smooth scrolling function with delay fix
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.a
            onClick={() => scrollToSection("home")}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
          >
            BC
          </motion.a>

          <div className="flex items-center gap-8">
            <motion.div className="hidden md:flex gap-6">
              {["Home", "About", "Projects", "Experience", "Contact"].map(
                (item) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    whileHover={{ y: -2 }}
                    className={`cursor-pointer ${
                      isDark
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-black"
                    } transition-colors`}
                  >
                    {item}
                  </motion.button>
                )
              )}
            </motion.div>
            <ThemeToggle isDark={isDark} toggle={toggleTheme} />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
