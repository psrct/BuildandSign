import "./globals.css";
import { IBM_Plex_Sans_Thai } from 'next/font/google';
import Header from "./_components/Header";
import SideContact from "./_components/SideContact";
import Footer from "./_components/Footer";
import { Slabo_13px } from 'next/font/google';

const slabo = Slabo_13px({
  subsets: ['latin'],
  weight: '400',
})

const ibm = IBM_Plex_Sans_Thai({
  subsets: ['thai'],
  weight: '400',
})

export const metadata = {
  title: 'รับทำป้าย ป้ายไฟ ป้ายอาคาร งานต่อเติม | BuildandSign',
  description: 'รับทำป้ายครบวงจร ป้ายโฆษณา ป้ายไฟ LED ป้ายอาคาร งานต่อเติม โกดัง หลังคา โครงหลังคา ที่จอดรถ ด้วยทีมช่างมืออาชีพ ราคาถูก คุณภาพดี',
  keywords: 'รับทำป้าย, ป้ายไฟ, ป้ายอาคาร, ป้ายโฆษณา, ป้าย LED, งานต่อเติม, โกดัง, หลังคา, ที่จอดรถ, ช่างป้าย, ราคาถูก',
  author: 'BuildandSign',
  robots: 'index, follow',
  openGraph: {
    title: 'รับทำป้าย ป้ายไฟ ป้ายอาคาร งานต่อเติม | BuildandSign',
    description: 'รับทำป้ายครบวงจร ป้ายโฆษณา ป้ายไฟ LED ป้ายอาคาร งานต่อเติม โกดัง หลังคา โครงหลังคา ที่จอดรถ ด้วยทีมช่างมืออาชีพ',
    url: 'https://buildandsign.com',
    siteName: 'BuildandSign',
    images: [
      {
        url: 'https://buildandsign.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BuildandSign - รับทำป้ายครบวงจร',
      },
    ],
    locale: 'th_TH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'รับทำป้าย ป้ายไฟ ป้ายอาคาร งานต่อเติม | BuildandSign',
    description: 'รับทำป้ายครบวงจร ป้ายโฆษณา ป้ายไฟ LED ป้ายอาคาร งานต่อเติม โกดัง หลังคา โครงหลังคา ที่จอดรถ',
    images: ['https://buildandsign.com/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://buildandsign.com',
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="บริการรับทำป้ายครบวงจร ป้ายไฟ LED ป้ายอาคาร ป้ายโฆษณา และงานต่อเติม โกดัง หลังคา ที่จอดรถ ด้วยทีมงานช่างมืออาชีพ ราคาถูก คุณภาพดี พร้อมบริการทั่วไทย" />
        <meta name="keywords" content="รับทำป้าย, ป้ายไฟ, ป้ายอาคาร, ป้ายโฆษณา, ป้าย LED, งานต่อเติม, โกดัง, หลังคา, ที่จอดรถ, ช่างป้าย, ราคาถูก, BuildandSign" />
        <meta name="author" content="BuildandSign" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="TH" />
        <meta name="geo.country" content="Thailand" />
        <meta name="geo.placename" content="Thailand" />
        
        {/* Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "BuildandSign",
              "description": "รับทำป้ายครบวงจร ป้ายไฟ LED ป้ายอาคาร งานต่อเติม โกดัง หลังคา",
              "url": "https://buildandsign.com",
              "telephone": "+66-XXX-XXX-XXX",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "TH",
                "addressRegion": "Thailand"
              },
              "openingHours": "Mo-Sa 08:00-18:00",
              "priceRange": "$$",
              "servesCuisine": [],
              "hasMenu": false,
              "acceptsReservations": true,
              "paymentAccepted": "Cash, Credit Card, Bank Transfer",
              "currenciesAccepted": "THB"
            })
          }}
        />
        
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "BuildandSign",
              "url": "https://buildandsign.com",
              "description": "รับทำป้ายครบวงจร ป้ายไฟ LED ป้ายอาคาร งานต่อเติม โกดัง หลังคา",
              "inLanguage": "th-TH",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://buildandsign.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        <link rel="canonical" href="https://buildandsign.com" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/ibm-plex-sans-thai.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
      </head>
      <body className={`${ibm.className} antialiased`}>
        {/* Skip to main content for accessibility */}
        <a href="#main-content" className="skip-link">
          ไปยังเนื้อหาหลัก
        </a>
        
        <Header />
        
        <main id="main-content" role="main">
          {children}
        </main>
        
        <SideContact />
        <Footer />
        
        {/* Google Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </body>
    </html>
  );
}