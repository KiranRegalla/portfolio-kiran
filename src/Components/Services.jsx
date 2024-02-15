import React from 'react'
import Section from './common/Section'

import uft from "../Assets/UFt.jpg";
import research from "../Assets/research.png";
import web from "../Assets/Framework.jpg";
import Se from "../Assets/selenium.png";

const Services = () => {

  const services =[
    {

    id: 1,
    image: uft,
    title: "Unified Functional Testing",
    },
    {
        id: 2,
        image: web,
        title: "Automation Frame Works",
    },
    {
        id:3,
        image: Se,
        title: "Automation Using Selenium",
    },
    {
        id:4,
        image: research,
        title: "Research and Development",
    },
  ];



  return <Section title="Services ⚒️" 
  subtitle= "I am pleased to offer a wide range of skills and expertise that can contribute to the success of your projects. I possess proficiency in the following areas. If you don't find something that you are looking for then please send me an email"
  >
    <div className='grid gap-10 lg:grid-cols-2' >
        {
            services.map(({id, image, title }) => (
                <div key={id} className='flex flex-col items-center justify-center p-5 shadow-lg dark: shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110'>
                    <img src= {image} alt={title} className='w-36 h-36 md:w-44 md:h-44 object-contain'/>
                    <h3 className='mt-5 text-base'>{title}</h3>
                </div>


            ))
        }
        
    </div> 
  
  
  </Section>
    
  
}

export default Services;
