import React from 'react'
import myImage from "../image/image1.jpg"; // Import your image
 function Aboutme() {
  return (
    <div className='ping-text bg-lightGray w-full md:flex md:justify-between md:space-x-4 p-4'>
      <p className='c absolute md:text-[250px] text-[83px] text-white ml-1 mt-0 z-[-2]'>ABOUTME</p>
      <div className='md:w-[64%]'>
      
      <p className='p1 text-4xl mt-16 md:ml-20 font-bold ml-8'>About me</p>
      
      <p className=' md:ml-20 ml-8 pt-4'> Hello! I am a passionate web developer with a strong programming background. My journey</p>
      <p className='md:ml-20 ml-8'>started with a C++ course, where I developed analytical and logical skills. I then advanced to</p>
      <p className=' md:ml-20 ml-8'>Java, completing both basic and advanced courses that reinforced my grasp of object-</p>
      <p className=' md:ml-20 ml-8'>oriented programming through hands-on projects. My true passion lies in web</p>
      <p className='md:ml-20 ml-8'>development, especially with modern frameworks. I specialize in using React and </p>
      <p className=' md:ml-20 ml-8'>TailwindCSS for the frontend, along with Django for the backend. Proficient in HTML, CSS,</p>
      <p className=' md:ml-20 ml-8'>JavaScript, and Python, I enjoy crafting user-friendly and efficient web applications. I thrive </p>
      <p className=' md:ml-20 ml-8'>on creating impactful solutions that enhance user experiences.</p>
      <p className='md:ml-20 ml-8'></p>
      
      </div>
      <div className='md:w-[36%] mt-5 md:mt-10'>
        <div className='flex justify-center items-center bg-white shadow-lg border-4'>
      <img
          src={myImage}
          alt="Description"
          className="w-[350px] h-[400px] object-cover rounded-full shadow-lg"
        />
        </div>
      </div>
    </div>
  )
}
export default Aboutme;
