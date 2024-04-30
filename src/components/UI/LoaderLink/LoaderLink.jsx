"use client"
import Link from 'next/link'
import React, {useState} from 'react'
import Loader from '../Loader/Loader';
import { useRouter } from 'next/navigation';

const LoaderLink = ({ href }) => {
  const [isLoader, setIsLoader] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    setIsLoader(true);
    //window.Location.href = href;
    router.push(href);
  };
  return (
    <Link onClick={handleClick} href={href} className='text-blue-500 hover:underline transition-all duration-300'>
      {isLoader ?<>смотреть Подробнее <Loader /> </>  : 'вылечить гонорею'}
    </Link>
  )
}

export default LoaderLink
