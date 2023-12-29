import AuthNavbar from "../components/auth/AuthNavbar"

export default function LoginLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-zinc-900">
                <AuthNavbar />
                { children }
            </body>
        </html>
    )
}