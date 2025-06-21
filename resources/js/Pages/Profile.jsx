import { useForm } from "@inertiajs/react"
import { route } from "ziggy-js"

const Profile = () => {
    
    const { post } = useForm()

    const handleLogout = () => {
        post(route('logout_user'))
    }

    return (
        <div>

            <button type="submit" onClick={handleLogout}>
                logout
            </button>

        </div>
    )
}

export default Profile