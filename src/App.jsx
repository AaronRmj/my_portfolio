import './App.css'
import Header from "./pages/Header"
import Landing from "./pages/Landing"
import About from './pages/about'
function App() {
  

  return (
    <section className="bg-cover bg-center bg-[url('./assets/images/bgHome.png')]">
      <Header />
      <Landing />
      <About />
    </section>
  )
}

export default App
