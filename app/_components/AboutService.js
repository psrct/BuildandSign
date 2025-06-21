import axios from "axios"
import Link from "next/link"
import Image from "next/image"

const fetchData = async () => {
  try{
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/services?populate=*`)
    return response.data.data
  }catch(error){
    console.log('error', error)
    return []
  }
}

const fetchDatabuild = async () => {
  try{
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/buildings?populate=*`)
    return res.data.data
  }catch(error){
    console.log('error', error)
    return []
  }
}

export default async function AboutService(){
    const data = await fetchData();
    const builds = await fetchDatabuild();
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    return(
    <>
    <div className="h-auto w-full">
      {/* งานป้าย */}
      <div className="bg-[#3071b1] text-white px-10 py-10 scroll-mt-20" id="sign">
        <div className="max-w-6xl mx-auto flex flex-col">
          <h2 
            className="text-5xl md:text-6xl font-bold text-shadow-md text-shadow-black mb-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            งานป้าย
          </h2>
          <p 
            className="text-lg sm:text-xl leading-relaxed font-medium mb-10"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            เราให้บริการ ทั้งสำรวจหน้างานออกแบบ ผลิตและติดตั้งงาน
            <span className="text-yellow-200 font-medium">
              " ป้ายอาคาร ป้ายไฟ ป้ายล้อเลื่อน งานโครงการ งานป้ายภายในและภายนอกอาคาร"
            </span>
            ด้วยวัสดุที่ได้มาตรฐานช่วยให้งานออกมาและคงทนโดยทีมงานมืออาชีพในทุกสัดส่วนที่ช่วยดูแลคุณอย่างเต็มที่เพื่อให้งานออกมาสวยงามเหนือความต้องการของลูกค้า
          </p>

          {/* Card Section */}
          <div 
            className="px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
              {data.map((service, index) => (
                <Link
                  href={`/service/${service.slug || service.id}`}
                  key={service.id}
                  className="bg-white rounded-xl shadow-md border border-gray-200 hover:scale-108 transition-transform duration-300 overflow-hidden flex flex-col group relative"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-delay={index * 100}
                >
                  {/* รูปภาพเต็มกรอบด้านบน */}
                  <div className="w-full h-40 overflow-hidden">
                    <img
                      src={`${baseUrl + service.image.url}`}
                      alt={service.image.alternativeText + service.title + service.detail}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Title ด้านล่าง */}
                  <div className="p-4 text-center flex-grow flex items-center justify-center">
                    <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#065a95] transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Hover overlay for "ดูเพิ่มเติม" */}
                  <div className="absolute inset-0 bg-[#3071b1] bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-[#3071b1] text-white px-4 py-2 rounded-full text-sm font-medium">
                      ดูเพิ่มเติม
                    </span>
                  </div>
                </Link>
              ))}
            </div>
        </div>
      </div>

        </div>
    {/* งานก่อสร้าง */}
    <div className="h-auto w-full bg-[#393E46] scroll-mt-20" id="build">
          <div className="text-white px-10 py-10 flex flex-col items-start max-w-6xl mx-auto">
              <h2 
                className="text-5xl md:text-6xl font-bold mb-6 text-shadow-md text-shadow-black"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                งานก่อสร้าง
              </h2>
              <p 
                className="text-lg sm:text-xl leading-relaxed font-medium"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                เราให้บริการ ทั้งสำรวจหน้างานออกแบบ ผลิตและติดตั้งงาน
                <span className="text-yellow-200 font-medium">
                  " เขียนแบบทุกชนิด ประเมินราคา BOQ ออกแบบและขึ้นแบบ 3D งานสร้าง โกดัง หลังคา ที่จอดรถ"
                </span>
                โดยทีมงานวิศวกร 100% ในการควบคุมการก่อสร้าง เพื่อให้ได้มาตรฐานการก่อสร้าง และความปลอดภัยในการใช้งาน
              </p>
          </div>

          {/* บริการ */}
          <div 
            className="px-10 py-5 flex justify-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
              {builds.map((building, index) => (
                <Link
                  key={building.id}
                  href={`/building/${building.slug || building.id}`}
                  className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-xl shadow-md p-4 hover:scale-108 transition-transform duration-300 group"
                  data-aos="flip-up"
                  data-aos-duration="800"
                  data-aos-delay={index * 100}
                >
                  <div className="w-[100px] h-[100px] flex items-center justify-center max-sm:w-[100px] max-sm:h-[100px] overflow-hidden rounded-xl">
                    <img
                      src={`${baseUrl + building.image.url}`}
                      alt={building.image.alternativeText + building.title + building.detail}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-[#3071b1] transition-colors">
                    {building.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "บริการงานป้ายและงานก่อสร้าง",
            "description": "รับทำป้ายครบวงจร ป้ายไฟ LED ป้ายอาคาร และงานก่อสร้าง โกดัง หลังคา ที่จอดรถ",
            "provider": {
              "@type": "LocalBusiness",
              "name": "BuildandSign",
              "url": "https://buildandsign.com"
            },
            "serviceType": ["ป้ายไฟ LED", "ป้ายอาคาร", "ป้ายโฆษณา", "งานก่อสร้าง", "โกดัง", "หลังคา", "ที่จอดรถ"],
            "areaServed": {
              "@type": "Country",
              "name": "Thailand"
            }
          })
        }}
      />
    </> 
    )
}