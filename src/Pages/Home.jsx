import React from 'react'
import Cat,{product} from '../Data'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
     <section className="py-4">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 ">
        <ul className="list-group shadow">
          <li className="list-group-item active py-3" aria-current="true"> <i className="fa fa-check-circle-o" aria-hidden="true" /> All
            Categories
            </li>
            {Cat.slice(0,9).map((a) => (
                  <li key={a} className="list-group-item">
                    <Link to={`category/${a}`}>{a}</Link>
                  </li>
                ))}
          
        </ul>
      </div>
      <div className="col-lg-6  ">
        <a href><img className="shadow w-100" src="https://htmldemo.net/greenfarm/greenfarm/assets/images/sliders/home3-slider2.webp" alt /></a>
      </div>
      <div className="col-lg-3">
        <div className="d-flex gap-2 d-lg-block">
          <img className="w-100 mb-4" src="https://htmldemo.net/greenfarm/greenfarm/assets/images/banners/home3-banner1-1.webp" alt />
          <img className="w-100 mb-4" src="https://htmldemo.net/greenfarm/greenfarm/assets/images/banners/home3-banner1-2.webp" alt />
        </div>
      </div>
    </div>
  </div>
</section>
<section className="py-5">
  <div className="container">
    <h2>Category</h2>
    <div className="row">
      {product.slice(0,10).map((a)=>(
                <div className="col-md-3 col-sm-6" key={a.id}>
                <div className="product-grid">
                  <div className="product-image">
                  <Link to={`/details/${a.id}`}>
                      <img className="pic-1" src={a.thumbnail} />
                      <img className="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-2.jpg"/>
                    </Link>
                    <ul className="social">
                      <li><a href data-tip="Quick View"><i className="fa fa-search" /></a>
                      </li>
                      <li><a href data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></a></li>
                      <li><a href data-tip="Add to Cart"><i className="fa fa-shopping-cart" /></a></li>
                    </ul>
                    <span className="product-new-label">Sale</span>
                    <span className="product-discount-label">20%</span>
                  </div>
                  <ul className="rating">
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star disable" />
                  </ul>
                  <div className="product-content">
                    <h3 className="title"><a href="#">{a.title}</a></h3>
                    <div className="price">$16.00
                      <span>$20.00</span>
                    </div>
                    <a className="add-to-cart" href>+ Add To Cart</a>
                  </div>
                </div>
              </div>
         ))}
      
      
    </div>
  </div>
</section>

    </>
  )
}

export default Home
