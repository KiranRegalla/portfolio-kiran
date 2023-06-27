import React from 'react'
import Section from './common/Section'
import avatar from '../Assets/Infosyslogo.jpg'
function Testimonials() {
  const TESTIMONIALS =[
    {
        id:1,
        image: avatar,
        name: "Infosys",
        comment: "Good work on Excel Report Automation",
    },
    /*{
        id:2,
        image: avatar,
        name: "sethayya",
        comment: "Great to have you",
    },
    {
        id:3,
        image: avatar,
        name: "philips",
        comment: "Great to have you",
    },*/
  ]
  return <Section title="Testimonials 💬" subtitle="This is waht my other clients have to say about me. I accept clients from all around the world">
    <div className='max-w-xl flex flex-col gap-2'>
        {TESTIMONIALS.map(({id, image, name, comment})=>(
            <div className='flex p-4 justify-center items-center rounded-xl shadow-md dark:shadow-gray-400'>
                <div className='w-1/3'>
                    <img src={image} alt={name} className='w-20 h-20 object-cover object-top pt-2' />
                </div>
                <div className='w-2/3 flex flex-col justify-center items-center gap-3 p-2'>
                    <h3 className='text-xl font-semibold'>{name}</h3>
                    <p className='text-sm font-light'>{comment}</p>
                </div>
            </div>
        ))}
    </div>
  </Section>
}

export default Testimonials
