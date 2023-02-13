import { useState } from 'react'
import './App.css'
import VerticalCardSlider from './components/VerticalCardSlider/VerticalCardSlider'
import { FlippingCard } from './components/FlippingCard/FlippingCard'
import Dashboard from './components/Dashboard/Dashboard'
import CardSlider from './components/CardSlider/CardSlider'
// Dashboard

function App() {


  const cards = [
    {
      id: 1,
      image: "https://picsum.photos/300/200?image=1",
      title: "Image 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 2,
      image: "https://picsum.photos/300/200?image=2",
      title: "Image 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 3,
      image: "https://picsum.photos/300/200?image=3",
      title: "Image 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 4,
      image: "https://picsum.photos/300/200?image=4",
      title: "Image 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 5,
      image: "https://picsum.photos/300/200?image=2",
      title: "Image 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 6,
      image: "https://picsum.photos/300/200?image=3",
      title: "Image 6",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 7,
      image: "https://picsum.photos/300/200?image=4",
      title: "Image 7",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }

  ]


  return (
    <div className="App">

      {/* <div className='slide__vertical'>
        <div className="slider_row row1">
          <  CardSlider cards={cards} />
          <  CardSlider cards={cards} />
          <  CardSlider cards={cards} />

        </div>
        <div className="slider_row row2">
          <  CardSlider cards={cards} />
          <  CardSlider cards={cards} />
          <  CardSlider cards={cards} />

        </div>

        <div className="slider_row row3">
          <  CardSlider cards={cards} />
          <  CardSlider cards={cards} />
          <  CardSlider cards={cards} />

        </div>

        
        <div className="slider_row ">
          <h1>Some Text</h1>

        </div>
        <div className="slider_row ">

          <h1>Some Text</h1>

        </div>
        <div className="slider_row ">

          <h1>Some Text</h1>

        </div>




      </div> */}
      {/* <AdminPanel/> */}
      {/* hiii */}
      <Dashboard />
      {/* <VerticalCardSlider/> */}
      {/* <FlippingCard /> */}
      {/* hello */}
    </div>


  )
}

export default App
