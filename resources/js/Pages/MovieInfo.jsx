import CommentInput from "../components/UI/CommentInput";
import CommentList from "../components/UI/CommentList";
import MovieView from "../components/UI/MovieView";

const MovieInfo = ({ movie, comments, likes, commentLikes }) => {
    

    return (
        <div className='movie-info padding-box'>
            <div className="movie-info-wrapper flex flex-col gap-5">
                
                <MovieView
                    key={movie.id}
                    movie={movie}
                    comments={comments}
                    likes={likes} 
                />
                

                <div className="comments-section flex flex-col gap-3.5">
                    <CommentInput movie={movie} />

                    <div className="comments-list">
                        <ul className="flex flex-col gap-2.5">
                            {comments.map((comment) => (
                                <CommentList
                                    key={comment.id}
                                    comment={comment}
                                    commentLikes={commentLikes}
                                />
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MovieInfo