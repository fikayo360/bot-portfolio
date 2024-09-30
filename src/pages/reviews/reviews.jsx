import './reviews.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from 'react';
import { useInView } from "react-intersection-observer";

export const Reviews = () => {
        
    return (
        <div id='reviews'>
            <div id='rWrap'>
            <h1 id='rHead'>Reviews</h1>
            <div id='allReviews'>
                <div className="review">
                    <p className='rFp'>
                    I've been working with fikayo for a few months now, and I'm incredibly impressed with their web scraping and bot development services.
                     Their team is incredibly knowledgeable and efficient. They were able to extract exactly the data I needed from a complex website
                     in a fraction of the time I thought it would take. I highly recommend them to anyone looking for a reliable and skilled web scraping partner.
                    </p>
                    <div className='rFooter'>
                        <img src='https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944'/>
                        <div className='rFooterR'>
                            <h1 className='rFRu'>sarah lee</h1>
                            <h1 className='rFRd'>marketing manager @ technovate inc</h1>
                        </div>
                    </div>
                </div>
      
                <div className="review">
                    <p className='rFp'>
                    We had a particularly challenging web scraping project that involved a highly dynamic website.they were able to overcome the hurdles and deliver 
                    exceptional results. Their bots are incredibly robust and can handle even the most complex websites. I've already recommended them to several of my colleagues.
                    </p>
                    <div className='rFooter'>
                        <img src='https://sb.kaleidousercontent.com/67418/1920x1281/0e9f02a048/christian-buehner-ditylc26zvi-unsplash.jpg'/>
                        <div className='rFooterR'>
                            <h1 className='rFRu'>emily davis</h1>
                            <h1 className='rFRd'>data analyst</h1>
                        </div>
                    </div>
                </div>
                <div className="review">
                    <p className='rFp'>
                    As a salesperson, I'm always on the lookout for tools that can give me a competitive edge. thier web scraping and bot development services have been a game-changer. I've been able to gather valuable market intelligence, 
                    identify new leads, and track competitor activity with ease. Their bots have significantly increased my efficiency and productivity.
                    </p>
                    <div className='rFooter'>
                        <img src='https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg'/>
                        <div className='rFooterR'>
                            <h1 className='rFRu'>micheal johnson</h1>
                            <h1 className='rFRd'>growth corp</h1>
                        </div>
                    </div>
                </div>
                <div className="review">
                    <p className='rFp'>
                    As our business grows, our data needs have become more complex. they have been able to scale their services to meet our demands. 
                    Their bots are highly scalable and can handle large volumes of data without any issues. I'm confident that they can continue to support our growth in the future
                    </p>
                    <div className='rFooter'>
                        <img src='https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.webp?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc='/>
                        <div className='rFooterR'>
                            <h1 className='rFRu'>alex turner</h1>
                            <h1 className='rFRd'>manager @ dataQuest</h1>
                        </div>
                    </div>
                </div>
              
            </div>
            </div>
        </div>
    )
}