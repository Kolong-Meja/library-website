import './globals.css'

const metaTitle = process.env.APP_NAME;
const metaDescription = process.env.APP_DESC;

export const metadata = {
  title: metaTitle,
  description: metaDescription,
}

export default function GuestLayout({ children }) {
  return (
    <html lang="en">
      <body className='min-h-screen bg-zinc-900'>
        {/* Main Section */}
        {children}
      </body>
    </html>
  )
}