import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-16">Get in Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <motion.a
              href="mailto:abdulqadirk1998@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors"
            >
              <Mail className="w-8 h-8 mx-auto mb-4 text-emerald-400" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-400">abdulqadirk1998@gmail.com</p>
            </motion.a>
            
            <motion.a
              href="tel:+971588028136"
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors"
            >
              <Phone className="w-8 h-8 mx-auto mb-4 text-emerald-400" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">+971588028136</p>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}