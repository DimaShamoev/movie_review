import { Link, useForm } from "@inertiajs/react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { route } from "ziggy-js";
import { useAuth } from '../hooks/useAuth'

const SignIn = () => {

    const { setData, post, errors, processing } = useForm({
        email: '',
        password: ''
    })

    const { isAuth } = useAuth()

    const handelRegistration = (event) => {
        event.preventDefault();

        post(route('login_user'))
    }

    if (isAuth) {
        window.location.href = '/'
    }

    return (
        <div className="container padding-box min-h-[80vh] flex items-center justify-center">
            <form
                onSubmit={handelRegistration}
                action={route('register_user')}
                method="post"
                className="p-5 max-w-[600px] w-full flex flex-col gap-4"
            >
                <div className="form-title text-center text-3xl">
                    Sign In
                </div>
                
                <div className="input-block input-user-info max-w-[600px] w-full">
                    <input
                        type="text"
                        placeholder="Email Address"
                        className="border-2 w-full p-1 outline-none rounded-sm"
                        onChange={(e) => setData('email', e.target.value)}
                        name="email"
                    />
                    {errors.email && <div className="text-red-600">{errors.email}</div>}
                </div>
                <div className="input-block input-user-info max-w-[600px] w-full">
                    <input
                        type="text"
                        placeholder="Password"
                        className="border-2 w-full p-1 outline-none rounded-sm"
                        onChange={(e) => setData('password', e.target.value)}
                        name="password"
                    />
                    {errors.password && <div className="text-red-600">{errors.password}</div>}
                </div>
                <div className="sign-in-redirect text-right">
                    <Link
                        href={route('sign_up_page')}
                        className="text-xs underline"
                    >
                        Don't Have An Account?
                    </Link>
                </div>
                <div className="submit-btn input-user-info max-w-[600px] w-full">
                    <button
                        className="w-full bg-yellow-300 text-black p-1 cursor-pointer rounded-sm"
                        disabled={processing}
                    >
                        Sign In
                    </button>
                </div>

                <div className="line">OR</div>

                <div className="auth-methods">
                    <ul className="flex flex-col gap-4">
                        <li
                            className="flex items-center w-full justify-center border-2 p-2 rounded-full cursor-pointer"
                        >
                            <FaGoogle /> Sign Up With Google
                        </li>
                        <li
                            className="flex items-center w-full justify-center border-2 p-2 rounded-full cursor-pointer"
                        >
                            <FaFacebookF /> Sign Up With Facebook
                        </li>
                    </ul>
                </div>

            </form>
        </div>
    )
}

export default SignIn