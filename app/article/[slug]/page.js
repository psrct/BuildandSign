import axios from 'axios';

export async function generateMetadata({ params }) {
  const slug = params.slug;

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`);
    const data = res.data.data;
    
    if (!data || data.length === 0) {
      return {
        title: 'ไม่พบบทความ | BuildandSign',
        robots: 'noindex, nofollow'
      };
    }

    const article = data[0];
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const canonicalUrl = `${baseUrl}/article/${article.slug}`;
    const pageTitle = `${article.title} | BuildandSign`;
    const pageDescription = article.summary || `อ่านบทความเรื่อง ${article.title} ในหมวดงานป้ายก่อสร้าง พร้อมความรู้และแนวทางที่เป็นประโยชน์`;

    return {
      title: pageTitle,
      description: pageDescription,
      keywords: `${article.title}, ป้ายก่อสร้าง, ป้ายโครงการ, ป้ายเตือน, ป้ายความปลอดภัย, งานป้าย`,
      authors: [{ name: 'BuildandSign' }],
      robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        type: 'article',
        siteName: 'BuildandSign',
        title: pageTitle,
        description: pageDescription,
        url: canonicalUrl,
        locale: 'th_TH',
        publishedTime: article.publishedAt,
        modifiedTime: article.updatedAt,
        authors: ['BuildandSign'],
        section: 'งานป้ายก่อสร้าง',
        ...(article.image?.[0] && {
          images: [
            {
              url: article.image[0].url,
              width: 1200,
              height: 630,
              alt: article.image[0].alternativeText || article.title,
            },
          ],
        }),
      },
      twitter: {
        card: 'summary_large_image',
        title: pageTitle,
        description: pageDescription,
        images: article.image?.[0] ? [article.image[0].url] : undefined,
      },
      other: {
        'article:published_time': article.publishedAt,
        'article:modified_time': article.updatedAt,
        'article:author': 'BuildandSign',
        'article:section': 'งานป้ายก่อสร้าง',
        'format-detection': 'telephone=no',
        'theme-color': '#1e40af',
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'ไม่พบบทความ | BuildandSign',
      robots: 'noindex, nofollow'
    };
  }
}

async function getArticle(slug) {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`);
    const data = res.data.data;
    return data;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

