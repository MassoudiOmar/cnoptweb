import React, { useState } from 'react';

const slides = [
    {
        id: 1,
        content: (
            <>
                <input className='inscription-inputs' placeholder="Numéro d'inscription" />
                <input className='inscription-inputs' placeholder='Mot de passe' />
                <input className='inscription-btn-Inscription' type='submit' value='NEXT' />
            </>
        ),
    },
    {
        id: 2,
        content: (
            <>
                <input className='inscription-inputs' placeholder="Numéro d'inscription" />
                <input className='inscription-inputs' placeholder='Mot de passe' />
                <input className='inscription-btn-Inscription' type='submit' value='SE CONNECTER' />
            </>
        ),
    },
];

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className='carousel-container'>
            {slides.map((slide, index) => (
                <>
                    {slide.content}
                </>
            ))}
            <button onClick={prevSlide}>Previous</button>
            <button onClick={nextSlide}>Next</button>
        </div>
    );
}
