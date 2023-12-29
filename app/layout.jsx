
// components
import GuestNavbar from './components/GuestNavbar';

// stylesheets
import './globals.css'

export const metadata = {
  title: 'Library Website with Next JS',
  description: 'My Library Website with Next JS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-zinc-900'>
          <GuestNavbar />
          {children}
      </body>
    </html>
  )
}
