'use client';
import React from 'react';
import {useState} from 'react';
import Link from "next/link";
import Image from "next/image";

const Carousel = () => {
    const slides = [
        {
            id: 1,
            image: '/slides/1.png',
            title: (
                <div className="flex items-center">
                    <Image
                        src="/icons/apple-black.svg"
                        alt="arrow right" className="-ml-3 -mt-2"
                        width={60}
                        height={60}
                    />{' '}
                    <span className="text-black"><strong>iPhone X</strong> Repairs</span>
                </div>
            ),
            description: (
                <p className="mt-3 text-black text-xl">We are now repairing the iPhone X while-you-wait</p>
            ),
            btn: {
                'text': 'Learn More',
                'link': '/repairs',
                'classes': 'border border-black hover:border-white hover:bg-white px-5 py-3 text-black rounded',
            },
            bgColor: 'bg-custom',
        },
        {
            id: 2,
            image: '/slides/2.png',
            title: (
                <div className="flex items-center text-white">
                    <Image
                        src="/icons/apple.svg"
                        alt="arrow right" className="-ml-3 -mt-2"
                        width={60}
                        height={60}
                    />{' '}
                    <span className="">While-You-Wait <br/><strong>iPad Repairs</strong></span>
                </div>
            ),
            description: (
                <p className="mt-3 text-xl">We offer our customers genuine parts fitted to the highest of standards in the repair industry.</p>
            ),
            btn: {
                'text': 'Learn More',
                'link': '/repairs',
                'classes': 'border border-white hover:border-black hover:bg-black px-5 py-3 rounded',
            },
            bgColor: 'bg-gray-500',
        },
        {
            id: 3,
            image: '/slides/3.jpg',
            title: (<div><strong>Also Repairing</strong> Samsung, Sony, Huawei, and many more handsets.</div>),
            description: '',
            btn: {
                'text': 'Learn More',
                'link': '/repairs',
                'classes': 'border border-white hover:border-white hover:bg-white hover:text-black px-5 py-3 rounded',
            },
            bgColor: 'bg-black',
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full h-[400px] overflow-hidden">
            {slides.map((slide, index) => (
                <div key={slide.id}
                    className={`absolute inset-0 flex items-center justify-between px-10 lg:px-32 transition-transform duration-500 ease-in-out ${
                        index === currentSlide ? 'translate-x-0' : 'translate-x-full'
                    } ${slide.bgColor}`}
                >
                    <div className="text-white max-w-lg">
                        <h2 className="text-5xl">{slide.title}</h2>
                        <div>{slide.description}</div>
                        <div className="mt-10">
                            <Link href={slide.btn.link} passHref className={slide.btn.classes}>{slide.btn.text}</Link>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <Image className="float-none lg:float-end max-w-fit" alt="image" src={slide.image}  width={400} height={400} />
                    </div>
                </div>
            ))}

            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg"
            >
                <Image src="/icons/arrow-left.svg" alt="arrow left" width={20} height={20} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg"
            >
                <Image src="/icons/arrow-right.svg" alt="arrow right" width={20} height={20} />
            </button>
        </div>
    );
};

export default Carousel;
