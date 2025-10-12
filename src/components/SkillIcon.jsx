import React, { useState } from 'react';

const SkillIcon = ({ skill }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    
    // Format skill name for Devicon URL (e.g., "Node.js" -> "nodejs", "C#" -> "csharp")
    const formattedSkill = skill.toLowerCase()
        .replace(/\s+/g, '')
        .replace(/\./g, 'dot')
        .replace(/#/g, 'sharp');

    const iconUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${formattedSkill}/${formattedSkill}-original.svg`;

    const handleError = () => {
        setIsLoading(false);
        setHasError(true);
    };

    return (
        <div className="relative group flex flex-col items-center w-24 text-center">
            <div className="w-16 h-16 flex items-center justify-center">
                {isLoading && <div className="w-12 h-12 bg-gray-700 rounded-full animate-pulse"></div>}
                {!hasError ? (
                    <img
                        src={iconUrl}
                        alt={`${skill} logo`}
                        className={`w-12 h-12 transition-transform duration-300 group-hover:scale-110 ${isLoading ? 'hidden' : 'block'}`}
                        onLoad={() => setIsLoading(false)}
                        onError={handleError}
                    />
                ) : (
                    // Fallback placeholder for icons not found
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-xs font-mono text-gray-400">
                        N/A
                    </div>
                )}
            </div>
            <span className={`mt-2 text-sm text-gray-300 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>{skill}</span>
        </div>
    );
};

export default SkillIcon;