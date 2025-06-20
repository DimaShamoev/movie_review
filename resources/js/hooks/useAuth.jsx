import { usePage } from '@inertiajs/react';

export function useAuth() {

    const { auth } = usePage().props

    return {

        user: auth?.user,
        isAuth: !!auth?.user
        
    }

}