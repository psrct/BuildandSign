'use client';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Slabo_13px } from 'next/font/google';

const slabo = Slabo_13px({
  subsets: ['latin'],
  weight: '400',
})

const navigation = [
  { name: 'หน้าแรก', href: '/#home' },
  { name: 'ทำไมต้องเป็นเรา', href: '/#whyus' },
  { name: 'บริการของเรา', href: '/#service' },
  { name: 'ตัวอย่างผลงาน', href: '/#portfolio' },
  { name: 'บทความ', href: '/#articles' },
  { name: 'ติดต่อเรา', href: '/#contact' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header(){
  return (
    <>
      <header role="banner">
        <nav className='fixed top-0 right-0 left-0 z-[1000] shadow-lg' role="navigation">
          {/* Fast contact */}
          <div className="mx-auto max-w-full h-8 items-center sm:px-6 lg:px-8 bg-[#393E46] [@media(max-width:800px)]:hidden">
            <div className='pt-1 items-center flex px-5 text-white text-sm'>
              <img src="/door.svg" alt="" className="w-6 h-6 invert mr-2" />
              <span className='text-md'>เวลาทำการ 08:00 - 17:00 น. | Facebook: Buildandsign | Line: @buildandsign |</span>
              <img src="/phone.svg" alt="" className="w-4 h-4 invert ml-2 mr-1" />
              <span className='text-md'>: 0806976334</span>
            </div>
          </div>

          {/* Start Navbar */}
          <Disclosure as="nav" className="bg-[#065a95] backdrop-blur-sm">
          <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-14 items-center justify-between">

              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 items-center hidden [@media(max-width:900px)]:flex hover:scale-95 transition">
                <DisclosureButton 
                  className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-600 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">เปิดเมนูหลัก</span>
                  <Bars3Icon aria-hidden="true" className="block size-7 group-data-open:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden size-7 group-data-open:block" />
                </DisclosureButton>
              </div>
              
              <div className="flex flex-1 items-center justify-center [@media(min-width:900px)]:items-stretch [@media(min-width:900px)]:justify-between">
                {/* Company Logo/Name */}
                <div className="flex shrink-0 items-center">
                  <a 
                    href="/"
                    className={`text-2xl text-shadow-lg/30 px-7 text-white hover:text-yellow-200 transition-colors ${slabo.className}`}
                  >
                    BUILD & SIGN
                  </a>
                </div>

                <div className="hidden sm:ml-6 sm:block self-center">
                  <div className="hidden [@media(min-width:900px)]:flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          'text-white hover:bg-gray-600 hover:text-white',
                          'rounded-md px-3 py-2 text-lg font-medium hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600',
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Dropdown menu */}
          <DisclosurePanel className="xl:hidden bg-[#065a95]">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    'text-white hover:bg-gray-600 hover:text-white',
                    'block rounded-md px-3 py-2 text-md font-medium hover:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white',
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
      </nav>
      </header>
    </>
  )
}