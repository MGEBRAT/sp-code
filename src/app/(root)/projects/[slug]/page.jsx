

import Banners from '@/components/Singles/Banner/Banners'
import Content from '@/components/Singles/Content/Content'
import Title from '@/components/Singles/Title/Title'
import React from 'react'

export default function singleProject({ params }) {
  return (
    <>
      <Banners getBanner={'/assets/img/projects/bp.jpeg'} />
      <Title>{params.slug}</Title>
      <Content getContent={'Привет, Мир! Я Олег! Привет, Мир! Я Олег! Привет, Мир! Я Олег! Привет, Мир! Я Олег!'} />
    </>
  )
}