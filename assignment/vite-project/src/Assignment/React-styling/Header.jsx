import React from 'react'

export default function Header() {
  return (
    <>
    <div className="header">
    <div className="container">
      <div className="header-p">
        <div className="header-flex">
          <div className="logo">
            <span  className="fa fa-music" aria-hidden="true"></span>
          <a href="">Music Time</a>
        </div>
          <div className="nav">
            <ul>
              <li><a href="" className="active">Home</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Bold </a></li>
              <li><a href="">Pages</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</div>


    </>
  )
}
