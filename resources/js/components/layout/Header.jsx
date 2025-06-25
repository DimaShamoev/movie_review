import { IoMenu } from "react-icons/io5";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { FaUser } from "react-icons/fa";

import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";
import { useAside } from "../../hooks/useAside";
import { useAuth } from '../../hooks/useAuth';

const Header = () => {

    const { user, isAuth } = useAuth()
    const { toggleMenu } = useAside();

    return (
        <header className="bg-[#222] padding-box sticky top-0 z-10 shadow-gray-900 shadow-2xl">
            <div className="header-wrapper container flex items-center gap-10">
                <Link
                    href="/"
                    className="logo flex items-center gap-2.5"
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

                <div className="search flex-1 relative">
                    <div className="search-input">
                        <input
                            type="text"
                            placeholder="search"
                            className="w-full border bg-white rounded-md pl-3 pr-8 py-1 text-black outline-none"
                        />
                        <span>
                            <GoSearch
                                className="absolute right-[10px] top-[50%] translate-y-[-50%] text-black"
                            />
                        </span>
                    </div>
                </div>

                <div className="header-btns flex items-center justify-between gap-4">
                    <div className="watchlist-section">
                        { isAuth ? (
                            <Link
                                href={route('user_watchlist', user.id)}
                                className="watchlist flex items-center gap-1"
                            >
                                <BsBookmarkPlusFill
                                    className="text-xl"
                                />
                                <span>Watchlist</span>
                            </Link>
                        ) : (
                            <Link
                                href={route('sign_up_page')}
                                className="watchlist flex items-center gap-1"
                            >
                                <BsBookmarkPlusFill
                                    className="text-xl"
                                />
                                <span>Watchlist</span>
                            </Link>
                        ) }
                    </div>

                    <div
                        onClick={toggleMenu}
                        className="menu-btn flex items-center gap-1 cursor-pointer"
                    >
                        <IoMenu
                            className="text-2xl"
                        />
                        <span>Menu</span>
                    </div>

                    <div className="auth-section">
                        { isAuth ? (
                            <Link href={route('profile_page')} className="flex items-center gap-1"><FaUser /> { user.first_name }</Link>
                        ) : (
                            <Link href={route('sign_up_page')}>Sign Up</Link>
                        ) }  
                    </div>

                    <div className="search-icon">
                        <GoSearch
                            className="text-white"
                        />
                    </div>

                    <div
                        onClick={toggleMenu}
                        className="aside-menu-btn flex items-center gap-1"
                    >
                        <IoMenu
                            className="text-2xl cursor-pointer"
                        />
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header