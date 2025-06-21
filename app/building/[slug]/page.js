import Image from "next/image"
import axios from "axios"
import { notFound } from 'next/navigation'
import Link from "next/link"

const fetchBuildingBySlug = async (slug) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/buildings?filters[slug][$eq]=${slug}&populate=*`
    )
    return response.data.data[0] || null
  } catch (error) {
    console.log('error', error)
    return null
  }
}

const fetchAllBuildings = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/buildings?populate=*`)
    return response.data.data
  } catch (error) {
    console.log('error', error)
    return []
  }
}

export default async function BuildingDetailPage({ params }) {
  const { slug } = params
  const building = await fetchBuildingBySlug(slug)
  const allBuildings = await fetchAllBuildings()
  
  if (!building) {
    notFound()
  }

  const baseUrl = process.env.NEXT_PUBLIC_API_URL
  const relatedBuildings = allBuildings.filter(b => b.id !== building.id).slice(0, 4)

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-96 bg-[#393E46] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={`${baseUrl}${building.image.url}`}
              alt={building.image.alternativeText || building.title}
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="relative z-10 flex items-center justify-center h-full px-4">
            <div className="text-center text-white max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-md text-shadow-black">
                {building.title}
              </h1>
              <p className="text-lg md:text-xl font-medium">
                {building.description || 'งานก่อสร้างคุณภาพสูงโดยทีมวิศวกรมืออาชีพ'}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Content Area */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">รายละเอียดงานก่อสร้าง</h2>
                
                {/* Building Image */}
                <div className="mb-8">
                  <Image
                    src={`${baseUrl}${building.image.url}`}
                    alt={building.image.alternativeText || building.title}
                    width={800}
                    height={400}
                    className="w-full h-96 object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Building Details */}
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {building.detail || 'เราให้บริการงานก่อสร้างด้วยคุณภาพสูงและมาตรฐานความปลอดภัย โดยทีมวิศวกรมืออาชีพที่มีประสบการณ์'}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">จุดเด่นของงาน</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">ควบคุมงานโดยวิศวกร 100%</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">วัสดุก่อสร้างคุณภาพสูง</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">มาตรฐานความปลอดภัย</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">รับประกันคุณภาพงาน</span>
                      </div>
                    </div>
                  </div>

                  {/* Construction Process */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">ขั้นตอนการก่อสร้าง</h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#393E46] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">1</div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">สำรวจและวิเคราะห์พื้นที่</h4>
                          <p className="text-gray-600">ประเมินสภาพพื้นที่ วิเคราะห์ดิน และวางแผนการก่อสร้าง</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#393E46] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">2</div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">เขียนแบบและ BOQ</h4>
                          <p className="text-gray-600">ออกแบบรายละเอียด สร้างแบบ 3D และประเมินราคาที่แม่นยำ</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#393E46] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">3</div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">เริ่มงานก่อสร้าง</h4>
                          <p className="text-gray-600">ดำเนินการก่อสร้างตามแบบด้วยวัสดุคุณภาพสูง</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#393E46] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">4</div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">ตรวจสอบและส่งมอบ</h4>
                          <p className="text-gray-600">ตรวจสอบคุณภาพงาน ทดสอบความแข็งแรง และส่งมอบงาน</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Technical Specifications */}
                  {building.specifications && (
                    <div className="mb-8">
                      <h3 className="text-2xl font-semibold text-gray-800 mb-4">ข้อมูลทางเทคนิค</h3>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <p className="text-gray-700">{building.specifications}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Materials Section */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">วัสดุที่ใช้ในงาน</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl mb-2">🏗️</div>
                    <h4 className="font-semibold text-gray-800 mb-2">โครงสร้างเหล็ก</h4>
                    <p className="text-sm text-gray-600">เหล็กคุณภาพสูง ทนทาน แข็งแรง</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl mb-2">🧱</div>
                    <h4 className="font-semibold text-gray-800 mb-2">วัสดุมุงหลังคา</h4>
                    <p className="text-sm text-gray-600">กันสนิม กันน้ำ ใช้งานทนนาน</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl mb-2">🔧</div>
                    <h4 className="font-semibold text-gray-800 mb-2">อุปกรณ์ติดตั้ง</h4>
                    <p className="text-sm text-gray-600">อุปกรณ์มาตรฐาน ติดตั้งแน่นหนา</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">สนใจงานก่อสร้าง?</h3>
                <p className="text-gray-600 mb-6">ติดต่อเราเพื่อรับคำปรึกษาและใบเสนอราคาฟรี</p>
                
                <div className="space-y-4">
                  <a
                    href="tel:0806976334"
                    className="block w-full bg-gray-800 text-white text-center py-3 px-4 rounded-lg hover:bg-gray-900 transition-colors font-medium"
                  >
                    📞 โทรเลย
                  </a>
                  
                  <a
                    href="https://lin.ee/mWvzu1v"
                    target="blank"
                    className="block w-full bg-green-500 text-white text-center py-3 px-4 rounded-lg hover:bg-green-600 transition-colors font-medium"
                  >
                    💬 Line
                  </a>
                  
                  <a
                    href="https://www.facebook.com/profile.php?id=61576667166263"
                    target="blank"
                    className="block w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    📧 ทักแชท
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-3">บริการที่รวมอยู่</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      สำรวจหน้างานฟรี
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      เขียนแบบ 3D
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      ประเมินราคา BOQ
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      รับประกันงาน
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">ข้อมูลติดต่อ</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>📱 โทร: 080-697-6334</p>
                    <p>📧 Email: buildandsign@gmail.com</p>
                    <p>🕒 เวลาทำการ: จ-ส 8:00-17:00</p>
                    <p>📍 พื้นที่บริการ: ทั่วประเทศไทย</p>
                  </div>
                </div>
              </div>

              {/* Related Buildings */}
              {relatedBuildings.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">งานก่อสร้างอื่นๆ</h3>
                  <div className="space-y-4">
                    {relatedBuildings.map((relatedBuilding) => (
                      <Link
                        key={relatedBuilding.id}
                        href={`/building/${relatedBuilding.slug || relatedBuilding.id}`}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <Image
                          src={`${baseUrl}${relatedBuilding.image.url}`}
                          alt={relatedBuilding.title}
                          width={60}
                          height={60}
                          className="w-15 h-15 object-cover rounded-lg"
                        />
                        <div>
                          <h4 className="font-medium text-gray-800 text-sm">{relatedBuilding.title}</h4>
                          <p className="text-xs text-gray-500 line-clamp-2">
                            {relatedBuilding.detail?.substring(0, 60) || 'งานก่อสร้างคุณภาพสูง'}...
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <Link
                      href="/#build"
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      ดูงานทั้งหมด →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": building.title,
            "description": building.detail || building.title,
            "image": `${baseUrl}${building.image.url}`,
            "provider": {
              "@type": "LocalBusiness",
              "name": "BuildandSign",
              "url": "https://buildandsign.com"
            },
            "serviceType": "Construction",
            "areaServed": {
              "@type": "Country",
              "name": "Thailand"
            },
            "url": `https://buildandsign.com/building/${building.slug || building.id}`
          })
        }}
      />
    </>
  )
}