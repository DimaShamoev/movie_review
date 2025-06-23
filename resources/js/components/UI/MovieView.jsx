import { useForm } from "@inertiajs/react"
import { BiLike } from "react-icons/bi"
import { FaCommentAlt } from "react-icons/fa"
import { PiImageBrokenBold } from "react-icons/pi"

const MovieView = ({ movie, comments, likes }) => {

    const { post } = useForm()

    const handleMovieLike = (event, movie_id) => {
        event.preventDefault()
        post(route('like_movie', movie_id))
    }

    const images = JSON.parse(movie.movie_cover_image || '[]');

    return (
        <div className="flex flex-col gap-5">

            <div className="trailer-block">

                {movie.trailer_link ? (
                    <iframe
                        src={movie.trailer_link}
                        className='w-full h-[400px]'
                    ></iframe>
                ) : (
                    <div
                        className="w-full h-[400px] bg-[#1A1A1A] flex items-center justify-center"
                    >
                        <PiImageBrokenBold
                            className="text-9xl"
                        />
                        <span className="text-4xl">Something Went Wrong</span>
                    </div>
                )}

            </div>

            <div className="reactions-section flex items-center gap-5">
                <div className="likes-btn">
                    <form
                        onSubmit={(e) => handleMovieLike(e, movie.id)}
                        className="flex items-center gap-1.5"
                    >
                        <button type="submit">
                            <BiLike
                                className="text-2xl"
                            />
                        </button>
                        <span>{likes.length}</span>
                    </form>
                </div>

                <div className="comments-block flex items-center gap-1.5">
                    <FaCommentAlt
                        className="text-xl"
                    />
                    <span>{comments.length}</span>
                </div>
            </div>

            <hr className="border-gray-400/50" />

            <div className="image-slider flex items-center gap-5 overflow-auto">

                {images.map((img, index) => (
                    <img
                        key={index}
                        src={`/storage/${img}`}
                        alt=""
                        className="h-40 w-auto"
                    />
                ))}

            </div>

            <hr className="border-gray-400/50" />

        </div>
    )
}

export default MovieView