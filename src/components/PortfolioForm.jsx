import React, { useState } from 'react';

const PortfolioForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: 'Jane Doe',
        about: 'A passionate full-stack developer with expertise in creating dynamic and user-friendly web applications. Loves to learn new technologies and solve complex problems.',
        skills: 'React, JavaScript, Node.js, Python, Tailwind CSS, Docker, SQL',
        projects: 'E-commerce Platform: A fully-featured online store with React and Node.js; Task Management App: A tool to organize daily tasks, built with Vue and Firebase',
        github: 'https://github.com/janedoe',
        linkedin: 'https://linkedin.com/in/janedoe',
        contact: 'jane.doe@email.com',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="max-w-2xl mx-auto p-8 animate-fade-in">
            <h1 className="text-4xl font-bold text-center mb-2 text-blue-400">Portfolio Generator</h1>
            <p className="text-center text-gray-400 mb-8">Fill in your details to instantly create a beautiful, shareable portfolio.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <textarea name="about" value={formData.about} onChange={handleChange} placeholder="About Me" rows="4" className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                <div>
                    <label className="text-sm text-gray-400">Skills (comma-separated, e.g., React, Python, Docker)</label>
                    <input type="text" name="skills" value={formData.skills} onChange={handleChange} placeholder="React, JavaScript, Node.js..." className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                 <div>
                    <label className="text-sm text-gray-400">Projects (format: `Title: Description; Title 2: Description 2`)</label>
                    <textarea name="projects" value={formData.projects} onChange={handleChange} placeholder="Project One: A cool description..." rows="4" className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <input type="url" name="github" value={formData.github} onChange={handleChange} placeholder="GitHub URL" className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="LinkedIn URL" className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact Info (Email or Phone)" className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition-colors duration-300">
                    Generate Portfolio ✨
                </button>
            </form>
        </div>
    );
};

export default PortfolioForm;