import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import Navbar from './components/Navbar'
//import Hero from './components/Hero'
import Card from './components/Card'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Card 
      img="katie-zaferes.png"
      rating="5.0"
      reviewCount={6}
      country="USA"
      title="Life Lessons with Katie Zaferes"
      price={136}
    />
  </React.StrictMode>,
)
