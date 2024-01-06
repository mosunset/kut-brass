"use client";
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlideshowComponent = () => {
    const settings = {
        autoplay: true,
        pauseOnHover: true,
        infinite: true,
        initialSlide: 0,
        dots: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        arrows: false,
        centerMode: false,
        //adaptiveHeight:true,
    };

    const images = [
        {
            id: 1,
            src: "/homeslide/0.jpg",
            alt: "Image 0"
        },
        {
            id: 2,
            src: "/homeslide/1.jpg",
            alt: "Image 1"
        },
        {
            id: 3,
            src: "/homeslide/2.jpg",
            alt: "Image 2"
        },
        {
            id: 4,
            src: "/homeslide/3.jpg",
            alt: "Image 3"
        },
        {
            id: 5,
            src: "/homeslide/4.jpg",
            alt: "Image 4"
        },
        {
            id: 6,
            src: "/homeslide/5.jpg",
            alt: "Image 5"
        },
        {
            id: 7,
            src: "/homeslide/6.jpg",
            alt: "Image 6"
        }
    ];

    const imageStyle = {
        width: '100%'
    };

    return (
        <Slider {...settings}>
            {images.map((image) => (
                <div key={image.id}>
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={1312}
                        height={752}
                        style={imageStyle}
                    />
                </div>
            ))}
        </Slider>
    );
};

export default SlideshowComponent;
