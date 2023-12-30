import Link from 'next/link';

export default function AdminNavbar() {
    return (
        <div className="navbar bg-transparent mx-auto px-10">
            <div className="flex-1">
                <Link href={"/admin/dashboard"} className="btn btn-ghost text-xl">Library Website Dashboard</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 font-semibold text-base">
                    <li className='text-gray-400 hover:text-gray-50'>
                        Welcome Back!
                    </li>
                </ul>
            </div>
        </div>
    )
}