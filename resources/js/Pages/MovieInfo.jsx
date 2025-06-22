import { useForm } from "@inertiajs/react";
import { BiLike } from "react-icons/bi";
import { FaCommentAlt } from "react-icons/fa";
import { PiImageBrokenBold } from "react-icons/pi";
import { route } from "ziggy-js";

const MovieInfo = ({ movie, comments, likes, commentLikes }) => {

    const { data, post, setData } = useForm({
        comment: ''
    })

    console.log(commentLikes)

    const handleComment = (event, movie_id) => {
        event.preventDefault()
        post(route('movie_comment', movie_id))
        setData('comment', '')
    }

    const handleMovieLike = (event, movie_id) => {
        event.preventDefault()
        post(route('like_movie', movie_id))
    }

    const handleCommentLike = (event, comment_id) => {
        event.preventDefault()
        post(route('like_comment', comment_id))
    }

    const images = JSON.parse(movie.movie_cover_image || '[]');

    return (
        <div className='movie-info padding-box'>
            <div className="movie-info-wrapper flex flex-col gap-5">
                
                <div className="trailer-block">

                    { movie.trailer_link ? (
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
                            <span>{ likes.length }</span>
                        </form>
                    </div>

                    <div className="comments-block flex items-center gap-1.5">
                        <FaCommentAlt
                            className="text-xl"
                        />
                        <span>{ comments.length }</span>
                    </div>
                </div>

                <hr className="border-gray-400/50"/>

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

                <hr className="border-gray-400/50"/>

                <div className="comments-section flex flex-col gap-3.5">
                    <form
                        onSubmit={(e) => handleComment(e, movie.id)}
                        className="comment-form flex"
                    >
                        <div className="comment-input flex-1 border-2 rounded-l-md p-1">
                            <input
                                type="text"
                                placeholder="Leave Your Comment"
                                className="w-full outline-none"
                                onChange={(e) => setData('comment', e.target.value)}
                                value={data.comment}
                            />
                        </div>
                        <button
                            className="bg-yellow-400 text-black rounded-r-md p-1 border-2 border-white border-l-0"
                        >
                            Leave Comment
                        </button>
                    </form>

                    <div className="comments-list">
                        <ul className="flex flex-col gap-2.5">
                            {comments.map((comment) => (
                                <li
                                    key={comment.id}
                                    className="bg-[#1A1A1A] pt-3 p-2"
                                >
                                    <p
                                        className="text-xs text-gray-500"
                                    >
                                        <span>{ comment.user.email }</span> • <span>{ new Date(comment.created_at).toLocaleDateString() }</span>
                                    </p>
                                    <p
                                        className="text-lg"
                                    >
                                        { comment.comment }
                                    </p>
                                    <div className="like-section">
                                        <form
                                            onSubmit={(e) => handleCommentLike(e, comment.id)}
                                            className="flex items-center gap-1.5 text-sm"
                                        >
                                            <button type="submit">
                                                <BiLike />
                                            </button>
                                            {commentLikes.filter(like => like.comment_id === comment.id).length}
                                        </form>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MovieInfo