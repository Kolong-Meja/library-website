import AdminNavbar from "@/app/components/AdminNavbar"

export default function AdminLayout({ children }) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-zinc-900">
                {/* Admin Navbar */}
                <AdminNavbar />
                
                {/* Main Section */}
                {children}
            </body>
        </html>
    )
}