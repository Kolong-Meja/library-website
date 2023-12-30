import AdminNavbar from "@/app/components/AdminNavbar"
import AdminFooter from '@/app/components/AdminFooter';

export default function AdminLayout({ children }) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-zinc-900">
                <AdminNavbar />
                {children}
                <AdminFooter />
            </body>
        </html>
    )
}