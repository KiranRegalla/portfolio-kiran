import React from 'react'
import {FaGithub, FaTwitter , FaLinkedin, FaArrowDown} from "react-icons/fa";

import avatar from "../Assets/[removal.ai]_tmp-6497d067491c6.png";


const Hero = () => {
    const SOCIAL =[
    {
        id: 1,
        link: "https://github.com/KiranRegalla",
        icon:<FaGithub />,
    },
    {
        id: 2,
        link: "https://twitter.com",
        icon:<FaTwitter />,
    },
    {
        id:3,
        link: "https://www.linkedin.com/in/kirankumarregalla832",
        icon: <FaLinkedin/>,
    },
    ]

    window.addEventListener("scroll", function(){
        const downArrow=document.querySelector(".down-arrow");
        if (this.scrollY >=90) downArrow.classList.add("hide-down-arrow");
        else downArrow.classList.remove("hide-down-arrow");
    })

  return (
   <section className='min-h-screen flex flex-col justify-start items-center p-5 text-center'>
    <h2 className='text-5xl text-yellow-400 uppercase font-bold'>Kiran Kumar Regalla</h2>
    <h3 className='py-3 text-2xl'>Test Engineer</h3>
    <p className='max-w-xl font-light text-gray-450'>Hello
        <span className='animate-pulse text-4xl'>👋</span>
        Welcome to my portfolio.
        🔧 Experienced automation tester with 1.6 years of expertise in UFT and Selenium.
        💻 Proficient in React JS front-end development ⚛️.
    </p>
    {/* social icons*/}
    <div className='flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3'>
    {SOCIAL.map(({id,link, icon}) => (
        <a href={link} 
           key={id}
           target="_blank"
           rel="noopener noreferrer"
           className='cursor-pointer duration-300 hover:text-yellow-400'>
           {icon}

        </a>
    ))}
    </div>
    {/* avatar and resume*/}
    <div>
        <img src={avatar} alt="avatar"className='w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-yellow-300 rounded-xl'/>
        <a href="public/kiran hp.pdf" download={true} className='flex items-center justify-center mt-10 bg-gradient-to-r from-yellow-300 to-pink-500 text-white py-2 rounded-lg'>
            Resume
        </a>
    </div>
    {/* arrow down animation*/}
    <div className='mt-10 down-arrow'>
        <FaArrowDown className=' text-pink-500 text-2xl animate-bounce'/>
    </div>
   </section>
  )
}

export default Hero
