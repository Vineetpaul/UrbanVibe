import React from 'react'
import BannerImg from '../../assets/4547829.jpg'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center py-12 sm:py-0 ">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center py-12 dark:text-white">
          <div data-aos="zoom-in">
            <img
              className="max-w-[400px] rounded-lg w-full h-auto mx-auto"
              src={BannerImg}
              alt="Banner Image"
            />
          </div>
          <div className="flex flex-col gap-6 sm:pt-0 justify-center">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Winter Sale is Here upto 50% off
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm tracking-wide text-gray-500 leading-5 dark:text-gray-300"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
              inventore voluptas dolores eos doloribus
            </p>

            <div className="flex flex-col gap-4">
              <div data-aos="fade-up">
                <div
                  className="flex items-center gap-4 cursor-pointer
                                hover:bg-violet-50 dark:hover:bg-violet-300 rounded-xl
                                !duration-200 !transition-colors py-2 px-2"
                >
                  <GrSecure
                    className="h-12 w-12 rounded-full text-4xl
                                    bg-violet-100 dark:bg-violet-400 shadow-sm p-4"
                  />
                  <p>Quality Product</p>
                </div>
              </div>
              <div data-aos="fade-up">
                <div
                  className="flex items-center gap-4 cursor-pointer
                                hover:bg-blue-50 dark:hover:bg-blue-300 rounded-xl 
                                !duration-200 !transition-colors py-2 px-2"
                >
                  <IoFastFood
                    className="h-12 w-12 rounded-full text-4xl
                                    bg-blue-100 dark:bg-blue-400 shadow-sm p-4"
                  />
                  <p>Fast Delivery</p>
                </div>
              </div>
              <div data-aos="fade-up">
                <div
                  className="flex items-center gap-4 cursor-pointer
                                hover:bg-orange-50 dark:hover:bg-orange-300 rounded-xl
                                !duration-200 !transition-colors py-2 px-2"
                >
                  <GiFoodTruck
                    className="h-12 w-12 rounded-full text-4xl
                                    bg-orange-100 dark:bg-orange-400 shadow-sm p-4"
                  />
                  <p>Easy Payment Method</p>
                </div>
              </div>

              <div data-aos="fade-up">
                <div
                  className="flex items-center gap-4 cursor-pointer
                                hover:bg-green-50 dark:hover:bg-green-300 rounded-xl
                                !duration-200 !transition-colors py-2 px-2"
                >
                  <GiFoodTruck
                    className="h-12 w-12 rounded-full text-4xl
                                    bg-green-100 dark:bg-green-400 shadow-sm p-4"
                  />
                  <p>Get Offer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
