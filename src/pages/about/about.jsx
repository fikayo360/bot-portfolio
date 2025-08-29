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
                I am a seasoned full-stack developer with a profound passion for technology and a comprehensive skill set
                 that spans the entire software development lifecycle. My career is dedicated to architecting and building innovative,
                  end-to-end solutions that are not only robust and scalable but are also meticulously crafted to meet business objectives. 
                  By seamlessly integrating front-end design with powerful back-end systems, I specialize in transforming complex requirements into polished, 
                  high-performance applications that provide a superior user experience and drive tangible growth. My commitment to technical excellence is 
                  matched by my dedication to understanding the unique needs of each project,
                 ensuring that every line of code contributes to a meaningful and impactful solution.
            </p>

            <p className='aboutp'>
            My technical expertise is both broad and deep, covering the foundational pillars of modern application development. On the front end,
             I am proficient in creating dynamic and intuitive user interfaces using cutting-edge frameworks, focusing on responsive design and performance 
             optimization to ensure a smooth experience across all devices. For the back end, I design and implement robust server-side logic and APIs, prioritizing security, 
             efficiency, and maintainability. I also possess extensive experience in mobile development, enabling me to build seamless cross-platform applications that extend the 
             reach and functionality of a project. Furthermore, my strong command of databases allows me to architect and manage data structures that are both reliable and highly performant,
             while my experience with various hosting environments ensures effective deployment and continuous operation of all my applications.
            </p>

            <p className='aboutp'>
                I am a firm believer in the power of continuous learning and am committed to staying at the forefront of technological advancements.
                 This proactive approach ensures that the solutions I deliver are not only current but are also future-proof. Whether working independently or as part of
                  a collaborative team, I bring a methodical and results-oriented approach to every challenge. I am eager to contribute my full-stack expertise to projects that
                   demand a deep understanding
                 of technology and a dedication to crafting high-quality, impactful products.
            </p>
            </div>
        </section>
    )
 }