import { useForm } from "@inertiajs/react"
import { BiLike } from "react-icons/bi"

import { useAuth } from '../../hooks/useAuth'
import { route } from "ziggy-js"

const CommentList = ({ comment, commentLikes }) => {

    const { post, delete:remove } = useForm()

    const { isAuth, user } = useAuth()

    const isAdmin = user?.is_admin === 0 ? false : true
    const isAuthor = user?.id === comment?.user_id

    console.log(user)

    console.log(isAdmin)

    const handleCommentLike = (event, comment_id) => {
        event.preventDefault()
        post(route('like_comment', comment_id))
    }

    const handleCommentRemove = (e, comment_id) => {
        e.preventDefault()
        remove(route('remove_comment', comment_id))
    }

    console.log(comment)

    return (


        <li
            key={comment.id}
            className="bg-[#1A1A1A] pt-3 p-2"
        >
            <div className="comment-top flex justify-between">
                <div className="comment-info">
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
                </div>
                {isAuth && isAdmin || isAuth && isAuthor ? (
                    <div className="delete-btn">
                        <button
                            onClick={(e) => handleCommentRemove(e, comment.id)}
                            className="bg-red-500 p-1 text-xs rounded-md cursor-pointer"
                        >
                            Delete
                        </button>
                    </div>
                ) : null}
            </div>
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