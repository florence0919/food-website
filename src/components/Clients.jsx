
import React from 'react'
import Slider from 'react-slick'

import uuser from "../assets/person.png"
import nuser from "../assets/p.png"
import c from "../assets/k.jpg"
import d from "../assets/r.jpg"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const client = [
    {
        img: uuser,
        review: "The veggies were so fresh and packed beautifully. Love it!",
        nam: "Noelle lay"

    },
    {
        img: nuser,
        review: "Quick delivery & top-notch quality. Highly recommend!",
        nam: "Ivan til"
    }
    , {
        img: c,
        review: "Finally, a brand I can trust for real organic produce.",
        nam: "lian xie"
    }, {
        img: d,
        review: "Organic, fresh, and affordable. My family loves it!",
        nam: " Bin hao"
    }

];

const Clients = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    };






    return (
        <div className='bg-green-50 h-auto w-full p-3'>
            <div className='flex justify-center '>
                <h4 className='text-3xl font-semibold'>What Our Clients Say</h4>

            </div>


            <div className='w-full  mt-5 p-3  gap-8 justify-center bg-green-700'>
                <Slider {...settings}>

                    {client.map((c, index) => (
                        <div key={index} className='p-3'>
                            <div className='  bg-gray-200 p-5 rounded-md flex flex-col items-center gap-2'>
                                <div className='w-[70%] h-[33%] bg-pink-200 flex  justify-center items-center rounded-full'>
                                    <img src={c.img} alt='person ' className='rounded-full' />
                                </div>

                                <p className='text-gray-500 text-center  mt-2'> {c.review}</p>
                                <p className='font-bold'>{c.nam}</p>


                            </div>
                        </div>


                    ))}
                </Slider>






            </div>




        </div>
    )
}

export default Clients
