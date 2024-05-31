import CvContainer from '../Components/CvContainer'
import Faq from '../Components/Faq'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import Slider from '../Components/Slider'

const Home = () => {
  return (
    <>
      <Nav />
      <HomeTitileSection />
      <Slider />
      <Faq />
      <Footer />
    </>
  )
}

export default Home

const HomeTitileSection = () => {
  return (
    <CvContainer>
      <div className="pt-10">
        <h2 className="text-3xl md:text-5xl text-[#38BDF8] uppercase text-center">
          Create your professional Resume Here
        </h2>
      </div>
    </CvContainer>
  )
}
