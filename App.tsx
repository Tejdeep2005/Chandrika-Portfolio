import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User } from 'lucide-react';
import { CustomCursor } from './components/CustomCursor';
import { AnimatedSection } from './components/AnimatedSection';
import { Navbar } from './components/Navbar';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const projectVariants = {
    initial: { y: 0, scale: 1 },
    hover: { 
      y: [0, -20, 0], 
      scale: 1.05,
      transition: {
        duration: 0.3,
        y: {
          duration: 0.2,
          ease: "easeOut"
        }
      }
    }
  };

  const projectImageVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.15,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen transition-colors duration-300`}>
      <CustomCursor />
      <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-purple-900/20 to-black/50' : 'bg-gradient-to-b from-purple-100/50 to-white/80'}`} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-4 relative z-10 pt-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              Hello, I'm
              <motion.span
                className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              > Barripati Chandrika</motion.span>
            </h1>
            <p className={`text-xl md:text-2xl ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
              Data Analyst & UI/UX Enthusiast
            </p>
            <motion.div 
              className="flex gap-4 justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-all duration-300 text-white"
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`border ${isDark ? 'border-white/20 hover:border-white/40' : 'border-black/20 hover:border-black/40'} px-6 py-3 rounded-full transition-all duration-300`}
              >
                View Work
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <motion.div
            className={`w-6 h-10 border-2 ${isDark ? 'border-white/30' : 'border-black/30'} rounded-full p-1`}
          >
            <motion.div
              className={`w-2 h-2 ${isDark ? 'bg-white/50' : 'bg-black/50'} rounded-full`}
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <AnimatedSection id="about" className={`py-20 ${isDark ? 'bg-black/90' : 'bg-white/90'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="md:w-1/2"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="chandupic.jpg"
                alt="Profile"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            <div className="md:w-1/2">
              <motion.h2
                className={`text-4xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-black'}`}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <User className="w-8 h-8" />
                About Me
              </motion.h2>
              <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm a passionate developer with a keen eye for creating beautiful and functional web applications.
                I specialize in React, Node.js, and modern web technologies, always striving to build exceptional user experiences.
              </p>
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ staggerChildren: 0.1 }}
              >
                {[
                  { icon: <Github className="w-6 h-6" />, url: "https://github.com/Chandrika205" },
                  { icon: <Linkedin className="w-6 h-6" />, url: "https://www.linkedin.com/in/chandrika-barripati/" },
                  { icon: <Mail className="w-6 h-6" />, url: "mailto:chandrikabarripati@gmail.com" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection id="projects" className={`py-20 ${isDark ? 'bg-gradient-to-b from-black to-purple-900/20' : 'bg-gradient-to-b from-white to-purple-100/20'}`}>
        <div className="container mx-auto px-4">
          <motion.h2
            className={`text-4xl font-bold mb-12 flex items-center gap-3 ${isDark ? 'text-white' : 'text-black'}`}
            whileHover={{ x: 10 }}
          >
            <Code className="w-8 h-8" />
            My Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <motion.div
                key={project}
                variants={projectVariants}
                initial="initial"
                whileHover="hover"
                onHoverStart={() => setHoveredProject(project)}
                onHoverEnd={() => setHoveredProject(null)}
                className={`${isDark ? 'bg-white/5' : 'bg-black/5'} rounded-xl overflow-hidden backdrop-blur-sm transform-gpu`}
              >
                <motion.div className="relative overflow-hidden">
                  <motion.img 
                    variants={projectImageVariants}
                    src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80`}
                    alt={`Project ${project}`}
                    className="w-full h-48 object-cover"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project ? 1 : 0 }}
                    className="absolute inset-0 bg-purple-600/20 backdrop-blur-sm"
                  />
                </motion.div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>Project Title {project}</h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                    A brief description of the project and the technologies used.
                  </p>
                  <div className="flex gap-4">
                    <motion.a
                      href="#"
                      className={`${isDark ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-500'} flex items-center gap-2`}
                      whileHover={{ x: 5 }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    <motion.a
                      href="#"
                      className={`${isDark ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-500'} flex items-center gap-2`}
                      whileHover={{ x: 5 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection id="experience" className={`py-20 ${isDark ? 'bg-black/90' : 'bg-white/90'}`}>
        <div className="container mx-auto px-4">
          <motion.h2
            className={`text-4xl font-bold mb-12 flex items-center gap-3 ${isDark ? 'text-white' : 'text-black'}`}
            whileHover={{ x: 10 }}
          >
            <Briefcase className="w-8 h-8" />
            Experience
          </motion.h2>
          <div className="space-y-8">
            {[
              { year: 'Oct 2024 - Present', title: 'Chief Placement Coordinator', company: 'Institute of Aeronautical Engineering' },
              { year: 'Jul 2023 - Mar 2024', title: 'Deputy Chief Technology Officer', company: 'e-DAM' },
              { year: 'May 2023 - Jul 2023', title: 'Web Content Writer', company: 'Aveha Solutions Pvt Ltd' },
            ].map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col md:flex-row gap-4 md:gap-8 items-start"
                whileHover={{ x: 10 }}
              >
                <div className="text-purple-400 font-mono whitespace-nowrap">{exp.year}</div>
                <div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>{exp.title}</h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{exp.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className={`py-20 ${isDark ? 'bg-gradient-to-t from-black to-purple-900/20' : 'bg-gradient-to-t from-white to-purple-100/20'}`}>
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className={`text-4xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`}
            whileHover={{ scale: 1.05 }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-8 max-w-2xl mx-auto`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </motion.p>
          <motion.a
            href="mailto:contact@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-lg transition-all duration-300 text-white"
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </motion.a>
        </div>
      </AnimatedSection>

      <footer className={`py-8 ${isDark ? 'bg-black text-gray-400' : 'bg-white text-gray-600'} text-center`}>
        <p>© 2024 <a href="https://www.linkedin.com/in/chandrika-barripati/" target="_blank">Barripati Chandrika.</a> All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;