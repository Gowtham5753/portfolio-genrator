import React, { useState } from 'react';
import Navbar from './Navbar';
import Section from './Section';
import SkillIcon from './SkillIcon';

const PortfolioPage = ({ data, onBack, viewOnly }) => {
    const [notification, setNotification] = useState('');

    const handleShare = () => {
        const encodedData = btoa(JSON.stringify(data));
        const url = `${window.location.origin}${window.location.pathname}#${encodedData}`;
        navigator.clipboard.writeText(url).then(() => {
            setNotification('Sharable link copied to clipboard!');
            setTimeout(() => setNotification(''), 3000);
        });
    };

    return (
        <div>
            <Navbar onBack={onBack} onShare={viewOnly ? null : handleShare} viewOnly={viewOnly} />

            {notification && !viewOnly && (
                <div className="fixed top-20 right-5 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg z-50">
                    {notification}
                </div>
            )}

            <main className="max-w-4xl mx-auto">
                <Section id="about">
                    <h1 className="text-5xl font-bold mb-2 text-center">{data.name}</h1>
                    <p className="text-lg text-gray-300 text-center">{data.about}</p>
                </Section>

                <Section id="skills">
                    <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
                    <div className="flex flex-wrap gap-6 justify-center">
                        {data.skills.split(',').map(skill => (
                            <SkillIcon key={skill.trim()} skill={skill.trim()} />
                        ))}
                    </div>
                </Section>

                <Section id="projects">
                    <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
                    <div className="space-y-6">
                        {data.projects.split(';').map(proj => {
                            const [title, desc] = proj.split(':');
                            return (
                                <div key={title} className="bg-gray-800 p-4 rounded-lg">
                                    <h3 className="font-bold text-xl text-blue-400">{title.trim()}</h3>
                                    <p className="text-gray-300">{desc.trim()}</p>
                                </div>
                            );
                        })}
                    </div>
                </Section>

                <Section id="contact">
                    <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
                    <div className="text-center">
                        <p className="mb-4">{data.contact}</p>
                        <div className="flex justify-center space-x-4">
                            <a href={data.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a>
                            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">LinkedIn</a>
                        </div>
                    </div>
                </Section>
            </main>
        </div>
    );
};

export default PortfolioPage;
