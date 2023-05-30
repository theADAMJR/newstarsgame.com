import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'New Stars - Galactic 4X Grand Strategy Game',
  description: 'Expand your own galactic empire across new stars, advance technologies, and challenge great alien powers in this immersive 4X grand strategy game. Build sci-fi colonies, and starbases to gather scarce resources. Explore a unique galaxy full of secrets, great perils, and infinite possibilities.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="stylesheet" href="/css/index.css" />
        <link rel="stylesheet" href="/css/footer.css" />
        <link rel="shortcut icon" href="/star-satellites.svg" type="image/x-icon" />
        <script src="/js/index.js" defer />

        {/* Primary Meta Tags */}
        <title>New Stars - Galactic 4X Grand Strategy Game</title>
        <meta name="title" content="New Stars - Galactic 4X Grand Strategy Game" />
        <meta name="description" content="Expand your own galactic empire across new stars, advance technologies, and challenge great alien powers in this immersive 4X grand strategy game. Build sci-fi colonies, and starbases to gather scarce resources. Explore a unique galaxy full of secrets, great perils, and infinite possibilities." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="New Stars - Galactic 4X Grand Strategy Game" />
        <meta property="og:description" content="Expand your own galactic empire across new stars, advance technologies, and challenge great alien powers in this immersive 4X grand strategy game. Build sci-fi colonies, and starbases to gather scarce resources. Explore a unique galaxy full of secrets, great perils, and infinite possibilities." />
        <meta property="og:image" content="https://github.com/theADAMJR/newstarsgame.com/raw/main/public/front-page.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="New Stars - Galactic 4X Grand Strategy Game" />
        <meta property="twitter:description" content="Expand your own galactic empire across new stars, advance technologies, and challenge great alien powers in this immersive 4X grand strategy game. Build sci-fi colonies, and starbases to gather scarce resources. Explore a unique galaxy full of secrets, great perils, and infinite possibilities." />
        <meta property="twitter:image" content="https://github.com/theADAMJR/newstarsgame.com/raw/main/public/front-page.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
