import React, { useState } from 'react';
import PortfolioForm from './components/PortfolioForm';
import PortfolioPage from './components/PortfolioPage';

// Parse the hash immediately to handle shared links
const hash = window.location.hash.substring(1);
let initialData = null;
let initialViewOnly = false;

if (hash) {
    try {
        initialData = JSON.parse(atob(hash));
        initialViewOnly = true;
    } catch (error) {
        console.error("Could not parse portfolio data from URL", error);
    }
}

function App() {
    const [portfolioData, setPortfolioData] = useState(initialData);
    const [isSubmitted, setIsSubmitted] = useState(!!initialData);
    const [viewOnly, setViewOnly] = useState(initialViewOnly);

    const handleFormSubmit = (data) => {
        setPortfolioData(data);
        setIsSubmitted(true);
        setViewOnly(false); // Editing mode
    };

    const handleBackToForm = () => {
        setIsSubmitted(false);
        setViewOnly(false); // Reset when editing
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen font-sans">
            {isSubmitted && portfolioData ? (
                <PortfolioPage
                    data={portfolioData}
                    onBack={viewOnly ? null : handleBackToForm} // Hide Edit if viewOnly
                    viewOnly={viewOnly} // Explicitly pass viewOnly
                />
            ) : (
                <PortfolioForm onSubmit={handleFormSubmit} />
            )}
        </div>
    );
}

export default App;
