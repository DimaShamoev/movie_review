import { IoAddOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";

import { Link, useForm } from "@inertiajs/react"
import { route } from "ziggy-js"
import { useAuth } from '../hooks/useAuth'
import MovieUi from "../components/UI/MovieUi";

const Profile = ({ user, watchlists }) => {

    const { isAuth } = useAuth()
    const { post } = useForm()

    const handleLogout = () => {
        post(route('logout_user'))
    }


    if (!isAuth) {
        window.location.href = route('sign_up_page')
    }


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
                        {watchlists.map((watchlist) => (
                            <MovieUi key={watchlist.id} watchlist={watchlist} />
                        ))}
                    </div>
                </div>


                

            </div>



        </div>
    )
}

export default Profile