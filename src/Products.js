import React from 'react'

const Products=()=>{
    return(
        <>
        <h1><center>Products</center></h1>
        <p><center>These are the products available: </center></p>
        <section id="pricing">
          <div className="product">
            <div className="level">Samsung Model X</div>
            <img src="Mobileimage1.jpg" alt="samsung"/>
            <h2>Rs.8600</h2>
            <ol>
              <li>Lorem ipsum.</li>
              <li>Lorem ipsum.</li>
              <li>Lorem ipsum.</li>
              <li>Lorem ipsum.</li>
            </ol>
            <button className="btn">Select</button>
          </div>
          <div className="product">
            <div className="level">Vivo x1</div>
            <img src="Mobimages2.jpg" alt="vivo"/>
            <h2>Rs.9000</h2>
            <ol>
              <li>Lorem ipsum.</li>
              <li>Lorem ipsum.</li>
              <li>Lorem ipsum.</li>
              <li>Lorem ipsum.</li>
            </ol>
            <button className="btn">Select</button>
          </div>
          <div className="product">
            <div className="level">Nokia x1132</div>
            <img src="Mobileimage3.jpg" alt="nokia"/>
            <h2>Rs.3200</h2>
            <ol>
              <li>Lorem ipsum.</li>
              <li>Lorem ipsum.</li>
              <li>Lorem ipsum.</li>
              <li>Lorem ipsum.</li>
            </ol>
            <button className="btn">Select</button>
          </div>
        </section>
    </>
    )
}
export default Products