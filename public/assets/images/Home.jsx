import React from "react";
import NavBar from "../components/NavBar";
import Banner from "../assets/homepagewall.png";
import { Link } from "react-router-dom";
import instructor from "../assets/instructor.png";
import { TbAddressBook } from "react-icons/tb";
import { Card, CardBody, CardTitle } from "reactstrap";
import { ImBook } from "react-icons/im";
import coma from "../assets/Coma.png";
import image from '../assets/Cardmad.png';
import yelp from '../assets/Yelp.png'
import cardmen from '../assets/cardmen.png'
import facebook from '../assets/Facebook.png'
import Bcapital from '../assets/Bcapital.png'
export default function Home() {
  return (
    <>
      <div className=" flex justify-center items-center">
        <div className="h-[50px] w-[1920px] bg-headingcolor flex justify-center items-center">
          <span className="text-white">
            Courses from $149.00 Gain the skills to climb that career ladder.
          </span>
          <span className="text-[#F6AA3D]">3 days left!</span>{" "}
        </div>
      </div>
      <div>
        <NavBar />
      </div>
      <section>
        <div className="relative">
          <div>
            <img src={Banner} alt="banner" />
          </div>

          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,_white,_white,_transparent,_transparent)]">
            <div className="h-full w-[1000px] mx-auto flex flex-col justify-center">
              <div className="flex justify-start items-start w-[460px]">
                <span className="text-4xl font-semibold">
                  IT Support Specialist Professional Certificate
                </span>
              </div>

              <div className="pt-3 flex gap-2 ">
                <img
                  src={instructor}
                  alt="Banner"
                  className="h-[38px] w-[38px] rounded-3xl "
                />
                <div className="pt-2">
                  <span>Instructor:</span>
                  <Link
                    to="/about"
                    className="text-blue-600 hover:underline ml-2"
                  >
                    Claudia Pruitt
                  </Link>
                </div>
              </div>

              <div className="flex pt-3 ">
                <span className="w-[113px] h-[33px] bg-seller flex justify-center items-center rounded-xl">
                  Best Seller
                </span>
                <div className="pt-1 pl-3 flex">
                  <span>4.8</span>
                  <div className="">
                  <Link className="text-black hover:underline ml-2">
                    10+ rating
                  </Link>
                  </div>
                  <div className="flex ml-3">
                  <TbAddressBook className="text-link1 w-6 h-6 " />
                  <span className="pl-1">10 lessons</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 flex">
                <div className="h-[52px] w-[155px] bg-second rounded-4xl mr-2">
                  <span className="flex justify-center items-center pt-2 ">
                    Enroll Now
                  </span>
                </div>
                <div className="pt-2">
                  <span>
                    Start <strong>April 14</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full min-h-screen bg-gray-100 flex flex-col font-semibold ">
          <div className="h-full w-[1000px] mx-auto ">
            <div className="mb-8">
              <span className="text-2xl">
                Your Complete Skill Set Starts Here
              </span>
            </div>
            <div className="flex gap-4  h-[600px] justify-start items-start">
              <div className="">
                <Card className="border border-gray-400">
                  <CardBody className="h-[400px] w-[196px]">
                    <CardTitle className=" font-bold text-[24px] w-[170px] h-[84px]">
                      Administrative Office Procedure
                    </CardTitle>
                    <div className=" flex gap-2 mt-10 text-gray-400">
                      <ImBook className="mt-1" />
                      <span>12 lessons</span>
                    </div>
                    <div className="border-b-2 border-gray-300 w-full mt-2"></div>

                    <div className="mt-3">
                      <span>4.5</span>
                    </div>
                    <div>
                      <div className="mt-30">
                        <span>$149.00</span>
                      </div>
                      <div>
                        <Link
                          to="/about"
                          className="text-blue-600 hover:underline "
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
              <div>
                <Card className="border border-gray-400">
                  <CardBody className="h-[400px] w-[196px] ">
                    <CardTitle className=" font-bold text-[24px] w-[170px] h-[84px]">
                      Administrative Office Procedure
                    </CardTitle>
                    <div className=" flex gap-2 mt-10 text-gray-400">
                      <ImBook className="mt-1" />
                      <span>12 lessons</span>
                    </div>
                    <div className="border-b-2 border-gray-300 w-full mt-2"></div>
                    <div className="mt-3">
                      <span>4.5</span>
                    </div>
                    <div>
                      <div className="mt-30">
                        <span>$149.00</span>
                      </div>
                      <div>
                        <Link
                          to="/about"
                          className="text-second hover:underline "
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
              <div>
                <Card className="border border-gray-400">
                  <CardBody className="h-[400px] w-[196px] ">
                    <CardTitle className=" font-bold text-[24px] w-[170px] h-[84px]">
                      Administrative Office Procedure
                    </CardTitle>
                    <div className=" flex gap-2 mt-10 text-gray-400">
                      <ImBook className="mt-1" />
                      <span>12 lessons</span>
                    </div>
                    <div className="border-b-2 border-gray-300 w-full mt-2"></div>
                    <div className="mt-3">
                      <span>4.5</span>
                    </div>
                    <div>
                      <div className="mt-30">
                        <span>$149.00</span>
                      </div>
                      <div>
                        <Link
                          to="/about"
                          className="text-blue-600 hover:underline "
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
              <div>
                <Card className="border border-gray-400">
                  <CardBody className="h-[400px] w-[196px] ">
                    <CardTitle className=" font-bold text-[24px] w-[170px] h-[84px]">
                      Administrative Office Procedure
                    </CardTitle>
                    <div className=" flex gap-2 mt-10 text-gray-400">
                      <ImBook className="mt-1" />
                      <span>12 lessons</span>
                    </div>

                    <div className="border-b-2 border-gray-300 w-full mt-2"></div>
                    <div className="mt-3">
                      <span>4.5</span>
                    </div>
                    <div>
                      <div className="mt-30">
                        <span>$149.00</span>
                      </div>
                      <div>
                        <Link
                          to="/about"
                          className="text-blue-600 hover:underline "
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
              <div>
                <Card className="border border-gray-400">
                  <CardBody className="h-[400px] w-[196px] ">
                    <CardTitle className=" font-bold text-[24px] w-[170px] h-[84px]">
                      Administrative Office Procedure
                    </CardTitle>
                    <div className=" flex gap-2 mt-10 text-gray-400">
                      <ImBook className="mt-1" />
                      <span>12 lessons</span>
                    </div>
                    <div className="border-b-2 border-gray-300 w-full mt-2"></div>
                    <div className="mt-3">
                      <span>4.5</span>
                    </div>
                    <div>
                      <div className="mt-30">
                        <span>$149.00</span>
                      </div>
                      <div>
                        <Link
                          to="/about"
                          className="text-blue-600 hover:underline "
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-[#081B25] h-[769px] w-full">
          <div className="text-white flex justify-center items-center pt-4">
            Flexible Pricing for Individuals and Teams
          </div>
          <div className="flex h-full w-[1000px] mx-auto gap-8 mt-8">
            <div className="flex flex-col gap-4">
              <div>
                <Card>
                  <CardBody className="w-[448px] h-[237px] border-amber-400">
                    
                    <div className="flex justify-between">
                    <div className="w-[270px]">
                      <CardTitle className="text-xl font-bold">
                      Individual Course
                    </CardTitle>
                      <span>
                        Take Any Course for Just $99-One- Time Payment, Lifetime
                        Access
                      </span>
                    </div>
                    <div className="w-[150px] h-[40px] bg-[#2490E0] rounded-xl flex justify-center text-white">
                      <button>One-Time-Payment</button>
                    </div>
                    </div>
                    <div className="flex justify-between mt-[70px]">
                    <div className="w-[270px] ">
                      <div className="bg-second h-[30px] w-[100px] flex justify-center rounded-2xl">
                        <button>Buy Now</button>
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">
                      <button>$99</button>
                      </div>
                      <div>All Course</div>
                    </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
              <div className="flex flex-col gap-4">
              <div>
                <Card>
                  <CardBody className="w-[448px] h-[237px] border-amber-400">
                    
                    <div className="flex justify-between">
                    <div className="w-[270px]">
                    <CardTitle className="text-xl font-bold">
                      All Courses Subscription
                    </CardTitle>
                      <span>
                        Unlimited Learning -All Courses For $199/year
                      </span>
                    </div>
                    <div className="w-[60px] h-[30px] bg-[#2490E0] flex justify-center rounded-xl text-white">
                      <button>Yearly</button>
                    </div>
                    </div>
                    <div className="flex justify-between mt-[68px]">
                    <div className="w-[270px] ">
                      <div className="bg-second h-[30px] w-[100px] flex justify-center rounded-2xl">
                        <button>Buy Now</button>
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">
                      <button >$199</button>
                      </div>
                      <div>All Course</div>
                    </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
             
            </div>
            </div>
            <div>
              <Card>
                <CardBody className="w-[448px] h-[494px] border-amber-400">
                  <div>
                    <CardTitle className="text-xl font-bold">Corporate Subscriptions</CardTitle>
                  <span> Choose from 10,20 or 50-user plans designed for organization that value continous development.</span>
                  </div>
                  <div className="flex flex-col gap-8 mt-20">
                  <div className="border-b-2 border-gray-300 pb-2">
  <div className="flex justify-between">
    <div className="text-2xl font-bold">
      $1990
    </div>
    <div className="font-semibold">
      10 user
    </div>
  </div>
</div>            
<div className="border-b-2 border-gray-300 pb-2">
  <div className="flex justify-between">
    <div className="text-2xl font-bold">
      $3400
    </div>
    <div className="font-semibold">
      20 user
    </div>
  </div>
</div> 
<div className="border-b-2 border-gray-300 pb-2">
  <div className="flex justify-between">
    <div className="text-2xl font-bold">
      $7500
    </div>
    <div className="font-semibold">
      30 user
    </div>
  </div>
</div> 
                    </div>
                    <div className="bg-second w-full h-[50px] mt-4 flex justify-center rounded-2xl"><button>Buy Now</button></div>
                </CardBody>
              </Card>
            </div>
          </div>
          <div></div>
        </div>
      </section>
      <section>
        <div className="w-full min-h-screen bg-gray-100 flex flex-col font-semibold ">
          <div className="h-full w-[1000px] mx-auto mt-10">
           
            <div className="flex gap-4  h-[600px] justify-start items-start">
              <div>
                <Card className="border border-gray-400">
                  <CardBody className="h-[320px] w-[322px] bg-[#2490E0]">
               
                    <div className=" flex gap-2 mt-3 text-2xl w-[200px] text-white">
                      
                      <span>What subscribers are achieving through learning</span>
                    </div>
                   <div className="mt-4">
                    <div className="text-wh"><span className="text-second">37,076 </span>responses collected</div>
                   </div>
                   <div><img className="w-[180px]" src={Bcapital} alt="" /></div>
                  </CardBody>
                </Card>
              </div>
              <div>
                <Card className="border border-gray-400">
                  <CardBody className="h-[320px] w-[322px] ">
                  <div className="">
                      <img className='h[12px] w-[20px]' src={coma} alt="" />
                      </div>
                    <div className=" flex gap-2 mt-3 text-xl ">
                      
                      <span>The online learning platform is user-friendly, and the courses are top-quality. A great investment!</span>
                    </div>
                    <div className="flex justify-between mt-20">
                      <div>
                      <div className="flex ">
                        <img className="w-[50px] h-[50px]" src={image} alt="" />
                        <div className="flex flex-col ml-2">
                       <div><strong>Valerie J.</strong></div>
                       <div>Creasman CEO</div>
                       </div>
                      </div>
                      </div>
                      <div>
                       <img className='w[88px] h-[35px]' src={yelp} alt="" />
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
              <div>
                <Card className="border border-gray-400">
                  <CardBody className="h-[320px] w-[322px] ">
                  <div className="">
                      <img className='h[12px] w-[20px]' src={coma} alt="" />
                      </div>
                  <div className=" flex gap-2 mt-10 text-xl ">
                      
                      <span>B.R. Collins' business management course gave me the confidence to lead my team to success.</span>
                    </div>
                    <div className="flex justify-between mt-15">
                      <div>
                      <div className="flex ">
                        <img className="w-[50px] h-[50px]" src={cardmen} alt="" />
                        <div className="flex flex-col ml-2">
                       <div><strong>Valerie J.</strong></div>
                       <div>Creasman CEO</div>
                       </div>
                      </div>
                      </div>
                      <div>
                       <img className='w-[93px] h-[17px]' src={facebook} alt="" />
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
              
              
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="h-[1141px] w-full">

        </div>
      </section>
    </>
  );
}
