import React from 'react'
import myImage from "../image/image1.jpg"; // Import your image
 function Aboutme() {
  return (
    <div className='ping-text bg-lightGray w-full md:flex md:justify-between md:space-x-4 p-4'>
      <p className='c absolute md:text-[250px] text-[150px] text-white ml-1 mt-0 z-[-2]'>ABOUTME</p>
      <div className='md:w-[70%]'>
      
      <p className='p1 text-4xl mt-16 md:ml-20 font-bold ml-8'>About me</p>
      
      <p className=' md:ml-20 ml-8 pt-4'>Hello! I'm a fourth-year Software Engineering student with a passion </p>
      <p className='md:ml-20 ml-8'>for web development and a strong foundation in programming My journey</p>
      <p className=' md:ml-20 ml-8'>began with a C++ course, where I developed my analytical skills and</p>
      <p className=' md:ml-20 ml-8'>logical thinking. I then progressed to Java, completing both</p>
      <p className='md:ml-20 ml-8'>basic and advanced courses, which culminated in several projects that </p>
      <p className=' md:ml-20 ml-8'>solidified my understanding of object-oriented programming.</p>
      <p className=' md:ml-20 ml-8 pt-6'>My interest in web development sparked when I took courses in HTML, CSS, </p>
      <p className=' md:ml-20 ml-8'>JavaScript, and PHP. These technologies opened up a world of possibilities</p>
      <p className=' md:ml-20 ml-8'> for me, allowing me to create dynamic and interactive websites.Following </p>
      <p className=' md:ml-20 ml-8'> this, I delved into artificial intelligence with Python, enhancing my</p>
      <p className=' md:ml-20 ml-8'> programming skills and broadening my perspective on technology's</p>
      <p className=' md:ml-20 ml-8'> potential.</p>
      <p className=' md:ml-20 ml-8 pt-6'>I found my true passion in web development, particularly with modern </p>
      <p className=' md:ml-20 ml-8'>frameworks. I specialize in using <strong className='text-teal-600'>React</strong> and<strong className='text-teal-600'> TailwindCSS</strong> for the frontend, </p>
      <p className=' md:ml-20 ml-8'>paired with <strong className='text-teal-600'>Django</strong> for the backend.  I am proficient in HTML, CSS, </p>
      <p className=' md:ml-20 ml-8'>JavaScript, and Python, with a strong command of the frameworks React, </p>
      <p className=' md:ml-20 ml-8'>Tailwind CSS, and Django. I thrive on creating user-friendly and </p>
      <p className='md:ml-20 ml-8'>efficient web applications that make a difference.</p>
      <p className='md:ml-20 ml-8'></p>
      
      </div>
      <div className='md:w-[30%] mt-5 md:mt-52'>
        <div className='flex justify-center items-center bg-white shadow-lg border-4'>
      <img
          src={myImage}
          alt="Description"
          className="w-[380px] h-[400px] object-cover rounded-full shadow-lg"
        />
        </div>
      </div>
    </div>
  )
}
export default Aboutme;
