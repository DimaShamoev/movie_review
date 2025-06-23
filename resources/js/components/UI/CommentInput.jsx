import { useForm } from "@inertiajs/react"

const CommentInput = ({ movie }) => {

    const { data, post, setData } = useForm({
        comment: ''
    })

    const handleComment = (event, movie_id) => {
        event.preventDefault()
        post(route('movie_comment', movie_id))
        setData('comment', '')
    }

    return (
        <div>

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

        </div>
    )
}

export default CommentInput