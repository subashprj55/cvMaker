import { templates } from '../utils/Data'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

function Slider() {
  const navigator = useNavigate()
  const handelClick = (id) => {
    localStorage.setItem('cvTemplate', JSON.stringify(id))
    navigator('/basicInfo')
  }

  const slideLeft = () => {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 400
  }

  const slideRight = () => {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 400
  }

  return (
    <div className="my-20 md:my-12">
      <h1 className="text-center text-4xl ">Templates</h1>
      <div className="relative flex items-center">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full overflow-hidden whitespace-nowrap scroll scroll-smooth"
        >
          {templates.map(({ id, img }) => (
            <div key={id} className="inline-block relative mb-7 group">
              <img
                className={`w-auto md:w-[480px] md:p-2 md:mx-7 group-hover:scale-105 ease-in-out duration-300`}
                src={img}
                alt="/"
              />
              <button
                onClick={() => handelClick(id)}
                className="p-3 rounded-lg bg-yellow-300 text-xl absolute bottom-5 group-hover:block lg:hidden left-1/3"
              >
                Use Template
              </button>
            </div>
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div>
    </div>
  )
}

export default Slider
