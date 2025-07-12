import ImageSlider from './ImageSlider';
import { FaPhoneAlt, FaLine, FaFacebookF } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="mx-auto max-w-full h-full relative justify-center items-center mt-60 mb-20 [@media(max-width:800px)]:mt-20 scroll-mt-60" id='home'>
      <div className='justify-center [@media(min-width:1000px)]:flex '>
        <div 
          className='px-5 pb-10 justify-self-center max-sm:h-auto'
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <ImageSlider />
        </div>
        <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <h1 
              className="text-[#0101bd] text-5xl lg:text-6xl justify-self-center justify-center item-center font-extrabold"
              id="head"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              บิลด์แอนด์ไซน์ จำกัด
            </h1>
            <div 
              className="flex justify-center items-center text-3xl md:text-4xl font-bold pt-2"
              id="head2"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
                <span className="text-[#0080FF] px-1">"งานป้าย"</span>
                <span className="text-black px-1">และ</span>
                <span className="text-[#0080FF] px-1">"งานก่อสร้าง"</span>
                <span className="text-black px-1">ครบวงจร</span>
            </div>

            <div 
              className="flex justify-center items-center text-black font-medium pt-5 px-5"
              id="paragram"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="800"
            >
                <p className="justify-center items-center w-[600px] lg:w-[800px] text-md lg:text-xl">
                  <span className="pl-10">เราคือผู้เชี่ยวชาญด้านการสำรวจ</span> หน้างานออกแบบ ผลิตและติดตั้งงาน ป้ายอาคารสูง ป้ายไฟ ป้ายล้อเลื่อน งานโครงการ งานป้ายภายในและภายนอกอาคาร อีกทั้งยังบริการ เขียนแบบทุกขนาด ประเมินราคา BOQ สร้างอาคาร งานก่อสร้างครบวงจร รับออกแบบและขึ้นแบบ3D งานก่อสร้าง สร้างโกดัง สร้างหลังคา สร้างที่จอดรถ ด้วยวัสดุที่ได้มาตรฐานช่วยให้งาน ออกมาสวยงามและคงทน
                โดยทีมงานมืออาชีพในทุกสัดส่วนที่ช่วยดูแลคุณอย่างเต็มที่เพื่อให้งานออกมาสวยงาม เหนือความต้องการของลูกค้า
                </p>
            </div>
            
            <div 
              className='flex items-center justify-center gap-5 pt-5'
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="1000"
            >
              <a href='#sign' className="flex items-center justify-center bg-[#0101bd] rounded-xl px-15 py-2 shadow-lg hover:scale-110 transition" id='btnhead'>
                <p className="text-2xl font-bold text-white">งานป้าย</p>
              </a>

              <a href='#build' className="flex items-center justify-center bg-gray-800 rounded-xl px-15 py-2 shadow-lg hover:scale-110 transition" id='btnhead'>
                <p className="text-2xl text-white font-bold">งานก่อสร้าง</p>
              </a> 
            </div>
        </div>
      </div>

      <div 
        className="flex justify-self-center justify-center items-center  gap-6 p-5 max-sm:block mx-13 mt-5"
        id="contact1"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="1200"
      >
          {/* Phone */}
          <a 
            href="tel:0806976334"
            className="max-sm:my-3 flex items-center gap-2 bg-gray-700 rounded-full px-3 py-2 shadow-lg hover:scale-110 transition"
            data-aos="slide-right"
            data-aos-duration="800"
            data-aos-delay="1400"
          >
              <div className="bg-black text-white p-2 rounded-full">
                  <FaPhoneAlt className="text-2xl" />
              </div>
              <span className="text-xl text-white font-bold" id="textlg">080-697-6334</span>
          </a>

          {/* LINE */}
          <a 
            href="https://lin.ee/mWvzu1v"
            target="_blank"
            rel="noopener noreferrer"
            className="max-sm:my-3 flex items-center gap-2 bg-green-500 rounded-full px-3 py-2 shadow-lg hover:scale-110 transition"
            data-aos="slide-up"
            data-aos-duration="800"
            data-aos-delay="1600"
          >
              <div className="bg-white text-green-500 p-2 rounded-full">
                  <FaLine className="text-2xl" />
              </div>
              <span className="text-xl text-white font-bold" id="textlg">@buildandsign</span>
          </a>

          {/* Messenger */}
          <a 
            href="https://www.facebook.com/profile.php?id=61576667166263"
            target="_blank"
            rel="noopener noreferrer"
            className="max-sm:my-3 flex items-center gap-2 bg-blue-500 rounded-full px-3 py-2 shadow-lg hover:scale-110 transition"
            data-aos="slide-left"
            data-aos-duration="800"
            data-aos-delay="1800"
          >
              <div className="bg-white text-blue-500 p-2 rounded-full">
                  <FaFacebookF className="text-2xl" />
              </div>
              <span className="text-xl text-white font-bold" id="textlg">Buildandsign</span>
          </a>
      </div>
      
    </main>
  );
}