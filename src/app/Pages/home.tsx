"use client";
import React from "react";
// import Slider from 'react-slick';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from "next/link";
import Image from "next/image";
import NavBar from "../Components/Narbar";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { TbAddressBook } from "react-icons/tb";
import { FaMedal } from "react-icons/fa";
import { Card, CardBody, CardTitle } from "reactstrap";
import { ImBook } from "react-icons/im";
import footerimage from "../../../public/assets/images/Footerimg.png";
import Yelpceo from "../../../public/assets/images/yelpceo.png";
import Banner from "../../../public/assets/images/homepagewall.png";
import instructor from "../../../public/assets/images/instructor.png";
import coma from "../../../public/assets/images/Coma.png";
import yelp from "../../../public/assets/images/Yelp.png";
import cardmen from "../../../public/assets/images/Cardmen.png";
import facebook from "../../../public/assets/images/Facebook.png";
import Bcapital from "../../../public/assets/images/Bcapital.png";
import AboutLar from "../../../public/assets/images/AboutLar.png";
import Fleximg from "../../../public/assets/images/Fleximg.png";
import Exportimg from "../../../public/assets/images/Expertimg.png";


export default function Home() {
  const sliderdata = [
    { coursename: "Business Writing Techniques", numOfCourses: "(20) Courses" },
    { coursename: "Anger Management", numOfCourses: "(10) Courses" },
    { coursename: "Administrative Support", numOfCourses: "(12) Courses" },
    { coursename: "Call Center Training", numOfCourses: "(22) Courses" },
    { coursename: "Business Accounting", numOfCourses: "(10) Courses" },
  ];
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="h-12 w-full bg-[#1176C1] flex justify-center items-center text-center px-4">
          <span className="text-white text-xs sm:text-sm md:text-base">
            Courses from $149.00 Gain the skills to climb that career ladder.{" "}
            <span className="text-[#F6AA3D] ml-1">3 days left!</span>
          </span>
        </div>
      </div>

      <div>
        <NavBar />
      </div>

      <section className="relative w-full">
        <div className="w-full">
          <Image
            src={Banner}
            width={1920}
            height={1080}
            alt="Hero Banner"
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover object-right-top"
            priority
          />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-gradient-to-r from-white to-transparent md:from-white md:to-transparent pointer-events-none flex items-center">
          <div className="w-full p-4 sm:p-6 mx-auto">
            <div className="flex flex-col p-4 sm:p-6 md:p-8 justify-start gap-3 sm:gap-4 w-full max-w-lg sm:max-w-xl md:max-w-2xl pointer-events-auto">
              <h2 className="font-hanken text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-start text-gray-900 leading-tight">
                IT Support Specialist Professional Certificate
              </h2>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <Image
                  src={instructor}
                  width={40}
                  height={40}
                  alt="Instructor"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-3xl"
                />
                <h1 className="font-light text-xs sm:text-sm md:text-base text-gray-800">
                  Instructor:{" "}
                  <span className="text-blue-500 underline mx-1 sm:mx-2">
                    Claudia Pruitt
                  </span>
                </h1>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <div className="flex items-center bg-orange-300 rounded-lg text-xs sm:text-sm px-2 sm:px-3 py-1 border border-gray-300 text-black font-medium">
                  <FaMedal />
                  <h3>Bestseller</h3>
                </div>
                <h1 className="font-medium text-xs sm:text-sm md:text-base flex items-center gap-1 sm:gap-2 text-gray-900">
                  4.8
                  <span className="text-yellow-500 flex items-center text-xs sm:text-sm">
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    <FaStarHalfAlt />
                  </span>
                </h1>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                <button className="bg-orange-500 text-white rounded-full px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 font-medium text-xs sm:text-sm hover:bg-orange-600 transition">
                  Enroll Now
                </button>
                <div className="text-xs sm:text-sm text-gray-700">
                  Start <span className="font-bold">14 April</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center sm:text-left">
              Your Complete Skill Set Starts Here
            </h2>
          </div>
          <div className="mb-10">
            <div className="flex flex-row gap-6 mb-2">
              <div className="font-bold">E-learning</div>
              <div>In-Person</div>
            </div>
            <div className="border-b-4 border-[#F86537] w-[80px] my-2 sm:my-3 mb-8"></div>
          </div>
          <div className="px-2 sm:px-0">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                480: { slidesPerView: 2, spaceBetween: 15 },
                640: { slidesPerView: 3, spaceBetween: 20 },
                1024: { slidesPerView: 4, spaceBetween: 25 }
              }}
            >
              {sliderdata.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-gray-300 flex flex-col justify-center items-center rounded-xl p-3 sm:p-4 h-[80px] sm:h-[90px]">
                    <div className="font-semibold text-center text-sm sm:text-base">{item.coursename}</div>
                    <div className="text-xs sm:text-sm">{item.numOfCourses}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mt-10">
            {[
              {
                title: "Administrative Office Procedures",
                lessons: 12,
                rating: 4.5,
                price: 149.0,
              },
              {
                title: "Business Communication",
                lessons: 10,
                rating: 4.2,
                price: 129.0,
              },
              {
                title: "Project Management",
                lessons: 15,
                rating: 4.7,
                price: 179.0,
              },
              {
                title: "Customer Service",
                lessons: 8,
                rating: 4.3,
                price: 119.0,
              },
              {
                title: "Time Management",
                lessons: 6,
                rating: 4.1,
                price: 99.0,
              },
            ].map((course, index) => (
              <Card
                key={index}
                className="border border-gray-400 rounded-xl hover:shadow-lg transition-shadow h-full flex flex-col"
              >
                <CardBody className="p-4 sm:p-5 flex flex-col h-full">
                  <CardTitle className="font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3 line-clamp-2">
                    {course.title}
                  </CardTitle>
                  <div className="flex gap-1 sm:gap-2 text-gray-400 text-xs sm:text-sm">
                    <ImBook className="mt-0.5" />
                    <span>{course.lessons} lessons</span>
                  </div>
                  <div className="border-b-2 border-gray-300 w-full my-2 sm:my-3"></div>
                  <div className="mb-2 flex items-center text-xs sm:text-sm">
                    <span>{course.rating}</span>
                    <div className="flex pt-0.5 mx-1 sm:mx-2 text-yellow-500">
                      <FaStar size={12} />
                      <FaStar size={12} />
                      <FaStar size={12} />
                      <FaStar size={12} />
                      <FaStarHalfAlt size={12} />
                      {/* <FaRegStarHalfStroke size={12} /> */}
                    </div>
                  </div>
                  <div className="mt-auto pt-4 sm:pt-6">
                    <div className="mb-2 font-bold text-sm sm:text-base">
                      <span>${course.price.toFixed(2)}</span>
                    </div>
                    <div>
                      <Link
                        href="/about"
                        className="text-[#F86537] hover:underline font-medium text-xs sm:text-sm"
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

      <section className="bg-[#081B25] py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-white text-center text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 md:mb-12">
            Flexible Pricing for Individuals and Teams
          </h2>

          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8">
            <div className="flex-1 flex flex-col gap-4 sm:gap-6">
              <Card className="h-full">
                <CardBody className="p-4 sm:p-5 md:p-6 bg-white rounded-xl flex flex-col">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-3 sm:mb-4 md:mb-6 gap-2">
                    <div className="max-w-[250px] sm:max-w-[270px]">
                      <CardTitle className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">
                        Individual Course
                      </CardTitle>
                      <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                        Take Any Course for Just $99 - One-Time Payment,
                        Lifetime Access
                      </p>
                    </div>
                    <div className="bg-[#2490E0] text-white py-1 px-2 sm:px-3 md:px-4 rounded-lg text-xs sm:text-sm">
                      One-Time-Payment
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-end mt-4 sm:mt-6 md:mt-8 gap-2 sm:gap-3">
                    <button className="bg-[#F86537] text-white px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 rounded-full hover:bg-opacity-90 transition w-full sm:w-auto text-xs sm:text-sm md:text-base">
                      Buy Now
                    </button>
                    <div className="text-right w-full sm:w-auto">
                      <div className="text-lg sm:text-xl md:text-2xl font-bold">
                        $99
                      </div>
                      <div className="text-gray-600 text-xs sm:text-sm md:text-base">
                        All Course
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card className="h-full">
                <CardBody className="p-4 sm:p-5 md:p-6 bg-white rounded-xl flex flex-col">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-3 sm:mb-4 md:mb-6 gap-2">
                    <div className="max-w-[250px] sm:max-w-[270px]">
                      <CardTitle className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">
                        All Courses Subscription
                      </CardTitle>
                      <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                        Unlimited Learning - All Courses For $199/year
                      </p>
                    </div>
                    <div className="bg-[#2490E0] text-white py-1 px-2 sm:px-3 md:px-4 rounded-lg text-xs sm:text-sm">
                      Yearly
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-end mt-4 sm:mt-6 md:mt-8 gap-2 sm:gap-3">
                    <button className="bg-[#F86537] text-white px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 rounded-full hover:bg-opacity-90 transition w-full sm:w-auto text-xs sm:text-sm md:text-base">
                      Buy Now
                    </button>
                    <div className="text-right w-full sm:w-auto">
                      <div className="text-lg sm:text-xl md:text-2xl font-bold">
                        $199
                      </div>
                      <div className="text-gray-600 text-xs sm:text-sm md:text-base">
                        All Course
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

            <div className="flex-1">
              <Card className=" ">
                <CardBody className="p-4 sm:p-5 md:p-6 bg-white rounded-xl flex flex-col h-[515px]">
                  <div className="mb-4 sm:mb-6 md:mb-8">
                    <CardTitle className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">
                      Corporate Subscriptions
                    </CardTitle>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                      Choose from 10, 20, or 50-user plans designed for
                      organizations that value continuous development.
                    </p>
                  </div>
                  <div className="space-y-3 sm:space-y-4 md:space-y-6 mb-4 sm:mb-6 md:mb-8">
                    {[
                      { price: "$1990", users: "10 users" },
                      { price: "$3400", users: "20 users" },
                      { price: "$7500", users: "50 users" },
                    ].map((plan, index) => (
                      <div
                        key={index}
                        className="border-b border-gray-300 pb-2 sm:pb-3 md:pb-4"
                      >
                        <div className="flex justify-between items-center">
                          <div className="text-base sm:text-lg md:text-xl font-bold">
                            {plan.price}
                          </div>
                          <div className="flex flex-row gap-1 sm:gap-2 md:gap-4 items-center">
                            <div className="font-semibold text-xs sm:text-sm md:text-base">
                              {plan.users}
                            </div>
                            <input
                              type="radio"
                              name="corporate-plan"
                              className="w-4 h-4"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="bg-[#F86537] text-white w-full py-1.5 sm:py-2 md:py-3 rounded-full hover:bg-opacity-90 transition text-xs sm:text-sm md:text-base mt-20">
                    Buy Now
                  </button>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="h-full">
              <CardBody className="bg-[#2490E0] p-4 sm:p-5 md:p-6 h-[260px] sm:h-[300px] md:h-[320px] flex flex-col rounded-xl">
                <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4">
                  What subscribers are achieving through learning
                </h3>
                <p className="text-white mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base">
                  <span className="text-[#F86537] font-bold">37,076</span>{" "}
                  responses collected
                </p>
                <div className="mt-auto">
                  <Image
                    src={Bcapital}
                    alt="B Capital"
                    width={150}
                    height={50}
                    className="w-[100px] sm:w-[120px] md:w-[150px]"
                  />
                </div>
              </CardBody>
            </Card>

            <Card className="h-full">
              <CardBody className="p-4 sm:p-5 md:p-6 h-[260px] sm:h-[300px] md:h-[320px] flex flex-col rounded-xl border-2 border-white bg-white">
                <div className="mb-2 sm:mb-3 md:mb-4">
                  <Image
                    src={coma}
                    alt="Quote"
                    width={16}
                    height={10}
                    className="w-3 sm:w-4 md:w-5"
                  />
                </div>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 md:mb-8">
                  The online learning platform is user-friendly, and the courses
                  are top-quality. A great investment!
                </p>
                <div className="mt-auto flex justify-between items-end">
                  <div className="flex items-center">
                    <Image
                      src={Yelpceo}
                      alt="Valerie J."
                      width={40}
                      height={40}
                      className="rounded-full w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10"
                    />
                    <div className="ml-1 sm:ml-2 md:ml-3">
                      <div className="font-bold text-xs sm:text-sm md:text-base">
                        Valerie J.
                      </div>
                      <div className="text-gray-400 text-[10px] sm:text-xs md:text-sm">
                        Creasman CEO
                      </div>
                    </div>
                  </div>
                  <Image
                    src={yelp}
                    alt="Yelp"
                    width={60}
                    height={30}
                    className="w-10 sm:w-12 md:w-16"
                  />
                </div>
              </CardBody>
            </Card>

            <Card className="h-full">
              <CardBody className="p-4 sm:p-5 md:p-6 h-[260px] sm:h-[300px] md:h-[320px] flex flex-col border-2 border-white bg-white rounded-xl">
                <div className="mb-2 sm:mb-3 md:mb-4">
                  <Image
                    src={coma}
                    alt="Quote"
                    width={16}
                    height={10}
                    className="w-3 sm:w-4 md:w-5"
                  />
                </div>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 md:mb-8">
                  B.R. Collins' business management course gave me the
                  confidence to lead my team to success.
                </p>
                <div className="mt-auto flex justify-between items-end">
                  <div className="flex items-center">
                    <Image
                      src={cardmen}
                      alt="Hannah R."
                      width={40}
                      height={40}
                      className="rounded-full w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10"
                    />
                    <div className="ml-1 sm:ml-2 md:ml-3">
                      <div className="font-bold text-xs sm:text-sm md:text-base">
                        Hannah R.
                      </div>
                      <div className="text-gray-400 text-[10px] sm:text-xs md:text-sm">
                        Sutton CEO
                      </div>
                    </div>
                  </div>
                  <Image
                    src={facebook}
                    alt="Facebook"
                    width={60}
                    height={15}
                    className="w-10 sm:w-12 md:w-16"
                  />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 items-center">
            <div className="lg:w-1/2">
              <div>
                <span className="text-xs sm:text-sm md:text-lg font-bold text-[#F86537] uppercase">
                  about us
                </span>
                <h2 className="mt-2 sm:mt-3 md:mt-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#081B25]">
                  On Site Learning
                </h2>
                <p className="mt-2 sm:mt-3 md:mt-5 text-sm sm:text-base md:text-lg lg:text-xl leading-6 sm:leading-7 md:leading-8 text-[#081B25]">
                  At B.R Collins, our on-site training transforms everyday
                  lessons into engaging and interactive experiences. Blending
                  creativity with expertise.
                </p>
              </div>

              <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 space-y-3 sm:space-y-4 md:space-y-5">
                <Card className="border-0 bg-white rounded-xl">
                  <CardBody className="p-3 sm:p-4 md:p-6">
                    <div className="flex gap-2 sm:gap-3 md:gap-5 items-center">
                      <Image
                        src={Fleximg}
                        width={70}
                        height={65}
                        alt="Flexible Classes"
                        className="object-contain w-10 sm:w-12 md:w-16"
                      />
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#081B25]">
                          Flexible Classes
                        </h3>
                        <p className="mt-1 sm:mt-2 text-gray-600 text-xs sm:text-sm md:text-base">
                          It is a long established fact that a reader will be
                          distracted by this on readable content of when looking
                          at its layout.
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <Card className="border-0 bg-white rounded-xl">
                  <CardBody className="p-3 sm:p-4 md:p-6">
                    <div className="flex gap-2 sm:gap-3 md:gap-5 items-center">
                      <Image
                        src={Exportimg}
                        width={70}
                        height={68}
                        alt="Expert-Led Training"
                        className="object-contain w-10 sm:w-12 md:w-16"
                      />
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#081B25]">
                          Expert-Led Training
                        </h3>
                        <p className="mt-1 sm:mt-2 text-gray-600 text-xs sm:text-sm md:text-base">
                          Learn from industry experts in a real-world setting.
                          Gain practical knowledge, hands-on experience.
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>

            <div className="lg:w-1/2 mt-4 sm:mt-6 lg:mt-0">
              <Image
                src={AboutLar}
                width={500}
                height={550}
                alt="About B.R Collins"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 items-center">
            <div className="lg:w-1/2">
              <div>
                <span className="text-xs sm:text-sm md:text-lg font-bold text-[#F86537] uppercase">
                  WHY CHOOSE US
                </span>
                <h2 className="mt-2 sm:mt-3 md:mt-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug sm:leading-tight text-[#081B25]">
                  Creating A Community Of Life Long Learners
                </h2>
                <p className="mt-2 sm:mt-3 md:mt-5 text-sm sm:text-base md:text-lg lg:text-xl leading-6 sm:leading-7 md:leading-8 text-[#081B25]">
                  At B.R Collins, our on-site training transforms everyday
                  lessons into engaging and interactive experiences.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 md:mt-8">
                <button className="px-3 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-3 bg-[#F86537] text-white rounded-full hover:bg-opacity-90 transition text-xs sm:text-sm md:text-base">
                  Explore Courses
                </button>
                <button className="px-3 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-3 border-2 border-[#081B25] text-[#081B25] rounded-full hover:bg-gray-50 transition text-xs sm:text-sm md:text-base">
                  Learn More
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6 lg:mt-0">
              {[
                { number: "50+", label: "Courses", bgColor: "bg-[#FFF0EC]" },
                { number: "5K+", label: "Students", bgColor: "bg-[#E3F4FC]" },
                { number: "20+", label: "Countries", bgColor: "bg-[#E3F4FC]" },
                { number: "10+", label: "Languages", bgColor: "bg-[#FFF0EC]" },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className={`border-0 ${stat.bgColor} rounded-xl`}
                >
                  <CardBody className="p-3 sm:p-4 md:p-6 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#081B25]">
                        {stat.number}
                      </span>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#081B25] mt-1 sm:mt-2">
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

      <footer className="bg-[#081B25] py-8 sm:py-12 md:py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between gap-6 sm:gap-8 md:gap-10">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12">
              <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
                <div className="text-base sm:text-lg md:text-xl font-semibold">
                  Quick Link
                </div>
                <div className="text-gray-400 space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base">
                  <div>
                    <Link href="/courses" className="hover:underline">
                      Courses
                    </Link>
                  </div>
                  <div>
                    <Link href="/subscription" className="hover:underline">
                      Subscription
                    </Link>
                  </div>
                  <div>
                    <Link href="/about" className="hover:underline">
                      About
                    </Link>
                  </div>
                  <div>
                    <Link href="/contact" className="hover:underline">
                      Contact Us
                    </Link>
                  </div>
                  <div>
                    <Link href="/login" className="hover:underline">
                      Login & Register
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
                <div className="text-base sm:text-lg md:text-xl font-semibold">
                  Get Contact
                </div>
                <div className="text-[#F86537] text-xs sm:text-sm md:text-base">
                  (406) 555-0120
                </div>
                <div>
                  <Link
                    href="mailto:b.r.collins@example.com"
                    className="text-gray-400 hover:underline text-xs sm:text-sm md:text-base"
                  >
                    b.r.collins@example.com
                  </Link>
                </div>
                <div className="flex flex-row gap-1 sm:gap-2 text-gray-400 text-xs sm:text-sm md:text-base">
                  <CiLocationOn className="text-blue-400 mt-0.5" />
                  <span>North America, USA</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              <div className="text-base sm:text-lg md:text-xl font-semibold">
                Join the Community
              </div>
              <div className="text-gray-400 text-xs sm:text-sm md:text-base">
                2,000+ Students Globally - Connect & Say Hello!
              </div>
              <div className="flex flex-row gap-2">
                <input
                  className="w-full sm:w-[220px] md:w-[270px] h-8 sm:h-9 md:h-10 rounded-xl bg-[#16313F] px-2 sm:px-3 text-xs sm:text-sm md:text-base"
                  placeholder="Email Address"
                />
                <button className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 bg-[#F86537] flex justify-center items-center rounded-xl">
                  <IoIosSend className="text-white" />
                </button>
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-600 my-4 sm:my-6 md:my-8 w-full" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <div>
              <Image
                src={footerimage}
                alt="B.R Collins Logo"
                width={200}
                height={50}
                className="w-[150px] sm:w-[180px] md:w-[200px]"
              />
            </div>
            <div className="flex flex-row gap-2 sm:gap-3 md:gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#F86537] transition"
              >
                <FaFacebookF size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#F86537] transition"
              >
                <FaXTwitter size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#F86537] transition"
              >
                <FaLinkedin size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#F86537] transition"
              >
                <FaInstagram size={16} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          <div className="h-px bg-gray-600 my-4 sm:my-6 md:my-8 w-full" />
        </div>
      </footer>
    </>
  );
}
