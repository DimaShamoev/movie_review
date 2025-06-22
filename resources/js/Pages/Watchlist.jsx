import { IoAddOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";

import { Link } from "@inertiajs/react"
import { route } from "ziggy-js";

const Watchlist = ({ watchlist }) => {
    return (
        <div className="watchlist padding-box">
            <div className="watchlist-wrap container flex gap-5 flex-wrap">
                {watchlist.map((item) => {
                    const movie = item.movie;

                    let coverImages = [];
                    try {
                        coverImages = JSON.parse(movie.movie_cover_image);
                    } catch {
                        coverImages = [];
                    }

                    return (
                        <div
                            key={item.id}
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
    );
};


export default Watchlist