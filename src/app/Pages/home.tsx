'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "../Components/Narbar";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import footerimage from '../../../public/assets/images/Footerimg.png'
import Yelpceo from '../../../public/assets/images/yelpceo.png'
import { IoIosSend } from "react-icons/io"
import { CiLocationOn } from "react-icons/ci";
import Banner from "../../../public/assets/images/homepagewall.png";
import instructor from "../../../public/assets/images/instructor.png";
import { TbAddressBook } from "react-icons/tb";
import { Card, CardBody, CardTitle } from "reactstrap";
import { ImBook } from "react-icons/im";
import coma from "../../../public/assets/images/Coma.png";
import image from '../../../public/assets/images/Cardmen.png';
import yelp from '../../../public/assets/images/Yelp.png';
import cardmen from '../../../public/assets/images/Cardmen.png';
import facebook from '../../../public/assets/images/Facebook.png';
import Bcapital from '../../../public/assets/images/Bcapital.png';
import AboutLar from '../../../public/assets/images/AboutLar.png';
import Fleximg from '../../../public/assets/images/Fleximg.png';
import Exportimg from '../../../public/assets/images/Expertimg.png'
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";

export default function Home() {
  const stats = [
    { number: "500+", label: "Learners & counting", bgColor: "bg-rose-50" },
    { number: "800+", label: "Courses & Video", bgColor: "bg-sky-100" },
    { number: "100+", label: "Registered Enrolls", bgColor: "bg-sky-100" },
    { number: "1000+", label: "Certified Students", bgColor: "bg-rose-50" },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="flex justify-center items-center">
        <div className="h-[50px] w-full bg-[#1176C1] flex justify-center items-center text-center px-4">
          <span className="text-white text-sm sm:text-base">
            Courses from $149.00 Gain the skills to climb that career ladder.{" "}
            <span className="text-[#F6AA3D] ml-1">3 days left!</span>
          </span>
        </div>
      </div>
      
      <div>
        <NavBar />
      </div>

      {/* Hero Banner Section */}
      <section>
        <div className="relative">
          <div className="w-full ">
            <Image 
              src={Banner} 
              alt="banner" 
              layout="responsive"
              width={1920}
              height={1080}
              priority
              className="w-full h-[300px] lg:h-[500px] object-cover  object-right-top"
            />
          </div>

          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white from-10% via-white via-30% to-transparent to-70%">
            <div className="h-full w-full max-w-[1000px] mx-auto flex flex-col justify-center px-4 sm:px-6 lg:px-8">
              <div className="flex justify-start items-start max-w-[460px]">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                  IT Support Specialist Professional Certificate
                </h1>
              </div>

              <div className="pt-3 flex gap-2 items-center">
                <Image
                  src={instructor}
                  alt="Instructor"
                  width={38}
                  height={38}
                  className="rounded-full"
                />
                <div className="pt-1 sm:pt-2">
                  <span className="text-sm sm:text-base">Instructor:</span>
                  <Link
                    href="/about"
                    className="text-blue-600 hover:underline ml-1 sm:ml-2 text-sm sm:text-base"
                  >
                    Claudia Pruitt
                  </Link>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-3 items-start sm:items-center">
                <div className="flex gap-2">
                  <div className="w-fit h-[33px] bg-[#FFCA7E] flex gap-2 justify-center items-center rounded-xl px-2">
                    <FaMedal className="text-sm" />
                    <span className="text-xs sm:text-sm">Best Seller</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 pt-1 sm:pt-0 sm:pl-3">
                  <span className="text-sm sm:text-base">4.8</span> 
                  <div className="flex mx-1 sm:mx-2 text-yellow-500 text-sm">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaRegStarHalfStroke />
                  </div>
                  <Link href="#" className="text-black hover:underline text-sm sm:text-base">
                    10+ rating
                  </Link>
                  <div className="flex ml-2 sm:ml-3 items-center">
                    <TbAddressBook className="text-[#2490E0] w-4 h-4 sm:w-6 sm:h-6" />
                    <span className="pl-1 text-sm sm:text-base">10 lessons</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <button className="h-[42px] sm:h-[52px] w-full sm:w-[155px] bg-[#F86537] rounded-full hover:bg-opacity-90 transition text-white">
                  Enroll Now
                </button>
                <div className="pt-0 sm:pt-2">
                  <span className="text-sm sm:text-base">
                    Start <strong>April 14</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="bg-gray-100 py-10 sm:py-16">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Your Complete Skill Set Starts Here
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
            {[
              {
                title: "Administrative Office Procedures",
                lessons: 12,
                rating: 4.5,
                price: 149.00
              },
              {
                title: "Business Communication",
                lessons: 10,
                rating: 4.2,
                price: 129.00
              },
              {
                title: "Project Management",
                lessons: 15,
                rating: 4.7,
                price: 179.00
              },
              {
                title: "Customer Service",
                lessons: 8,
                rating: 4.3,
                price: 119.00
              },
              {
                title: "Time Management",
                lessons: 6,
                rating: 4.1,
                price: 99.00
              }
            ].map((course, index) => (
              <Card key={index} className="border border-gray-400 h-full rounded-xl hover:shadow-lg transition-shadow">
                <CardBody className="p-4 flex flex-col h-full">
                  <CardTitle className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 line-clamp-2">
                    {course.title}
                  </CardTitle>
                  <div className="flex gap-2 text-gray-400 mt-auto text-sm">
                    <ImBook className="mt-0.5" />
                    <span>{course.lessons} lessons</span>
                  </div>
                  <div className="border-b-2 border-gray-300 w-full my-2 sm:my-3"></div>
                  <div className="mb-2 flex items-center text-sm sm:text-base">
                    <span>{course.rating}</span>
                    <div className="flex pt-0.5 mx-1 sm:mx-2 text-yellow-500">
                      <FaStar size={14}/>
                      <FaStar size={14}/>
                      <FaStar size={14}/>
                      <FaStar size={14}/>
                      <FaRegStarHalfStroke size={14}/>
                    </div>
                  </div>
                  <div className="mt-auto pt-6 sm:pt-10">
                    <div className="mb-2 font-bold text-base sm:text-lg">
                      <span>${course.price.toFixed(2)}</span>
                    </div>
                    <div>
                      <Link
                        href="/about"
                        className="text-[#F86537] hover:underline font-medium text-sm sm:text-base"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-[#081B25] py-10 sm:py-16">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-white text-center text-xl sm:text-2xl md:text-3xl mb-8 sm:mb-12">
            Flexible Pricing for Individuals and Teams
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            <div className="flex-1 flex flex-col gap-5 sm:gap-6">
              <Card className="h-full">
                <CardBody className="p-4 sm:p-6 bg-white rounded-xl">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4 sm:mb-6 gap-2">
                    <div className="max-w-[270px]">
                      <CardTitle className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                        Individual Course
                      </CardTitle>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Take Any Course for Just $99-One-Time Payment, Lifetime Access
                      </p>
                    </div>
                    <div className="bg-[#2490E0] text-white py-1 px-2 sm:px-4 rounded-lg text-xs sm:text-sm">
                      One-Time-Payment
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-between items-end mt-6 sm:mt-8 gap-3">
                    <button className="bg-[#F86537] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full hover:bg-opacity-90 transition w-full sm:w-auto text-sm sm:text-base">
                      Buy Now
                    </button>
                    <div className="text-right w-full sm:w-auto">
                      <div className="text-xl sm:text-2xl font-bold">$99</div>
                      <div className="text-gray-600 text-sm sm:text-base">All Course</div>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card className="h-full">
                <CardBody className="p-4 sm:p-6 bg-white rounded-xl">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4 sm:mb-6 gap-2">
                    <div className="max-w-[270px]">
                      <CardTitle className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                        All Courses Subscription
                      </CardTitle>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Unlimited Learning - All Courses For $199/year
                      </p>
                    </div>
                    <div className="bg-[#2490E0] text-white py-1 px-2 sm:px-4 rounded-lg text-xs sm:text-sm">
                      Yearly
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-between items-end mt-6 sm:mt-8 gap-3">
                    <button className="bg-[#F86537] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full hover:bg-opacity-90 transition w-full sm:w-auto text-sm sm:text-base">
                      Buy Now
                    </button>
                    <div className="text-right w-full sm:w-auto">
                      <div className="text-xl sm:text-2xl font-bold">$199</div>
                      <div className="text-gray-600 text-sm sm:text-base">All Course</div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

            <div className="flex-1">
              <Card className="h-full">
                <CardBody className="p-4 sm:p-6 bg-white rounded-xl">
                  <div className="mb-6 sm:mb-8">
                    <CardTitle className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                      Corporate Subscriptions
                    </CardTitle>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Choose from 10, 20 or 50-user plans designed for organizations that value continuous development.
                    </p>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                    {[
                      { price: "$1990", users: "10 users" },
                      { price: "$3400", users: "20 users" },
                      { price: "$7500", users: "50 users" }
                    ].map((plan, index) => (
                      <div key={index} className="border-b border-gray-300 pb-3 sm:pb-4">
                        <div className="flex justify-between items-center">
                          <div className="text-lg sm:text-xl font-bold">{plan.price}</div>
                          <div className="flex flex-row gap-2 sm:gap-4 items-center">
                            <div className="font-semibold text-sm sm:text-base">{plan.users}</div>
                            <input type="radio" className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="bg-[#F86537] text-white w-full py-2 sm:py-3 rounded-full hover:bg-opacity-90 transition text-sm sm:text-base">
                    Buy Now
                  </button>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-10 sm:py-16">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="h-full">
              <CardBody className="bg-[#2490E0] p-4 sm:p-6 h-[280px] sm:h-[320px] flex flex-col rounded-xl">
                <h3 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                  What subscribers are achieving through learning
                </h3>
                <p className="text-white mb-6 sm:mb-8 text-sm sm:text-base">
                  <span className="text-[#F86537] font-bold">37,076</span> responses collected
                </p>
                <div className="mt-auto">
                  <Image 
                    src={Bcapital} 
                    alt="B Capital" 
                    width={150}
                    height={50}
                    className="w-[120px] sm:w-[180px]"
                  />
                </div>
              </CardBody>
            </Card>

            <Card className="h-full">
              <CardBody className="p-4 sm:p-6 h-[280px] sm:h-[320px] flex flex-col rounded-xl border-2 border-white bg-white">
                <div className="mb-3 sm:mb-4">
                  <Image src={coma} alt="Quote" width={16} height={10} className="w-4 sm:w-5" />
                </div>
                <p className="text-sm sm:text-lg mb-6 sm:mb-8">
                  The online learning platform is user-friendly, and the courses are top-quality. A great investment!
                </p>
                <div className="mt-auto flex justify-between items-end">
                  <div className="flex items-center">
                    <Image 
                      src={Yelpceo} 
                      alt="Valerie J." 
                      width={40}
                      height={40}
                      className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
                    />
                    <div className="ml-2 sm:ml-3">
                      <div className="font-bold text-sm sm:text-base">Valerie J.</div>
                      <div className="text-gray-400 text-xs sm:text-sm">Creasman CEO</div>
                    </div>
                  </div>
                  <Image 
                    src={yelp} 
                    alt="Yelp" 
                    width={60}
                    height={30}
                    className="w-12 sm:w-16"
                  />
                </div>
              </CardBody>
            </Card>

            <Card className="h-full">
              <CardBody className="p-4 sm:p-6 h-[280px] sm:h-[320px] flex flex-col border-2 border-white bg-white rounded-xl">
                <div className="mb-3 sm:mb-4">
                  <Image src={coma} alt="Quote" width={16} height={10} className="w-4 sm:w-5" />
                </div>
                <p className="text-sm sm:text-lg mb-6 sm:mb-8">
                  B.R. Collins' business management course gave me the confidence to lead my team to success.
                </p>
                <div className="mt-auto flex justify-between items-end">
                  <div className="flex items-center">
                    <Image 
                      src={cardmen} 
                      alt="Valerie J." 
                      width={40}
                      height={40}
                      className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
                    />
                    <div className="ml-2 sm:ml-3">
                      <div className="font-bold text-sm sm:text-base">Hannah R.</div>
                      <div className="text-gray-400 text-xs sm:text-sm">Sutton CEO</div>
                    </div>
                  </div>
                  <Image 
                    src={facebook} 
                    alt="Facebook" 
                    width={60}
                    height={15}
                    className="w-12 sm:w-16"
                  />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gray-100 py-10 sm:py-16">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-10 items-center">
            <div className="lg:w-1/2">
              <div>
                <span className="text-sm sm:text-lg font-bold text-[#F86537] uppercase">
                  about us
                </span>
                <h2 className="mt-3 sm:mt-5 text-2xl sm:text-4xl font-bold text-[#081B25]">
                  On Site Learning
                </h2>
                <p className="mt-3 sm:mt-5 text-base sm:text-xl leading-6 sm:leading-8 text-[#081B25]">
                  At B.R Collins, our on-site training transforms everyday lessons
                  into engaging and interactive experiences. Blending creativity
                  with expertise.
                </p>
              </div>

              <div className="mt-6 sm:mt-10 space-y-4 sm:space-y-5">
                <Card className="border-0 bg-white rounded-xl">
                  <CardBody className="p-4 sm:p-6">
                    <div className="flex gap-3 sm:gap-5 items-center">
                      <Image 
                        src={Fleximg}
                        width={70}
                        height={65}
                        alt="Flexible Classes"
                        className="object-contain w-12 sm:w-16"
                      />
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#081B25]">
                          Flexible Classes
                        </h3>
                        <p className="mt-1 sm:mt-2 text-gray-600 text-sm sm:text-base">
                          It is a long established fact that a reader will be
                          distracted by this on readable content of when looking at
                          its layout.
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <Card className="border-0 bg-white rounded-xl">
                  <CardBody className="p-4 sm:p-6">
                    <div className="flex gap-3 sm:gap-5 items-center">
                      <Image 
                        src={Exportimg}
                        width={70}
                        height={68}
                        alt="Expert-Led Training"
                        className="object-contain w-12 sm:w-16"
                      />
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#081B25]">
                          Expert-Led Training
                        </h3>
                        <p className="mt-1 sm:mt-2 text-gray-600 text-sm sm:text-base">
                          Learn from industry experts in a real-world setting. Gain
                          practical knowledge, hands-on experience.
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>

            <div className="lg:w-1/2 mt-6 lg:mt-0">
              <Image
                src={AboutLar}
                width={500}
                height={550}
                alt="About B.R Collins"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-10 sm:py-16">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-10 items-center">
            <div className="lg:w-1/2">
              <div>
                <span className="text-sm sm:text-lg font-bold text-[#F86537] uppercase">
                  WHY CHOOSE US
                </span>
                <h2 className="mt-3 sm:mt-5 text-2xl sm:text-4xl lg:text-5xl font-bold leading-snug sm:leading-tight text-[#081B25]">
                  Creating A Community Of Life Long Learners
                </h2>
                <p className="mt-3 sm:mt-5 text-base sm:text-xl lg:text-2xl leading-6 sm:leading-8 text-[#081B25]">
                  At B.R Collins, our on-site training transforms everyday lessons
                  into engaging and interactive experiences.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                <button className="px-4 sm:px-8 py-2 sm:py-4 bg-[#F86537] text-white rounded-full hover:bg-opacity-90 transition text-sm sm:text-base">
                  Explore Courses
                </button>
                <button className="px-4 sm:px-8 py-2 sm:py-4 border-2 border-[#081B25] text-[#081B25] rounded-full hover:bg-gray-50 transition text-sm sm:text-base">
                  Learn More
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { number: "50+", label: "Courses", bgColor: "bg-[#FFF0EC]" },
                { number: "5K+", label: "Students", bgColor: "bg-[#E3F4FC]" },
                { number: "20+", label: "Countries", bgColor: "bg-[#E3F4FC]" },
                { number: "10+", label: "Languages", bgColor: "bg-[#FFF0EC]" }
              ].map((stat, index) => (
                <Card key={index} className={`border-0 ${stat.bgColor} rounded-xl`}>
                  <CardBody className="p-4 sm:p-6 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl sm:text-4xl font-bold text-[#081B25]">
                        {stat.number}
                      </span>
                      <p className="text-sm sm:text-lg text-[#081B25] mt-1 sm:mt-2">
                        {stat.label}
                      </p>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#081B25] py-10 sm:py-16 text-white">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between gap-8 sm:gap-10">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 md:gap-16">
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="text-lg sm:text-xl font-semibold">Quick Link</div>
                <div className="text-gray-400 space-y-2 text-sm sm:text-base">
                  <div>Courses</div>
                  <div>Subscription</div>
                  <div>About</div>
                  <div>Contact Us</div>
                  <div>Login & Register</div>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="text-lg sm:text-xl font-semibold">Get Contact</div>
                <div className="text-[#F86537] text-sm sm:text-base">(406) 555-0120</div>
                <div>
                  <Link href="/about" className="text-gray-400 hover:underline text-sm sm:text-base">
                    b.r.collins@example.com
                  </Link>
                </div>
                <div className="flex flex-row gap-2 text-gray-400 text-sm sm:text-base">
                  <CiLocationOn className="text-blue-400 mt-0.5" />
                  <span>North America, USA</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="text-lg sm:text-xl font-semibold">Join the Community</div>
              <div className="text-gray-400 text-sm sm:text-base">
                2,000+ Students Globally- Connect & Say Hello!
              </div>
              <div className="flex flex-row gap-2">
                <input 
                  className="w-full sm:w-[270px] h-[40px] rounded-xl bg-[#16313F] px-3 text-sm sm:text-base" 
                  placeholder="Email Address"
                />
                <button className="w-10 h-[40px] bg-[#F86537] flex justify-center items-center rounded-xl">
                  <IoIosSend className="text-white" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="h-px bg-gray-600 my-6 sm:my-8 w-full" />
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div>
              <Image
                src={footerimage}
                alt="B.R Collins Logo"
                width={200}
                height={50}
                className="w-[180px] sm:w-[241px]"
              />
            </div>
            <div className="flex flex-row gap-3 sm:gap-4">
              <a href="#" className="text-white hover:text-[#F86537] transition">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="text-white hover:text-[#F86537] transition">
                <FaXTwitter size={18} />
              </a>
              <a href="#" className="text-white hover:text-[#F86537] transition">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="text-white hover:text-[#F86537] transition">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
          
          <div className="h-px bg-gray-600 my-6 sm:my-8 w-full" />
        </div>
      </footer>
    </>
  );
}