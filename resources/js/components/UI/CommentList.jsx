import { useForm } from "@inertiajs/react"
import { BiLike } from "react-icons/bi"

const CommentList = ({ comment, commentLikes }) => {

    const { post } = useForm()

    const handleCommentLike = (event, comment_id) => {
        event.preventDefault()
        post(route('like_comment', comment_id))
    }


    return (


        <li
            key={comment.id}
            className="bg-[#1A1A1A] pt-3 p-2"
        >
            <p
                className="text-xs text-gray-500"
            >
                <span>{comment.user.email}</span> • <span>{new Date(comment.created_at).toLocaleDateString()}</span>
            </p>
            <p
                className="text-lg"
            >
                {comment.comment}
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

    )
}

export default CommentList