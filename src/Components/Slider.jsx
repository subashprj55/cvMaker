import React, { useEffect, useState } from 'react'
import { templates } from '../utils/Data'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'

function Slider() {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState('')

  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 400
  }

  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 400
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userId'))
    if (data) {
      setIsLogin(data)
    }
  }, [])

  return (
    <>
      <h1 className="text-center text-4xl">Templates</h1>
      <div className="relative flex items-center">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-hidden overflow-y-hidden whitespace-nowrap scroll scroll-smooth  "
        >
          {templates.map((item) => (
            <div key={item.id} className="inline-block relative mb-7 group">
              <img
                className={`w-[480px]  p-2 mx-7 group-hover:scale-105 ease-in-out duration-300`}
                src={item.img}
                alt="/"
              />
              <Link to={'/basicInfo'}>
                <button className="p-3 rounded-lg bg-yellow-300 text-xl absolute bottom-5 group-hover:block hidden left-1/3">
                  Use Template
                </button>
              </Link>
            </div>
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div>
    </>
  )
}

export default Slider
