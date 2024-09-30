import './works.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from 'react';
import { useInView } from "react-intersection-observer";
import Slider from '../imgSlider/slider';

export const Works = () => {

    return (
        <div id='works'>
            <div id='wkWrap'>
            <h1 id='wHead'>works</h1>

                <div className='ww'>
                   
                    <div className="wWrap">

                    <div className='designItem'>
                    <div className='dirU'><img src='https://outscraper.com/wp-content/uploads/2021/03/google-maps-scraper-results-demo.webp'/></div>
                     <div className='dirD'>
                        <h2>scrapping business leads on instagram </h2>
                     </div>
                    </div>

                    <div className='designItem'>
                    <div className='dirU'><img src='https://media.licdn.com/dms/image/C5612AQHoZitHy1sFgA/article-cover_image-shrink_720_1280/0/1611846088031?e=2147483647&v=beta&t=DbiFgGOB9moKO6iizByJFRkQiLvrj1EmoAR_JWbqN8g'/></div>
                     <div className='dirD'>
                        <h2>harvesting email business leads on linkedIn</h2>
                     </div>
                    </div> 

                    <div className='designItem'>
                    <div className='dirU'><img src='https://newsfeed.org/wp-content/uploads/how-to-search-for-facebook-groups.png'/></div>
                     <div className='dirD'>
                        <h2>scrapping info from facebook groups</h2>
                     </div>
                    </div>

                    <div className='designItem'>
                    <div className='dirU'><img src='https://www.aimtechnologies.co/wp-content/uploads/2023/10/Social-Media-Listening-and-Engagement.jpg'/></div>
                     <div className='dirD'>
                        <h2>social media engagement bot</h2>
                     </div>
                    </div>

                    <div className='designItem'>
                    <div className='dirU'><img src='https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_4/v1567772121/finalsite/nhrpfaivkfgacytc63qw/ScreenShot2019-09-04at103657AM.png'/></div>
                     <div className='dirD'>
                        <h2>scrape news articles</h2>
                     </div>
                    </div>

                    <div className='designItem'>
                    <div className='dirU'><img src='https://eodhd.com/financial-apis/wp-content/uploads/2017/05/MCD.US_.csv-Excel-2020-12-18-18.05.27.png'/></div>
                     <div className='dirD'>
                        <h2>scrapping stock market data</h2>
                     </div>
                    </div>

                    <div className='designItem'>
                    <div className='dirU'><img src='https://lh5.googleusercontent.com/VfN2oERqqduI7GuAGPbo7K6yfhe_GAZ0ut_6AV4TD3hm8DtmRY4-rN4CZgppKoeAstbTJte-YPh1fw8N-0jdOa8j2cTf8RPKewj_1rXrEFOlvBR50vYCk5NGf5SZEdfJ1giEScTZZnCI3EBnnA'/></div>
                     <div className='dirD'>
                        <h2>scrapping real estate info on airbnb</h2>
                     </div>
                    </div>

                    <div className='designItem'>
                    <div className='dirU'><img src='https://image.ibb.co/jifRdL/supervised-ds-illustrated-5.png'/></div>
                     <div className='dirD'>
                        <h2>scrapping machine learning research data</h2>
                     </div>
                    </div>

                </div>
                </div>
        </div>
        </div>
    )
}