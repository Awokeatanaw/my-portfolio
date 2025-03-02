import React from 'react'
import { Link } from 'react-router-dom';
 function Home() {
  return (
    <div className='ping-text bg-lightGray w-full'>
        <p className='c absolute text-[150px] md:text-[250px] text-white md:ml-96 ml-1 mt-28 md:mt-20 z-[-2]'>HOME</p>
      <p className='text-5xl pt-28 ml-8 md:ml-20 font-bold'>Hello</p>
      <p className='text-5xl mt-5 ml-8 md:ml-20 font-bold'>I'm <strong className='text-teal-600'>Awoke</strong></p>
      <p className='text-2xl mt-4 ml-8 md:ml-20'>Web Developer</p>
      <p className='md:ml-20 ml-8'> I'm Awoke, a passionate web developer and a 4th-year Software Engineering student. I specialize </p>
      <p className='md:ml-20 ml-8'>in building dynamic and responsive user interfaces using React and Tailwind CSS for the frontend, while </p>
      <p className='md:ml-20 ml-8'>leveraging Django for robust backend development. With a keen interest in creating seamless user </p>
      <p className='md:ml-20 ml-8'>experiences, I enjoy tackling challenging projects that push my skills and creativity. I'm excited to</p>
      <p className='md:ml-20 ml-8'>continue learning and growing in the ever-evolving tech landscape.</p>
      <div className='mt-10 mb-4'>
      <Link to="/contact">
      <button className="ml-8 md:ml-20 bg-coral rounded-full text-white py-2 px-6 transition-transform transform hover:scale-105 mb-10 lg:mb-20 xl:mb-52">
                Contact Me
            </button>
        </Link>
       {/* <button className="ml-10 md:ml-20 bg-coral rounded-full text-white py-2 px-6 transition-transform transform hover:scale-105">
                know me
            </button>*/}
      </div>
    </div>
  )
}
export default Home;
