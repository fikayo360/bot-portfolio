 import './about.css'
 import gsap from "gsap";
 import { useGSAP } from "@gsap/react";
 import { useRef } from 'react';

 export const About = () => {
    gsap.registerPlugin(useGSAP);
    const container = useRef();
    
    useGSAP(() => {
        
        gsap.from('#aboutWrap', {
                duration: 1.5,
                y: '-70vh',
                ease: 'power3.inOut',
        })
      }, { scope: container });

    return (
        <section id='about' ref={container}>
            <div id='aboutWrap'>
            <h1 id='aboutH'>about me </h1>
            <p className='aboutp'>
            As a seasoned professional with a passion for technology, I've dedicated my career to crafting innovative solutions that drive efficiency and growth. 
            With a keen eye for detail and a deep understanding of automation, 
            I specialize in delivering tailored web scraping, bot development, and automation services that meet the unique needs of businesses across various industries.
            </p>

            <p className='aboutp'>
            My expertise lies in leveraging cutting-edge technologies to extract valuable data, automate repetitive tasks, and streamline workflows.
             Whether you're looking to optimize your marketing efforts, enhance customer experiences, or gain a competitive edge, my solutions are designed
            to deliver tangible results.
            </p>

            <p className='aboutp'>
            I'm committed to staying at the forefront of technological advancements and continuously expanding my skillset. By partnering with me, you can be confident that 
            your projects will be executed with the highest level of professionalism and efficiency. Let's work together to unlock the full potential of automation for your business.
            </p>
            </div>
        </section>
    )
 }