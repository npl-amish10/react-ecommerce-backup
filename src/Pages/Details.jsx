import React from 'react'
import { useParams } from 'react-router-dom'
import { product } from '../Data'


function Details() {
  let {did}=useParams()
  let display=product.find((a)=>a.id==did)
  return (
    <>
  <section className="py-5">
  <div className="container">
    <h2>Details</h2>
    <div className="wrapper row">
      <div className="preview col-md-6">
        <div className="preview-pic tab-content">
          <div className="tab-pane active" id="pic-1"><img src={display.thumbnail} /></div>
          
        </div>
      </div>
      <div className="details col-md-6">
        <h3 className="product-title">{display.title}</h3>
        <div className="rating">
          <div className="stars">
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
          </div>
          <span className="review-no">41 reviews</span>
        </div>
        <p className="product-description">{display.description}</p>
        <h4 className="price">current price: <span>$180</span></h4>
        <div className="action">
          <button className="add-to-cart btn btn-default" type="button">add to cart</button>
        </div>
      </div>
    </div>
  </div>
</section>
     
    </>
  )
}

export default Details
