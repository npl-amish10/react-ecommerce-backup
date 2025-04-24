import React from 'react'

function Header() {
    return (
        <>
            <section className="top py-2 ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4">
                            <ul className="d-flex gap-4 justify-content-center justify-content-lg-start">
                                <li><a href> English <i className="fa fa-angle-down" aria-hidden="true" />
                                </a></li>
                                <li><a href> Dollar <i className="fa fa-angle-down" aria-hidden="true" />
                                </a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <ul className="d-flex gap-4 justify-content-lg-end justify-content-center">
                                <li><a href> My account</a></li>
                                <li><a href> Wishlist</a></li>
                                <li><a href> Checkout </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <header className="bg-white">
                <div className="container">
                    <div className="row  align-items-center ">
                        <div className="col-lg-2">
                            <a href="index.html">
                                <img className="logo" src="https://htmldemo.net/greenfarm/greenfarm/assets/images/logo.webp" alt />
                            </a>
                        </div>
                        <div className="col-lg-3">
                            <div className="d-flex gap-3 align-items-center">
                                <div className="headset"><i className="fa fa-headphones" aria-hidden="true" />
                                </div>
                                <div>Phone:<br /> 1-888-123-456-89</div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <form action>
                                <input className="form-control" type="text" name id placeholder="Search your product" />
                            </form>
                        </div>
                        <div className="col-lg-3">
                            <div className="d-flex gap-3 align-items-center justify-content-lg-end">
                                <div className="headset"><i className="fa fa-shopping-cart" aria-hidden="true" />
                                </div>
                                <div>Shopping Cart <br /> 0 items - $0.00 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header
