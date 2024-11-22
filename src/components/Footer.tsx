import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto text-center text-gray-400">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
}