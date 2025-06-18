import { IoMenu } from "react-icons/io5";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { GoSearch } from "react-icons/go";

const Header = () => {

    const isAuth = false;

    return (
        <header className="bg-[#222] padding-box">
            <div className="header-wrapper container flex items-center gap-10">
                <div className="logo flex items-center gap-2.5">
                    <img
                        className="w-[50px]"
                        src="images/web/logo.png"
                        alt="Logo" 
                    />
                    <span
                        className="text-3xl font-bold"
                    >
                        Movie Review
                    </span>
                </div>

                <div className="search flex-1 relative">
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

                <div className="header-btns flex items-center justify-between gap-4">
                    <div className="watchlist flex items-center gap-1">
                        <BsBookmarkPlusFill
                            className="text-xl"
                        />
                        <span>Watchlist</span>
                    </div>

                    <div className="menu-btn flex items-center gap-1">
                        <IoMenu
                            className="text-2xl"
                        />
                        <span>Menu</span>
                    </div>
                    <div className="auth-section">
                        { isAuth ? (
                            User
                        ) : (
                            <a href="">Sign Up</a>
                        ) }  
                    </div>
                    <div className="aside-menu-btn flex items-center gap-1">
                        <IoMenu
                            className="text-2xl"
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header