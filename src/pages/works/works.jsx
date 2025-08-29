import './works.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from 'react';
import { useInView } from "react-intersection-observer";
import Slider from '../imgSlider/slider';

export const Works = () => {
    const images = [
    { id: 1, src: 'https://i.pinimg.com/736x/26/b9/50/26b9505f87f477fb12feb65eeb308707.jpg', alt: 'BMW Logo', projectName:"project1" },
    { id: 2, src: 'https://i.pinimg.com/736x/51/0f/ad/510fad7ac4829296ea029b69deea4319.jpg', alt: 'Coca Cola Can',  projectName:"project2" },
    { id: 3, src: 'https://i.pinimg.com/736x/eb/e8/45/ebe845b662d6378fd81de2866e3831e9.jpg', alt: 'Nike AIR T-shirt',  projectName:"project3" },
    { id: 4, src: 'https://i.pinimg.com/736x/e8/5e/4d/e85e4d1b96c68e3f38f1e59b77a2f104.jpg', alt: 'Abstract Image 1',  projectName:"project4" },
    { id: 5, src: 'https://i.pinimg.com/736x/83/c7/76/83c77689d5b208f6b90229125f36ede4.jpg', alt: 'Nature Shot',  projectName:"project5" },
    { id: 6, src: 'https://i.pinimg.com/736x/32/24/a8/3224a832a6ad8adce5efeff1996ced4a.jpg', alt: 'Cityscape',  projectName:"project6" },
    { id: 7, src: 'https://i.pinimg.com/736x/70/28/bb/7028bb943ae502155db220a70e99e7be.jpg', alt: 'Art Piece',  projectName:"project7" },
    { id: 8, src: 'https://i.pinimg.com/736x/67/b8/68/67b868016bd1b25c9e1183fa30c72fa6.jpg', alt: 'Product Photo',  projectName:"project8" },
  ];
    return (
        <div id='works'>
            <div className="portfolio-container">
            {/* Header Section */}
            <header className="header-section">
            <h3 className="recent-projects-title">RECENT PROJECTS</h3>
            <h1 className="selected-portfolio-title">Selected portfolio</h1>
            </header>

            {/* Masonry Image Grid */}
            <section className="masonry-grid-container">
            <div className="masonry-grid">
                {images.map(image => (
                <div key={image.id} className="masonry-item">
                    <img src={image.src} alt={image.alt} className="masonry-image" />
                    <h1 className='pname'>{image.projectName}</h1>
                </div>
                ))}
            </div>
            </section>
         </div>
      </div>
    )
}