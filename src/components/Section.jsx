import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const Section = ({ id, children }) => {
    const ref = useRef();
    const isVisible = useOnScreen(ref);

    return (
        <section
            ref={ref}
            id={id}
            className={`py-20 px-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
            {children}
        </section>
    );
};

export default Section;