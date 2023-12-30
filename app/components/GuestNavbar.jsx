import Link from 'next/link';

export default function GuestNavbar() {
    return (
        <div className="navbar bg-transparent mx-auto px-10">
            <div className="flex-1">
                <Link href={"/"} className="btn btn-ghost text-xl">Library Website</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 font-semibold text-base">
                    <li className='text-gray-400 hover:text-gray-50'>
                        <Link href={"/login"}>Login</Link>
                    </li>
                    <li className='text-gray-400 hover:text-gray-50'>
                       <Link href={"/register"}>Register</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}