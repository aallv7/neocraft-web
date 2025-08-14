// components/Footer.tsx
import React from 'react'; // Penting untuk JSX

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center text-sm mt-auto">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Copyright NeoCraft by Jaya Karya Group</p>
      </div>
    </footer>
  );
};

export default Footer;