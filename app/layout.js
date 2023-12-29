// components
import GuestNavbar from './components/GuestNavbar';

import './globals.css'

export const metadata = {
  title: 'Library Website with Next JS',
  description: 'My Library Website with Next JS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className="container mx-auto bg-gray-50">
            <GuestNavbar />
            {children}
        </body>
    </html>
  )
}
