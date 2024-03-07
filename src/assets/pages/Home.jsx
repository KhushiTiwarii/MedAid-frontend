import React from 'react'
import heroImg01 from '../../assets/images/hero-img01.jpg'
import heroImg02 from '../../assets/images/hero-img02.jpg'
import heroImg03 from '../../assets/images/hero-img03.jpg'
import icon01 from '../../assets/images/icon01.png'
import icon02 from '../../assets/images/icon02.png'
import icon03 from '../../assets/images/icon03.png'
import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import About from '../../components/About/About'
import ServiceList from '../../components/Services/ServiceList'
import CountUp from 'react-countup'
import {motion} from 'framer-motion';
import featureImg from '../images/feature-img.png'
import videoIcon from '../../assets/images/video-icon.png'
import DoctorList from '../../components/Doctors/DoctorList'
import faqImg from '../images/faq-img.png'
import FaqList from '../../components/Faq/FaqList'
import Testimonial from '../../components/Testimonial/Testimonial'
// import Testimonial from '../../components/Testimonial/Testimonial'

const Home = () => {
  return (
    <>
    {/* hero section */}
    <section className="hero_section pt-[60px] 2xl:h-[800px]">
      <div className="container">
        <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
          {/* herocontent */}
           <div>
            <div className="lg:w-[570px]">
              <motion.h1 initial={{y:'2rem',opacity:0}} animate={{y:0,opacity:1}} transition={{duration:2,type:'spring'}} className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>We help patients live a healthy, longer life</motion.h1>
              <p className='text_para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, eius, molestias dolorum modi iure nihil vitae facere voluptas sit nemo mollitia vero et ut corrupti inventore tenetur veniam laudantium suscipit!</p>
              <button className="btn">Request an Appointment</button>
            </div>
            {/* herocounter */}
            <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor"><CountUp  end={30} duration={4}/>+</h2>
                <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[14px]"></span>
                <p className="text_para">Years of Experience</p>
              </div>
              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor"><CountUp  end={15} duration={4}/>+</h2>
                <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[14px]"></span>
                <p className="text_para">Clinic Location</p>
              </div>
              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor"><CountUp start={80} end={100} duration={4}/>%</h2>
                <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[14px]"></span>
                <p className="text_para">Patient Satisfaction</p>
              </div>
            </div>
           </div>
          {/* herocontent end */}

          <motion.div initial={{x:'7rem',opacity:0}} animate={{x:0,opacity:1}} transition={{duration:2,type:'sprong'}} className="flex gap-[30px] justify-end">
            <div>
              <img src={heroImg01} alt="" className='w-full' />
            </div>
            <div className='mt-[30px]'>
              <img src={heroImg02} alt="" className='w-full mb-[30px]' />
              <img src={heroImg03} alt="" className='w-full ' />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
    {/* hero section end*/}

    <section>
      <div className="container">
        <div className="lg:w-[470px] mx-auto">
          <h2 className="heading text-center">Providing the best mest medical services</h2>
          <p className='text_para text-center'>
            World-class care for everyone. Our health System offers unmatched,
            expert health care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] my-[30px] lg:mt-[55px]">

          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center "><img src={icon01} alt="" /></div>

            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a Doctor</h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>World class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.</p>
              <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5'/>
              </Link>
            </div>
          </div>

          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center "><img src={icon02} alt="" /></div>

            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a Location</h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>World class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.</p>
              <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5'/>
              </Link>
            </div>
          </div>

          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center "><img src={icon03} alt="" /></div>

            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Book Appointment</h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>World class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.</p>
              <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5'/>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* about section */}
    <About/>
    {/* about section end */}
    {/* services section */}
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Our medical services</h2>
          <p className="text_para text-center">
            World-class care for everyone. Our health Syatem offers unmatched, expert health care.
          </p>
        </div>
        <ServiceList/>
      </div>
    </section>
    {/* services section end */}

    {/* features section */}
    <section>
      <div className="container">
        <div className="flex items-center justify-between flex-col lg:flex-row">
          {/* features content */}
          <div className="xl:w-[670px]">
            <h2 className="heading">
              Get virtual treatment <br/>anytime.
            </h2>
            <ul className="pl-4">
              <li className="text_para">1. Schedule the appointment directly.</li>
              <li className="text_para">2. Search for your physician here, and contact their office.</li>
              <li className="text_para">3. View our physicians who are accepting new patients, use the online scheduling tool to select an appointment time.</li>
            </ul>
            <Link to='/'><button className="btn">Learn More</button></Link>
          </div>

          {/* features img */}
          <div className="relative z-10 xl:w-[350px] flex justify-end mt-[50px] lg:mt-0 sm:w-[300px]">
            <img src={featureImg} className='w-full' alt="" />
            <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:pb-[26px]  lg:px-4 rounded-[10px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px] lg:gap-3">
                 <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">Tue, 24</p>
                 <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">10:00AM</p>
                </div>
                <span className='w-5 h-5 lg:w-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                  <img src={videoIcon} alt="" />
                </span>
              </div>

              <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">Consultation</div>

              {/* <div className="flex items-center gap-[6px] lg:gap-[10px]"></div> */}

            </div>
          </div>

        </div>
      </div>
    </section>
    {/* features section end */}

    {/* Our great doctors */}
    <section>
      <div className="container">
      <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Our great doctors</h2>
          <p className="text_para text-center">
            World-class care for everyone. Our health Syatem offers unmatched, expert health care.
          </p>
        </div>
        <DoctorList/>
      </div>
    </section>
    {/* Our great doctors end */}
    
    {/* faqs */}
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-0">
          <div className="w-1/2 hidden md:block ">
            <img src={faqImg} alt="" />
          </div>

          <div className='w-full md:w-1/2'>
            <h2 className="heading">Most questions by our beloved patients</h2>
            <FaqList/>
          </div>
        </div>
      </div>
    </section>
    {/* faqs end */}

    {/* testimonials */}
    <section>
      <div className="container">
      <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">What our patients say</h2>
          <p className="text_para text-center">
            World-class care for everyone. Our health Syatem offers unmatched, expert health care.
          </p>
        </div>
        <Testimonial/>
      </div>
    </section>
    {/* testimonials end*/}
    </>
  )
}

export default Home
