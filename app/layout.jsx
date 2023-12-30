import './globals.css'

export const metadata = {
  title: 'Library Website',
  description: 'My Library Website',
}

export default function GuestLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-zinc-900'>
        {children}
      </body>
    </html>
  )
}