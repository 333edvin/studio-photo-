import Hero from '../app/containers/Hero'
import { Montserrat } from 'next/font/google'
import About from './containers/About'
import Portfolio from './containers/Portfolio'
import Services from './containers/Services'
import Contact from './containers/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

const montserrat = Montserrat({
  weight: ['400', '700'], // You can choose different weights as needed
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
    <Header/>
    <main className={montserrat.className}>
      <Hero />
        <About/>
          <Portfolio/>
        <Services/>
      <Contact/>
    </main>
    <Footer/>
    </>
  )
}
