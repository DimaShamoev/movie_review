import { Link, useForm } from '@inertiajs/react'
import { useAuth } from '../hooks/useAuth'
import { route } from 'ziggy-js'

const AddMovie = () => {

    const { setData, errors, processing, post } = useForm({
        movie_title: "",
        movie_description: "",
        movie_duration: "",
        movie_director: "",
        movie_cover_image: [],
        movie_release_date: "",
        trailer_link: ""
    })

    const { isAuth, user } = useAuth()

    if (!isAuth || (isAuth && user.is_admin === 0)) {
        return window.location.href = '/'
    }

    const handleMoviePost = (event) => {
        event.preventDefault()

        post(route('post_movie'), {
            forceFormData: true
        })
    }

    return (
        <div className="container padding-box min-h-[80vh] flex items-center justify-center">
            <form
                onSubmit={handleMoviePost}
                action={route('post_movie')}
                method="post"
                className="p-5 max-w-[600px] w-full flex flex-col gap-4"
                encType='multipart/form-data'
            >
                <div className="form-title text-center text-3xl">
                    Upload A New Movie
                </div>

                <div className="input-block input-user-info max-w-[600px] w-full">
                    <input
                        type="text"
                        placeholder="Movie Title"
                        className="border-2 w-full p-1 outline-none rounded-sm"
                        name="movie_title"
                        onChange={(e) => setData('movie_title', e.target.value)}
                    />
                    {errors.movie_title && <div className="text-red-600 text-xs">{errors.movie_title}</div>}
                </div>
                <div className="input-block input-user-info max-w-[600px] w-full">
                    <textarea
                        type="text"
                        placeholder="Movie Description"
                        className="border-2 w-full p-1 outline-none rounded-sm h-28"
                        name="movie_description"
                        onChange={(e) => setData('movie_description', e.target.value)}
                    />
                    {errors.movie_description && <div className="text-red-600 text-xs">{errors.movie_description}</div>}
                </div>
                <div className="input-block input-user-info max-w-[600px] w-full">
                    <input
                        type="text"
                        placeholder="Movie Trailer"
                        className="border-2 w-full p-1 outline-none rounded-sm"
                        name="trailer_link"
                        onChange={(e) => setData('trailer_link', e.target.value)}
                    />
                    {errors.trailer_link && <div className="text-red-600 text-xs">{errors.trailer_link}</div>}
                </div>
                <div className="input-block input-user-info max-w-[600px] w-full">
                    <input
                        type="number"
                        placeholder="Movie Duration"
                        className="border-2 w-full p-1 outline-none rounded-sm"
                        name="movie_duration"
                        onChange={(e) => setData('movie_duration', e.target.value)}
                    />
                    {errors.movie_duration && <div className="text-red-600 text-xs">{errors.movie_duration}</div>}
                </div>
                <div className="input-block input-user-info max-w-[600px] w-full">
                    <input
                        type="text"
                        placeholder="Movie Director"
                        className="border-2 w-full p-1 outline-none rounded-sm"
                        name="movie_director"
                        onChange={(e) => setData('movie_director', e.target.value)}
                    />
                    {errors.movie_director && <div className="text-red-600 text-xs">{errors.movie_director}</div>}
                </div>
                <div className="input-block input-user-info max-w-[600px] w-full">
                    <input
                        type="date"
                        className="border-2 w-full p-1 outline-none rounded-sm"
                        name="movie_release_date"
                        onChange={(e) => setData('movie_release_date', e.target.value)}
                    />
                    {errors.movie_release_date && <div className="text-red-600 text-xs">{errors.movie_release_date}</div>}
                </div>
                <div className="input-block input-user-info max-w-[600px] w-full flex items-center cursor-pointer">
                    <label htmlFor="movie_cover" className='max-w-[100px] w-full h-full border-2 p-1 border-r-0 rounded-l-md'>Upload File</label>
                    <input
                        type="file"
                        multiple
                        className="border-2 w-full p-1 outline-none rounded-r-md"
                        name="movie_cover_image"
                        id="movie_cover"
                        onChange={(e) => setData('movie_cover_image', e.target.files)}
                    />
                    {errors.movie_cover_image && <div className="text-red-600 text-xs">{errors.movie_cover_image}</div>}
                </div>
                <div className="submit-btn input-user-info max-w-[600px] w-full">
                    <button
                        className="w-full bg-yellow-300 text-black p-1 cursor-pointer rounded-sm"
                        disabled={processing}
                    >
                        Upload Movie
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddMovie
