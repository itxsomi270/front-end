import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let data = [
  {
    name: 'JavaScript 1',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp_ain_2elL_vAdCHgnuueg6z8goP-CYedqw&s',
    desp: 'hey i am a lion'
  },
  {
    name: 'JavaScript 2',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl6-bR160PHcqZvbjE1duFMI3pe3JAemGd9g&s',
    desp: 'hey i am a man'
  },
  {
    name: 'JavaScript 3',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe_sNB2FAju9bH-g8s451qcDhV-hIL7pPaMw&s',
    desp: 'hey i am a boy'
  },
  {
    name: 'JavaScript 4',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwURuFhjSLuTxKENpfOgAzhMODuDIR2tQPMw&s',
    desp: 'hey i am a cat'
  },
  {
    name: 'JavaScript',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUWDO1su5xHOwMnyDz4SpGAuMjZPbSHwwJ4Q&s',
    desp: 'hey i am a dog'
  }
]


function home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  }
  return (
    <div className='container my-2'>
      <div className='row'>
      <Slider {...settings}>
      {
        data.map((d) => {
          return (
            <div className="card col-md-4" key={d.id}>
              <img 
                className="card-img-top" 
                src={d.img} 
                alt="Card image cap"
                style={{ width: "100%", height: "300px" }}
                />
              <div className="card-body">
                <h5 className="card-title">{d.name}</h5>
                <p className="card-text">{d.desp}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          );
        })
      }
    </Slider>
    </div>
    </div>
  )
}


export default home