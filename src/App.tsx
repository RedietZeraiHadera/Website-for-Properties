import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import { Categories } from "./components/Categories"
import { Research } from "./components/Research"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Categories />
      <Research />
      <Footer />
    </>
  )
}