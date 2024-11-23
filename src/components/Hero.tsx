import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div id="home" className="min-h-screen matrix-bg flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Terminal className="w-16 h-16 mx-auto mb-8 text-[#00fff9]" />
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 glitch neon-text" data-text="Abdul Qadir">
            Abdul Qadir
          </h1>
          <div className="text-xl sm:text-2xl text-[#00ff00] mb-8 h-20 terminal-text">
            <TypeAnimation
              sequence={[
                'Infrastructure as Code Expert',
                1000,
                'CI/CD Pipeline Architect',
                1000,
                'Cloud Solutions Engineer',
                1000,
                'Kubernetes Specialist',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto cyber-border p-6">
            Transforming businesses through modern DevOps practices, cloud-native solutions, 
            and automated workflows. Specializing in AWS, Azure, and GCP infrastructures.
          </p>

          <div className="flex justify-center space-x-6">
            <SocialLink href="https://github.com/Abdulqadir579" icon={Github} />
            <SocialLink href="https://www.linkedin.com/in/aqsg/" icon={Linkedin} />
            <SocialLink href="mailto:abdulqadirk1998@gmail.com" icon={Mail} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const SocialLink = ({ href, icon: Icon }: { href: string; icon: any }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="w-12 h-12 bg-black/50 cyber-border rounded-lg flex items-center justify-center hover:bg-black/80 transition-colors group"
  >
    <Icon className="w-6 h-6 text-[#00fff9] group-hover:text-[#ff00c1] transition-colors" />
  </motion.a>
);