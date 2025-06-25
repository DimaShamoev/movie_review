import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import { Link } from "@inertiajs/react"
import { route } from "ziggy-js"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const MovieSlider = ({movies}) => {
    
    return (
        <div className="relative">
            <div className="swiper-controls flex justify-between items-center mb-4">
                <button 
                    className="custom-prev bg-[#2B7FFF] text-white p-2 rounded absolute top-[50%] translate-y-[-50%] z-[2] left-[30px] opacity-50 hover:opacity-100 cursor-pointer"
                ><FaChevronLeft /></button>

                <button
                    className="custom-next bg-[#2B7FFF] text-white p-2 rounded absolute top-[50%] translate-y-[-50%] z-[2] right-[30px] opacity-50 hover:opacity-100 cursor-pointer"
                ><FaChevronRight /></button>
            </div>

            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                speed={1000}
                loop={true}
                className="slider-track"
            >
                {movies.map((movie) => (
                    <SwiperSlide
                        key={ movie.id }
                    >
                        <Link
                            href={route('about_movie', movie.id)}
                            className="bg-[#1A1A1A] text-white rounded-md p-4 h-[500px] max-w-screen w-full flex flex-col"
                        >
                            <img
                                src={`/storage/${JSON.parse(movie.movie_cover_image)[0]}`}
                                alt={movie.movie_title}
                                className="h-40 w-full object-cover rounded flex-1"
                            />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>


        </div>
    )

}

export default MovieSlider