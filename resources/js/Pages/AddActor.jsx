import { useForm } from "@inertiajs/react"
import { route } from "ziggy-js"
import { useAuth } from "../hooks/useAuth"

const AddActor = () => {

    const { data, post, setData, errors, processing, reset } = useForm({
        'actor_name': '',
        'actor_surname': '',
        'actor_age': '',
        'actor_bio': '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('add-actor'), {
            onSuccess: () => {
                reset();
            },
        })
        
    }

    const { isAuth, user } = useAuth()

    if (!isAuth || (isAuth && user.is_admin === 0)) {
        return window.location.href = '/'
    }

    return (
        <div>

            <div className="container padding-box min-h-[80vh] flex items-center justify-center">
                <form
                    onSubmit={handleSubmit}
                    action={route('register_user')}
                    method="post"
                    className="p-5 max-w-[600px] w-full flex flex-col gap-4"
                >
                    <div className="form-title text-center text-3xl">
                        Add A New Actor
                    </div>

                    <div className="input-block input-user-info max-w-[600px] w-full flex flex-col gap-1">
                        <input
                            type="text"
                            placeholder="Actor First Name"
                            className="border-2 w-full p-1 outline-none rounded-sm"
                            onChange={(e) => setData('actor_name', e.target.value)}
                            name="actor_name"
                            value={data.actor_name}
                        />
                        {errors.actor_name && <div className="text-xs text-red-600">{errors.actor_name}</div>}
                    </div>
                    <div className="input-block input-user-info max-w-[600px] w-full flex flex-col gap-1">
                        <input
                            type="text"
                            placeholder="Actor Last Name"
                            className="border-2 w-full p-1 outline-none rounded-sm"
                            onChange={(e) => setData('actor_surname', e.target.value)}
                            name="actor_surname"
                            value={data.actor_surname}
                        />
                        {errors.actor_surname && <div className="text-xs text-red-600">{errors.actor_surname}</div>}
                    </div>
                    <div className="input-block input-user-info max-w-[600px] w-full flex flex-col gap-1">
                        <input
                            type="number"
                            placeholder="Actor Age"
                            className="border-2 w-full p-1 outline-none rounded-sm"
                            onChange={(e) => setData('actor_age', e.target.value)}
                            name="actor_age"
                            value={data.actor_age}
                        />
                        {errors.actor_age && <div className="text-xs text-red-600">{errors.actor_age}</div>}
                    </div>
                    <div className="input-block input-user-info max-w-[600px] w-full flex flex-col gap-1">
                        <textarea
                            type="text"
                            placeholder="Actor Biography"
                            className="border-2 w-full p-1 outline-none rounded-sm resize-y"
                            onChange={(e) => setData('actor_bio', e.target.value)}
                            rows={5}
                            name="actor_bio"
                            value={data.actor_bio}
                        ></textarea>
                        {errors.actor_bio && <div className="text-xs text-red-600">{errors.actor_bio}</div>}
                    </div>

                    <div className="submit-btn">
                        <button type="submit" className="w-full bg-yellow-300 text-black p-1 cursor-pointer rounded-sm" disabled={processing}>
                            Add Actor
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default AddActor