import React from 'react'
import { Martini } from 'lucide-react'
import Link from 'next/link'
const Header = () => {
  return (
    <header className='w-full  py-4'>
        <div className="container mx-auto">
          <div className="w-full flex items-center justify-between">
            <div className="flex gap-2">
              <input className='px-4 py-2 rounded-md' type="text" placeholder='фембойчик...' />
              <button className='bg-stone-950 text-white rounded-md w-[40px] flex items-center justify-center'>
                <Martini size={18}/>
              </button>
            </div>
            <div className="flex gap-2 items-center">
            <Link href={''} className='text-stone-400 font-medium hover:text-blue-500'>Заняшится</Link>
              <Link href={''} className='px-4 py-2 rounded-md bg-stone-950 text-white font-medium  hover:bg-stone-800'>Няшится</Link>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header
