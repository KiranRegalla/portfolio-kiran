import React from 'react'
import Section from './common/Section'
import { FaTwitter } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import contact from '../Assets/mobile.png';

const Contact = () => {
    const  SOCIAL = [
        {
            id:1,
            link:"https://twitter.com",
            icon:<FaTwitter />
        },
        {
            id:2,
            link:"https://github.com/KiranRegalla",
            icon:<FaGithub />
        },
        {
            id:3,
            link:"https://www.linkedin.com/in/kirankumarregalla832",
            icon:<FaLinkedin />
        },
    ]
  return <Section title='Contact 📲'
  subtitle='These are the ways you can get in touch with me :)'>

    <div className='flex flex-col items-center justify-center gap-8 text-center'>
        <div>
            <img src={contact} alt='Contact' className='w-32 h-32 '/>
        </div>
        <div>
            <p className='max-w-xs md:max-w-lg font-light'>
                If your interested in my profile feel free to reach out to me through prferred medium😊
            </p>
        </div>
        <div className='flex w-full items-center justify-evenly text-3xl'>
            {SOCIAL.map(({id, link, icon,})=>(
                <a href={link} target='_blank' rel='noopener noreferrer' className='duration-200 ease-in-out hover:text-yellow-500'>{icon}</a>
            ))}
        </div>

        {/* bottom form */}
        <div className='p-8 text-left w-full '>
            <form action='https://getform.io/f/192ce603-ccd8-4e68-900b-65ac32cbf206' method="POST">
            <div className='w-full'>
                <div className='flex flex-col my-2'>
                    <label className='capitalize text-sm py-2 font-extralight'>
                        name
                    </label>
                    <input type="text" name="name" className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'></input>
                    <div className='flex flex-col'>
                    <label className='capitalize text-sm py-2 font-extralight'>
                        phone
                    </label>
                    <input type="text" name="phone" className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'></input>
                </div>
                <div className='flex flex-col my-2'>
                    <label className='capitalize text-sm py-2 font-extralight'>
                        email
                    </label>
                    <input type="text" name="email" className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'></input>
                </div>
                <div className='flex flex-col my-2'>
                    <label className='capitalize text-sm py-2 font-extralight'>
                        Message
                    </label>
                    <textarea name="Message"  rows="10" className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none'></textarea>
                    
                </div>
                </div>
               <div className='flex items-center justify-center'>
                    <button className='my-8 bg-gradient-to-r from-yellow-400 to-gray-600 text-white px-6 py-3  uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200'>
                        Send Message
                    </button>

               </div>
            </div>
            </form>
        </div>
    </div>


  </Section>
}

export default Contact
