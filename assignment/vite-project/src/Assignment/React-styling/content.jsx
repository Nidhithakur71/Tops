import React from 'react'
import img from "../React-styling/img/image.jpg"

export default function Content() {
  return (
    <>
      <div className="background">
    <div className="bg-img"> 
    <img src={img} alt="" />
    <div className="img-text">
      <h5>we are enjoy music</h5>
      <h1>music is a weapon<br/> which creates<br/> magic in people</h1>
      <section class="music-1">
  <div className="container">
    <div className="music-padding">
      <div className="music-flex">
        <div className="right-text">
          <h1>soul music in timeless.</h1>
          <h5>"music can change the world because it change people."</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatibus assumenda maxime voluptatum dignissimos perspiciatis pariatur ratione aut natus id provident neque, velit deserunt? Quis sint cupiditate vitae accusamus et. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  </div>
 </section>
      <button>learn more</button>
    </div>
    </div>
   </div>
    </>
  )
}
