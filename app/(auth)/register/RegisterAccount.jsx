import React, { useState } from "react";
import { useRouter } from "next/navigation";


export default function RegisterAccount() {
    const [isRegistered, setIsRegistered] = useState(false);
    const [error, setError] = useState(null);
    const apiUrl = process.env.API_URL;
    const router = useRouter();

    async function onSubmit(event) {
        event.preventDefault();
        setIsRegistered(true);
        setError(null);
    
        try {
            const formData = new FormData(event.currentTarget);
            const response = await fetch(`${apiUrl}/register`, {
                method: 'POST',
                body: formData,
            });
    
            if (!response.ok) {
                throw new Error('Failed to save data. Please try again...');
            }
    
            const data = await response.json();
            
            router.push('/admin/dashboard');
        } catch (error) {
            setError(error.message);
            console.error(error);
        } finally {
            setIsRegistered(false);
        }
    }
    
    return (
        <>
            <main className="py-16">
                <div className="min-h-screen flex justify-center items-center">
                    <div className="lg:w-2/5 md:w-1/2 w-full px-10 md:px-0 lg:px-0 py-2">
                        <form id="register-form" onSubmit={onSubmit} className="bg-gray-50 p-10 rounded-lg shadow-lg min-w-full" method="POST">
                            <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Create New Account</h1>
                            <div className="flex flex-col space-y-2">
                                <label className="text-gray-800 font-semibold block my-2 text-md" htmlFor="name">Fullname</label>
                                <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="name" id="name" placeholder="fullname" autoComplete="name" />
                                <p className="font-medium text-gray-400 text-[14px]">Note: input your fullname correctly</p>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label className="text-gray-800 font-semibold block my-2 text-md" htmlFor="email">Email</label>
                                <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="email" id="email" placeholder="@email" autoComplete="email" />
                                <p className="font-medium text-gray-400 text-[14px]">Note: input your email with verified email</p>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label className="text-gray-800 font-semibold block my-2 text-md" htmlFor="password">Password</label>
                                <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="password" name="password" id="password" placeholder="password" autoComplete="new-password" />
                                <p className="font-medium text-gray-400 text-[14px]">Note: input your password correctly</p>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label className="text-gray-800 font-semibold block my-2 text-md" htmlFor="password_confirmation">Confirm password</label>
                                <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="password" name="password_confirmation" id="password_confirmation" placeholder="confirm password" />
                                <p className="font-medium text-gray-400 text-[14px]">Note: confirm your password same as before</p>
                            </div>
                            <button type="submit" className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Register</button>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}