import { usePage } from '@inertiajs/react';

const Home = () => {

    const { auth } = usePage().props;
    const user = auth.user;

    return (
        <div className="home container padding-box">
            <h1>
                home
            </h1>
            <p>{ user?.email }</p>
        </div>
    )
}

export default Home