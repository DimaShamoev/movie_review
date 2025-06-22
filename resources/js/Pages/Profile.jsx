import { IoAddOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";

import { Link, useForm } from "@inertiajs/react"
import { route } from "ziggy-js"
import { useAuth } from '../hooks/useAuth'

const Profile = ({ user, watchlists }) => {

    const { isAuth } = useAuth()
    const { post } = useForm()

    const handleLogout = () => {
        post(route('logout_user'))
    }


    if (!isAuth) {
        window.location.href = route('sign_up_page')
    }

    console.log(watchlists)

    return (
        <div className="profile padding-box">
            <div className="profile-wrapper flex flex-col gap-9">

                <div className="user-section bg-[#1A1A1A] p-3 flex justify-between">
                    <div className="main-user-info flex items-center gap-6">
                        <div className="user"></div>

                        <div className="user-info">
                            <ul className="flex flex-col gap-4">
                                <li>Full Name: {user.first_name} {user.last_name}</li>
                                <li>Email: {user.email}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="logout">
                        <button
                            type="submit"
                            onClick={handleLogout}
                            className="bg-red-600 p-1 px-5 rounded-md cursor-pointer"
                        >
                            logout
                        </button>
                    </div>
                </div>

                <div className="latest-watchlist">
                    <div className="latest-watchlist flex gap-5 flex-wrap items-center">
                        {watchlists.map((watchlist) => {
                            const movie = watchlist.movie;
                            const coverImages = JSON.parse(movie.movie_cover_image || '[]');
                            
                            return (
                                <div
                                key={watchlist.id}
                                className="max-w-[200px] w-full flex flex-col bg-[#1A1A1A] rounded-lg"
                                >
                                    <div className="movie-banner overflow-hidden">
                                        <img
                                            src={`/storage/${coverImages[0] || ""}`}
                                            alt={movie.movie_title || ""}
                                            className="h-[200px] w-[200px]"
                                        />
                                    </div>

                                    <div className="movie-info p-4 flex flex-col gap-6">
                                        <div className="title">
                                            <p>{movie.movie_title}</p>
                                        </div>

                                        <div className="add-watchlist text-center w-full bg-[#2C2C2C] p-1 rounded-full hover:bg-[#30353C]">
                                            <Link
                                                onClick={() => handleAddWatchlist(movie.id)}
                                                className="text-blue-500 flex items-center justify-around"
                                            >
                                                Add To Watchlist
                                                <IoAddOutline className="text-2xl font" />
                                            </Link>
                                        </div>

                                        <div className="more-info">
                                            <Link
                                                href={route("about_movie", movie.id)}
                                                className="flex items-center justify-between"
                                            >
                                                See Full Detail
                                                <IoMdInformationCircleOutline className="text-2xl" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>


                

            </div>



        </div>
    )
}

export default Profile