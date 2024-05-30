import Faq from '../Components/Faq'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import Slider from '../Components/Slider'

const Home = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-col justify-center items-center  w-full">
        <div className="pt-10">
          <h2 className="text-5xl text-[#38BDF8] uppercase">
            Create your professional Resume Here
          </h2>
        </div>
        <div className="my-12">
          <Slider />
        </div>
        <div className="bg-[#DDE8F0] w-full h-auto py-20">
          <Faq />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
