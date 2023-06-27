import React from 'react'
import Section from './common/Section'
import {FaGithub, FaExternalLinkSquareAlt} from 'react-icons/fa'
import p1 from '../Assets/weather.png';
import p2 from '../Assets/portfolio3.png';
/*import p3 from '../Assets/p3.jpg';
import p4 from '../Assets/p4.jpg';
import p5 from '../Assets/p5.jpg';
import p6 from '../Assets/p6.jpg';*/

const Portfolio = () => {
    const projects= [
        {
            id: 1,
            image: p1,
            title: "Weather Forecast",
            github:"https://github.com/KiranRegalla/weatherforecast",
            demo:"https://kiranregalla.github.io/weatherforecast/",
        },
        {
            id: 2,
            image: p2,
            title: "Port Folio",
            github:"https://github.com/KiranRegalla/portfolio-kiran",
            demo:"https://kiranregalla.github.io/portfolio-kiran/",
        },
        /*{
            id: 3,
            image: p3,
            title: "best App",
            github:"",
            demo:"",
        },
        {
            id: 4,
            image: p4,
            title: "best App",
            github:"",
            demo:"",
        },
        {
            id: 5,
            image: p5,
            title: "best App",
            github:"",
            demo:"",
        },
        {
            id: 6,
            image: p6,
            title: "best App",
            github:"",
            demo:"",
        },*/
    ]
  return <Section title="Portfolio 🗒️" 
  subtitle="These are all the projects that I have worked on. Some of them I have worked before and I gained experience. so go gentle on them😅">

    <div className='grid gap-8 lg:gap-14 lg:grid-cols-2'>
        {projects.map(({id, image, title, github , demo})=>(
            <div key={id} className='max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden'>
                <img src={image} alt={title} className='w-2/3' />
                <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
                    <h2>{title}</h2>
                    <a className='text-lg md:text-xl lg:text-2xl cursor-pointer duration-300 hover:text-yellow-400' href={github} target="_blank" rel='noopener noreferrer'><FaGithub /> </a>
                    <a className='text-lg md:text-xl lg:text-2xl cursor-pointer duration-300 hover:text-yellow-400' href={demo}target="_blank" rel='noopener noreferrer'><FaExternalLinkSquareAlt /></a>
                </div>
            </div>
        ))}

    </div>

  </Section>
}

export default Portfolio
