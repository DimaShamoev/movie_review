import { IoMdInformationCircleOutline } from "react-icons/io"
import { IoAddOutline } from "react-icons/io5"

import { Link, useForm } from "@inertiajs/react"
import { useAuth } from '../../hooks/useAuth'
import { route } from "ziggy-js";

const MovieCard = ({ movie }) => {

    const { isAuth } = useAuth()

    const { post } = useForm()

    const handleAddWatchlist = (e, id) => {
        e.preventDefault()
        post(route('add_watchlist', id))
    }

    return (
        <div>

            <div
                key={movie.id}
                className="max-w-[200px] w-full flex flex-col bg-[#1A1A1A] rounded-lg"
            >

                <div className="movie-banner overflow-hidden">
                    <img
                        src={`/storage/${JSON.parse(movie.movie_cover_image)[0]}`}
                        alt=""
                        className="h-[200px] w-[200px]"
                    />
                </div>

                <div className="movie-info p-4 flex flex-col gap-6">
                    <div className="title">
                        <p>{movie.movie_title}</p>
                    </div>

                    <div className="add-watchlist text-center w-full bg-[#2C2C2C] p-1 rounded-full hover:bg-[#30353C]">
                        {isAuth ? (
                            <Link
                                onClick={() => handleAddWatchlist(movie.id)}
                                className="text-blue-500 flex items-center justify-around"
                            >
                                Add To Watchlist
                                <IoAddOutline className="text-2xl font" />
                            </Link>
                        ) : (
                            <Link
                                href={route('sign_up_page')}
                                className="text-blue-500 flex items-center justify-around"
                            >
                                Add To Watchlist
                                <IoAddOutline className="text-2xl font" />
                            </Link>
                        )}
                    </div>

                    <div className="more-info">
                        <Link
                            href={route('about_movie', movie.id)}
                            className="flex items-center justify-between"
                        >
                            See Full Detail
                            <IoMdInformationCircleOutline
                                className="text-2xl"
                            />
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MovieCard