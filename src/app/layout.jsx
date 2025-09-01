import "./globals.css";
import { Roboto } from 'next/font/google'
import { Racing_Sans_One } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto'
})

const racingsansone = Racing_Sans_One({
  subsets: ['latin'],
  variable: '--font-racing-sans-one',
  weight: "400"
})


export const metadata = {
  title: {
    template: "%s | Landrup Dans",
    default: "Landrup Dans",
  },
  description: "Den bedste danse app du kender",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da" className ={`${roboto.variable} ${racingsansone.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
