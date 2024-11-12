import Header from './components/Header'
import Slidebar from './components/Slidebar'
import Profilepic from './components/Profilepic'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Progressbar from './components/Progressbar'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
   
     <Header/>
     <Slidebar/>
    <div className='ml-[90px] grid grid-cols-1 md:grid-cols-3'>
      <div className='col-span-2'>
        
       
        <div id='home'><Home/></div>
        <About/>
        <div id='skills'><Skills/></div>
        
        <div id='projects'><Projects/></div>
        <Footer/>
        
      </div>
      <div>
        <Progressbar/>
        <Profilepic/>
      </div>
    </div>
    
    </>

  )
}

export default App