export default async function ArticleDetail({ params }) {
  const articles = await getArticle(params.slug);
  
  // Handle case where article is not found
  if (!articles || articles.length === 0) {
    return (
      <main className="w-full min-h-screen mx-auto px-10 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">ไม่พบบทความที่ค้นหา</h1>
          <p className="text-gray-600 mb-8">ขออภัย บทความที่คุณกำลังค้นหาไม่พบในระบบ</p>
          <a href="/articles" className="text-blue-600 hover:text-blue-800 underline">
            กลับไปดูบทความทั้งหมด
          </a>
        </div>
      </main>
    );
  }
  
  const article = articles[0];
  const baseUrl = process.env.NEXT_PUBLIC_API_URLL;
  const siteUrl = process.env.NEXT_PUBLIC_API_URL;
  const canonicalUrl = `${siteUrl}/article/${article.slug}`;
  
  // Generate structured data for article
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.summary || article.title,
    "url": canonicalUrl,
    "datePublished": article.publishedAt || article.createdAt,
    "dateModified": article.updatedAt,
    "author": {
      "@type": "Organization",
      "name": "BuildandSign",
      "url": siteUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "BuildandSign",
      "url": siteUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "articleSection": "งานป้ายก่อสร้าง",
    "keywords": ["ป้ายก่อสร้าง", "ป้ายโครงการ", "ป้ายเตือน", "ป้ายความปลอดภัย"],
    ...(article.image?.[0] && {
      "image": {
        "@type": "ImageObject",
        "url": `${baseUrl}${article.image[0].url}`,
        "width": 1200,
        "height": 630,
        "caption": article.image[0].alternativeText || article.title
      }
    })
  };

  // Generate breadcrumb structured data
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "หน้าแรก",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "บทความ",
        "item": `${siteUrl}/articles`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": canonicalUrl
      }
    ]
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`${article.title}, ป้ายก่อสร้าง, ป้ายโครงการ, ป้ายเตือน, ป้ายความปลอดภัย, งานป้าย`} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="BuildandSign" />
        <meta name="language" content="th" />
        <meta httpEquiv="content-language" content="th" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Article specific meta tags */}
        {article.publishedAt && (
          <meta name="article:published_time" content={article.publishedAt} />
        )}
        {article.updatedAt && (
          <meta name="article:modified_time" content={article.updatedAt} />
        )}
        <meta name="article:author" content="BuildandSign" />
        <meta name="article:section" content="งานป้ายก่อสร้าง" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="BuildandSign" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="th_TH" />
        {article.publishedAt && (
          <meta property="article:published_time" content={article.publishedAt} />
        )}
        {article.updatedAt && (
          <meta property="article:modified_time" content={article.updatedAt} />
        )}
        
        {/* Article image for Open Graph */}
        {article.image?.[0] && (
          <>
            <meta property="og:image" content={`${baseUrl}${article.image[0].url}`} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={article.image[0].alternativeText || article.title} />
            <meta property="og:image:type" content="image/jpeg" />
          </>
        )}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        {article.image?.[0] && (
          <meta name="twitter:image" content={`${baseUrl}${article.image[0].url}`} />
        )}

        {/* Additional SEO tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#1e40af" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
        />
      </Head>
      
      <main className="w-full min-h-screen mx-auto px-4 sm:px-6 lg:px-10 pt-30 pb-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav aria-label="breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <a href="/#home" className="hover:text-blue-600">หน้าแรก</a>
              </li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <a href="/#articles" className="hover:text-blue-600">บทความ</a>
              </li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-gray-900 font-medium">{article.title}</span>
              </li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 leading-tight">
              {article.title}
            </h1>
            
            {/* Article Meta Information */}
            <div className="flex flex-wrap items-center text-sm text-gray-600 mb-6">
              <span className="mr-4">โดย BuildandSign</span>
              {article.publishedAt && (
                <time dateTime={article.publishedAt} className="mr-4">
                  {new Date(article.publishedAt).toLocaleDateString('th-TH', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              )}
              {article.updatedAt && article.updatedAt !== article.publishedAt && (
                <span className="text-xs">
                  (อัปเดตล่าสุด: {new Date(article.updatedAt).toLocaleDateString('th-TH')})
                </span>
              )}
            </div>

            {/* Article Summary */}
            {article.summary && (
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <p className="text-black text-lg leading-relaxed">
                  {article.summary}
                </p>
              </div>
            )}
          </header>

          {/* Featured Image */}
          {article.image?.[0] && (
            <figure className="mb-8">
              <img
                src={`${baseUrl}${article.image[0].url}`}
                alt={article.image[0].alternativeText || `รูปประกอบบทความ ${article.title}`}
                className="w-full max-w-2xl mx-auto rounded-xl shadow-lg object-cover"
                width="800"
                height="450"
                loading="eager"
              />
              {article.image[0].caption && (
                <figcaption className="text-center text-sm text-gray-600 mt-2">
                  {article.image[0].caption}
                </figcaption>
              )}
            </figure>
          )}

          {/* Article Content */}
          <article className="text-black text-lg prose prose-lg max-w-none">
            {article.detail ? (
              <div dangerouslySetInnerHTML={{ __html: article.detail }} />
            ) : (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                <p className="text-black">เนื้อหาบทความกำลังจัดเตรียม กรุณาติดตามต่อไป</p>
              </div>
            )}
          </article>

          {/* Back to Articles */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <a 
              href="/#articles" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              ← กลับไปดูบทความทั้งหมด
            </a>
          </div>
        </div>
      </main>
    </>
  );
}