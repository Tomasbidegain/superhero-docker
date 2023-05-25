import './globals.css'
import 'keen-slider/keen-slider.min.css';
import { Navigation } from '../components/Navigation';

export const metadata = {
  title: 'Super Heroes',
  description: 'Podras ver todos los personajes de Marvel y DC',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
