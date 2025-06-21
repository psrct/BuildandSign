import Image from "next/image"
import axios from "axios"
import { notFound } from 'next/navigation'

const fetchServiceBySlug = async (slug) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/services?filters[slug][$eq]=${slug}&populate=*`
    )
    return response.data.data[0] || null
  } catch (error) {
    console.log('error', error)
    return null
  }
}

const fetchAllServices = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/services?populate=*`)
    return response.data.data
  } catch (error) {
    console.log('error', error)
    return []
  }
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = params
  const service = await fetchServiceBySlug(slug)
  const allServices = await fetchAllServices()
  
  if (!service) {
    notFound()
  }

  const baseUrl = process.env.NEXT_PUBLIC_API_URL
  const relatedServices = allServices.filter(s => s.id !== service.id).slice(0, 4)

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-96 bg-[#3071b1] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={`${baseUrl}${service.image.url}`}
              alt={service.image.alternativeText || service.title}
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="relative z-10 flex items-center justify-center h-full px-4">
            <div className="text-center text-white max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-md text-shadow-black">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl font-medium">
                {service.description || 'บริการคุณภาพสูงจากผู้เชี่ยวชาญ'}
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
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">รายละเอียดบริการ</h2>
                
                {/* Service Image */}
                <div className="mb-8">
                  <Image
                    src={`${baseUrl}${service.image.url}`}
                    alt={service.image.alternativeText || service.title}
                    width={800}
                    height={400}
                    className="w-full h-96 object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Service Details */}
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {service.detail || 'เราให้บริการด้วยคุณภาพสูงและความเชี่ยวชาญจากทีมงานมืออาชีพ'}
                  </p>
                  
                  {service.features && (
                    <div className="mb-8">
                      <h3 className="text-2xl font-semibold text-gray-800 mb-4">จุดเด่นของบริการ</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#3071b1] mr-2">✓</span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {service.specifications && (
                    <div className="mb-8">
                      <h3 className="text-2xl font-semibold text-gray-800 mb-4">รายละเอียดเทคนิค</h3>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <p className="text-gray-700">{service.specifications}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Process Section */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">ขั้นตอนการทำงาน</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#3071b1] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">สำรวจหน้างาน</h4>
                      <p className="text-gray-600 text-sm">ประเมินและวางแผนการทำงาน</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#3071b1] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">ออกแบบ</h4>
                      <p className="text-gray-600 text-sm">สร้างแบบตามความต้องการ</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#3071b1] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">ผลิต</h4>
                      <p className="text-gray-600 text-sm">ผลิตด้วยวัสดุคุณภาพ</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#3071b1] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">ติดตั้ง</h4>
                      <p className="text-gray-600 text-sm">ติดตั้งโดยช่างมืออาชีพ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">สนใจบริการนี้?</h3>
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
                    className="block w-full bg-[#3071b1] text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    📧 ทักแชท
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">ข้อมูลติดต่อ</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>📱 โทร: 080-697-6334 / </p>
                    <p>📧 Email: buildandsign@gmail.com</p>
                    <p>🕒 เวลาทำการ: เปิดทุกวัน 8:00-17:00</p>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">บริการอื่นๆ</h3>
                  <div className="space-y-4">
                    {relatedServices.map((relatedService) => (
                      <a
                        key={relatedService.id}
                        href={`/service/${relatedService.slug}`}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Image
                          src={`${baseUrl}${relatedService.image.url}`}
                          alt={relatedService.title}
                          width={60}
                          height={60}
                          className="w-15 h-15 object-cover rounded-lg"
                        />
                        <div>
                          <h4 className="font-medium text-gray-800 text-sm">{relatedService.title}</h4>
                          <p className="text-xs text-gray-500 line-clamp-2">
                            {relatedService.detail?.substring(0, 60) || 'บริการคุณภาพจากผู้เชี่ยวชาญ'}...
                          </p>
                        </div>
                      </a>
                    ))}
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
            "name": service.title,
            "description": service.detail || service.title,
            "image": `${baseUrl}${service.image.url}`,
            "provider": {
              "@type": "LocalBusiness",
              "name": "BuildandSign",
              "url": "https://buildandsign.com"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Thailand"
            },
            "url": `https://buildandsign.com/service/${service.slug}`
          })
        }}
      />
    </>
  )
}