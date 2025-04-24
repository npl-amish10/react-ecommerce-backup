import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { product } from '../Data'


function Category() {
    let {cid}=useParams()
    let display=product.filter((a)=>a.category==cid)
  return (

    <>
     <section className="py-5">
  <div className="container">
    <h2>Category</h2>
    <div className="row">
      {display.map((a)=>(
                <div className="col-md-3 col-sm-6">
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

export default Category
