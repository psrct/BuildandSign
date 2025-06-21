// app/service/[slug]/not-found.js หรือ app/building/[slug]/not-found.js
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          ไม่พบหน้าที่คุณต้องการ
        </h2>
        
        <p className="text-gray-600 mb-8">
          ขออภัย เราไม่พบบริการหรือข้อมูลที่คุณกำลังมองหา
          อาจเป็นเพราะลิงค์ผิดพลาดหรือหน้านี้ถูกย้าย
        </p>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            กลับหน้าแรก
          </Link>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ดูบริการทั้งหมด
            </Link>
            <span className="hidden sm:block text-gray-300">|</span>
            <Link
              href="/contact"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ติดต่อเรา
            </Link>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-3">บริการยอดนิยม</h3>
          <div className="space-y-2 text-sm">
            <Link href="/service/sign-led" className="block text-blue-600 hover:text-blue-700">
              ป้ายไฟ LED
            </Link>
            <Link href="/service/building-sign" className="block text-blue-600 hover:text-blue-700">
              ป้ายอาคาร
            </Link>
            <Link href="/building/warehouse" className="block text-blue-600 hover:text-blue-700">
              โกดัง
            </Link>
            <Link href="/building/parking" className="block text-blue-600 hover:text-blue-700">
              ที่จอดรถ
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
