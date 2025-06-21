import { FaFacebookF, FaLine } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3071b1] text-white py-8" role="contentinfo" aria-labelledby="footer-heading">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left items-start mb-6">
          
          {/* Company Info Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <Image 
                src="/icon0.svg" 
                alt="BuildandSign Logo - รับทำป้ายและงานก่อสร้าง" 
                width={240}
                height={80}
                className="w-60 h-auto"
                priority
              />
            </div>
            <p className="text-sm text-gray-200 max-w-xs leading-relaxed">
              ผู้เชี่ยวชาญด้านงานป้ายและงานก่อสร้าง ด้วยทีมช่างมืออาชีพ ประสบการณ์มากกว่า 10 ปี
            </p>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-3" aria-label="เมนูท้ายเว็บ">
            <h3 id="footer-nav" className="font-bold text-lg mb-4 text-yellow-200">
              เมนูหลัก
            </h3>
            <ul className="space-y-2" role="list">
              <li>
                <a 
                  href='/#home' 
                  className="font-medium text-base hover:text-yellow-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-blue-600 rounded px-1"
                  aria-label="ไปยังหน้าแรก"
                >
                  หน้าแรก
                </a>
              </li>
              <li>
                <a 
                  href='/#service' 
                  className="font-medium text-base hover:text-yellow-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-blue-600 rounded px-1"
                  aria-label="ดูบริการของเรา"
                >
                  บริการของเรา
                </a>
              </li>
              <li>
                <a 
                  href='/#portfolio' 
                  className="font-medium text-base hover:text-yellow-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-blue-600 rounded px-1"
                  aria-label="ดูผลงานของเรา"
                >
                  ตัวอย่างผลงาน
                </a>
              </li>
              <li>
                <a 
                  href='/#articles' 
                  className="font-medium text-base hover:text-yellow-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-blue-600 rounded px-1"
                  aria-label="อ่านบทความ"
                >
                  บทความ
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact Section */}
          <address className="not-italic">
            <h3 id="contact" className="font-bold text-lg mb-4 text-yellow-200">
              ติดต่อเรา
            </h3>
            <div className="space-y-3">
              <div className="flex justify-center md:justify-start items-center gap-3 group">
                <FaFacebookF 
                  className="text-xl group-hover:scale-110 transition-transform" 
                  aria-hidden="true" 
                />
                <a 
                  href="https://www.facebook.com/profile.php?id=61576667166263" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium hover:text-yellow-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-blue-600 rounded px-1"
                  aria-label="ติดตาม Facebook BuildandSign (เปิดในหน้าต่างใหม่)"
                >
                  Facebook: Buildandsign
                </a>
              </div>
              
              <div className="flex justify-center md:justify-start items-center gap-3 group">
                <FaLine 
                  className="text-xl group-hover:scale-110 transition-transform" 
                  aria-hidden="true" 
                />
                <a 
                  href="https://lin.ee/mWvzu1v" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium hover:text-yellow-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-blue-600 rounded px-1"
                  aria-label="ติดต่อผ่าน Line @buildandsign (เปิดในแอป Line)"
                >
                  Line: @buildandsign
                </a>
              </div>
              
              <div className="flex justify-center md:justify-start items-center gap-3 group">
                <MdPhone 
                  className="text-xl group-hover:scale-110 transition-transform" 
                  aria-hidden="true" 
                />
                <a 
                  href="tel:0806976334"
                  className="font-medium hover:text-yellow-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-blue-600 rounded px-1"
                  aria-label="โทรหาเรา 080-697-6334"
                >
                  Tel: 080-697-6334
                </a>
              </div>
              
              {/* Business Hours */}
              <div className="mt-4 pt-3 border-t border-[blue-500]">
                <p className="text-sm text-gray-200 flex justify-center md:justify-start items-center gap-2">
                  <span className="font-medium">เวลาทำการ:</span>
                  <time>เปิดทุกวัน 08:00 - 17:00 น.</time>
                </p>
              </div>
            </div>
          </address>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[blue-500] pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-200">
            <div className="text-center md:text-left">
              <p>
                &copy; 2025
                <span className="ml-1 font-medium">BuildandSign</span>
                <span className="ml-1">สงวนลิขสิทธิ์</span>
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                // href="/privacy-policy" 
                className="hover:text-yellow-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-blue-600 rounded px-1"
                aria-label="อ่านนโยบายความเป็นส่วนตัว"
              >
                นโยบายความเป็นส่วนตัว
              </a>
              <span className="text-gray-400">|</span>
              <a 
                // href="/terms-of-service" 
                className="hover:text-yellow-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-blue-600 rounded px-1"
                aria-label="อ่านข้อกำหนดการใช้งาน"
              >
                ข้อกำหนดการใช้งาน
              </a>
            </div>
          </div>
        </div>

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BuildandSign",
              "url": "https://buildandsign.com",
              "logo": "https://buildandsign.com/icon0.svg",
              "description": "ผู้เชี่ยวชาญด้านงานป้ายและงานก่อสร้าง ด้วยทีมช่างมืออาชีพ",
              "telephone": "+66-80-697-6334",
              "email": "buildandsign@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "TH"
              },
              "openingHours": "Mon-Sun 08:00-17:00",
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61576667166263",
                "https://lin.ee/mWvzu1v"
              ]
            })
          }}
        />
      </div>
    </footer>
  );
}