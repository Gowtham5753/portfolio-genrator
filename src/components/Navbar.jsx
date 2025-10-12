import React from 'react';

const Navbar = ({ onBack, onShare, viewOnly }) => {
    const isViewOnly = viewOnly; // use explicit prop instead of relying on onBack

    const scrollToSection = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="sticky top-0 bg-gray-800/80 backdrop-blur-sm p-4 z-50 flex justify-between items-center border-b border-gray-700">
            <div>
                {!isViewOnly && onBack && (
                    <button onClick={onBack} className="text-white hover:text-blue-400 transition-colors">
                        &larr; Edit Details
                    </button>
                )}
            </div>
            <div className="flex items-center space-x-6">
                <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-white hover:text-blue-400 transition-colors">About</a>
                <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="text-white hover:text-blue-400 transition-colors">Skills</a>
                <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="text-white hover:text-blue-400 transition-colors">Projects</a>
                <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-white hover:text-blue-400 transition-colors">Contact</a>
                {!isViewOnly && onShare && (
                    <button onClick={onShare} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors">
                        Share
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
