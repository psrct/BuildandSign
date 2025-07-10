import "./globals.css";
import Header from "./_components/Header";
import SideContact from "./_components/SideContact";
import Footer from "./_components/Footer";
import { Slabo_13px } from 'next/font/google';
import Script from 'next/script';

const slabo = Slabo_13px({
  subsets: ['latin'],
  weight: '400',
})

export const metadata = {
  title: 'BuildandSign | รับทำป้าย ป้ายไฟ ป้ายอาคาร งานก่อสร้างครบวงจร งานเทพี้น งานต่อเติม',
  description: 'รับทำป้ายครบวงจร ป้ายโฆษณา ป้ายไฟ LED ป้ายอาคาร งานก่อสร้างครบวงจร งานเทพี้น งานต่อเติม โกดัง หลังคา โครงหลังคา ที่จอดรถ ด้วยทีมช่างมืออาชีพ ราคาถูก คุณภาพดี',
  keywords: 'รับทำป้าย, ป้ายไฟ, ป้ายอาคาร, ป้ายโฆษณา, ป้าย LED, งานก่อสร้างครบวงจร, งานเทพี้น, งานต่อเติม, โกดัง, หลังคา, ที่จอดรถ, ช่างป้าย, ราคาถูก',
  author: 'BuildandSign',
  robots: 'index, follow',
  openGraph: {
    title: 'BuildandSign | รับทำป้าย ป้ายไฟ ป้ายอาคาร งานก่อสร้างครบวงจร งานเทพี้น งานต่อเติม',
    description: 'รับทำป้ายครบวงจร ป้ายโฆษณา ป้ายไฟ LED ป้ายอาคาร งานก่อสร้างครบวงจร งานเทพี้น งานต่อเติม โกดัง หลังคา โครงหลังคา ที่จอดรถ ด้วยทีมช่างมืออาชีพ',
    url: 'https://buildandsign.com',
    siteName: 'BuildandSign',
    images: [
      {
        url: 'https://buildandsign.vercel.app/poster.jpg',
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
    title: 'BuildandSign | รับทำป้าย ป้ายไฟ ป้ายอาคาร งานก่อสร้างครบวงจร งานเทพี้น งานต่อเติม',
    description: 'รับทำป้ายครบวงจร ป้ายโฆษณา ป้ายไฟ LED ป้ายอาคาร งานก่อสร้างครบวงจร งานเทพี้น งานต่อเติม โกดัง หลังคา โครงหลังคา ที่จอดรถ',
    images: ['https://buildandsign.vercel.app/poster.jpg'],
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
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TBGJDDQH');
        `}
      </Script>
        {/*  End Google Tag Manager */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="บริการรับทำป้ายครบวงจร ป้ายไฟ LED ป้ายอาคาร ป้ายโฆษณา และงานก่อสร้างครบวงจร งานเทพี้น งานต่อเติม โกดัง หลังคา ที่จอดรถ ด้วยทีมงานช่างมืออาชีพ ราคาถูก คุณภาพดี พร้อมบริการทั่วไทย" />
        <meta name="keywords" content="รับทำป้าย, ป้ายไฟ, ป้ายอาคาร, ป้ายโฆษณา, ป้าย LED, งานก่อสร้างครบวงจร งานเทพี้น งานต่อเติม, โกดัง, หลังคา, ที่จอดรถ, ช่างป้าย, ราคาถูก, BuildandSign" />
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
              "description": "รับทำป้ายครบวงจร ป้ายไฟ LED ป้ายอาคาร งานก่อสร้างครบวงจร งานเทพี้น งานต่อเติม โกดัง หลังคา",
              "url": "https://buildandsign.com",
              "telephone": "080-697-6334",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "TH",
                "addressRegion": "Thailand"
              },
              "openingHours": "Everyday 08:00-17:00",
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
              "description": "รับทำป้ายครบวงจร ป้ายไฟ LED ป้ายอาคาร งานก่อสร้างครบวงจร งานเทพี้น งานต่อเติม โกดัง หลังคา",
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
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TBGJDDQH"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

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