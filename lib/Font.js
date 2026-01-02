import { Montserrat } from 'next/font/google'

//? Uncomment the imports below to add custom fonts
// import localFont from 'next/font/local'

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

//Todo: Add more Google fonts here

//Todo: Add custom local fonts here
