import { IoMdInformationCircleOutline } from "react-icons/io";

import { Link, useForm } from "@inertiajs/react";
import { useAuth } from '../../hooks/useAuth'
import { route } from "ziggy-js";
import { FiMinus } from "react-icons/fi";

const MovieUi = ({ watchlist }) => {

    const { delete: remove } = useForm()

    const movie = watchlist.movie;

    let coverImages = [];

    try {
        coverImages = JSON.parse(movie.movie_cover_image);
    } catch {
        coverImages = [];
    }


    const handleRemoveWatchlist = (e, id) => {
        e.preventDefault();
        remove(route('remove_watchlist', id));
    };

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
                        onClick={(e) => handleRemoveWatchlist(e, movie.id)}
                        className="text-blue-500 flex items-center justify-around w-full"
                    >
                        Remove
                        <FiMinus className="text-2xl font" />
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

}

export default MovieUi