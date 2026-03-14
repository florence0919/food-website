
import { Features } from 'tailwindcss'
import './App.css'
import Landing from './components/landing'
import Nav from './components/Nav'
import Products from './components/Products'
import Why from './components/Why'
import About from './components/About'
import Working from './components/Working'
import Clients from './components/Clients'
import Footer from './components/Footer'

function App() {
  

  return (
  
      <div className='h-screen w-full'>
     <Nav/>
     <Landing/>
 <Why/>
 <About/>
     <Products/>
     <Working/>
     <Clients/>
 <Footer/>
   
       </div>
    
  )
}

export default App
