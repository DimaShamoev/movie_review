import { IoClose } from "react-icons/io5";
import { MdLibraryAdd, MdLocalMovies } from "react-icons/md";
import { FaTv } from "react-icons/fa";
import { PiVideoFill } from "react-icons/pi";
import { IoPeopleSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

import { Link } from "@inertiajs/react";
import { useAside } from "../../hooks/useAside";
import { route } from "ziggy-js";
import { useAuth } from "../../hooks/useAuth";

const Aside = () => {

    const { isMenuOpen, toggleMenu } = useAside()

    const { isAuth, user } = useAuth()

    const isAdmin = user?.is_admin !== 0 ? true : false

    return (
        <div
            className={`overlay fixed bg-black/70 z-[11] transition-all duration-200 ${isMenuOpen ? 'inset-0' : ''}`}
        >

            <aside
                className={`flex flex-col gap-7 fixed top-0 bottom-0 overflow-auto max-w-[320px] w-full text-black bg-gray-200 z-[1] p-5 transition-all duration-200 ${isMenuOpen ? 'right-0' : 'right-[-320px]'}`}
            >
                
                <div className="exit-btn flex justify-end">
                    <IoClose
                        onClick={toggleMenu}
                        className="text-3xl cursor-pointer"
                    />
                </div>

                <div className="links flex-1">
                    <ul className="flex flex-col gap-5">
                        <li>
                            <Link
                                href=""
                                className="flex items-center transition-colors duration-200 ease-linear gap-1.5 hover:bg-black hover:text-white p-1 rounded-md"
                                onClick={toggleMenu}
                            >
                                <MdLocalMovies
                                    className="text-3xl"
                                />
                                <span className="text-xl">Movies</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href=""
                                className="flex items-center transition-colors duration-200 ease-linear gap-1.5 hover:bg-black hover:text-white p-1 rounded-md"
                                onClick={toggleMenu}
                            >
                                <FaTv
                                    className="text-2xl"
                                />
                                <span className="text-xl">Tv Shows</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href=""
                                className="flex items-center transition-colors duration-200 ease-linear gap-1.5 hover:bg-black hover:text-white p-1 rounded-md"
                                onClick={toggleMenu}
                            >
                                <PiVideoFill
                                    className="text-2xl"
                                />
                                <span className="text-xl">Watch</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href=""
                                className="flex items-center transition-colors duration-200 ease-linear gap-1.5 hover:bg-black hover:text-white p-1 rounded-md"
                                onClick={toggleMenu}
                            >
                                <IoPeopleSharp
                                    className="text-2xl"
                                />
                                <span className="text-xl">Actors</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route('profile_page')}
                                className="flex items-center transition-colors duration-200 ease-linear gap-1.5 hover:bg-black hover:text-white p-1 rounded-md"
                                onClick={toggleMenu}
                            >
                                <FaUser
                                    className="text-2xl"
                                />
                                <span className="text-xl">Profile</span>
                            </Link>
                        </li>
                        {isAuth && isAdmin && (
                            <li>
                                <Link
                                    href={route('add_movie_page')}
                                    className="flex items-center transition-colors duration-200 ease-linear gap-1.5 hover:bg-black hover:text-white p-1 rounded-md"
                                    onClick={toggleMenu}
                                >
                                    <MdLibraryAdd
                                        className="text-2xl"
                                    />
                                    <span className="text-xl">Add Movie</span>
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>

                <div className="split">
                    <hr />
                </div>

                <div className="logo flex justify-center">
                    <Link
                        href="/"
                        className="logo flex items-center gap-2.5"
                        onClick={toggleMenu}
                    >
                        <img
                            className="w-[30px] sm:w-[50px]"
                            src="/images/web/logo.png"
                            alt="Logo" 
                        />
                        <span
                            className="text-md font-bold sm:text-3xl"
                        >
                            Movie Review
                        </span>
                    </Link>
                </div>

            </aside>

        </div>
    )
}

export default Aside