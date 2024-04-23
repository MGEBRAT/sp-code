
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const SidebarProject = ({getProject, className = null}) => {
  return (
    <div className={className = ' w-full bg-white rounded-lg p-4 '}>
        <div className="w-full mb-4 aspect-square rounded-lg relative">
            <Image fill loading='lazy' alt='картиночка крутая почти как аниме!!!!!' src={'/assets/img/projects/bp.jpeg'} className='w-full h-full object-cover object-center' />
        </div>
        <h3 className="text-xl text-stone-900"> лучшая девочка на диком западе!</h3>
        <ul className="w-full inline-flex gap-2">
            {[1,2,3,4,5,6,7].map((item, index) => {
                return (
                    <li key={index} className='text-sm text-stone-500'>#JS</li>
                );
            })}
        </ul>
        <Link href={''} className='w-full py-3 rounded-lg bg-blue-500 text-white font-medium block text-center'>Перейти!!</Link>
    </div>
  )
}

export default SidebarProject