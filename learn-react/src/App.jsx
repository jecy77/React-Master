// import { useState } from 'react'
// import Header from './components/Header'
// import Main from './components/Main'
// import Footer from './components/Footer'
import './App.css'
import CourseForm from './components/course/CourseForm'
import CourseListCard from './components/course/CourseListCard'


const items = [
  {
    id: 0,
    title: '입문자를 위한, HTML&CSS 웹 개발 입문',
    description: '웹 개발에 필요한 기본 지식을 배웁니다.',
    thumbnail: '/img/htmlcss.png',
    isFavorite: false,
  },
  {
    id: 1,
    title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
    description: '쉽고! 알찬! 내용을 준비했습니다.',
    thumbnail: '/img/js.png',
    isFavorite: true,
    link: 'https://inf.run/Kpnd'
  },
  {
    id: 2,
    title: '포트폴리오 사이트 만들고 배포까지!',
    description: '포트폴리오 사이트를 만들고 배포해 보세요.',
    thumbnail: '/img/portfolio.png',
    isFavorite: true,
    link: 'https://inf.run/YkAN'
  }
]


const favoriteItems = items.filter(item=>item.isFavorite)

function App() {
  

  return (
    <>
    <main style={{flexDirection: 'column', gap: '1rem'}}>
      <CourseForm />
		  <CourseListCard title="강의 목록" items={items}/>
      {/* <CourseListCard title="관심 강의" items={favoriteItems}/> */}
	  </main>
    


    </>
  )
}

export default App
