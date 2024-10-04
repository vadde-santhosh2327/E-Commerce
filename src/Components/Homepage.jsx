import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Footer from './Footer';

export default function Home() {

    let [product, setProduct] = useState([]);
    let [search, setSearch] = useState('');
    let [count, setCount] = useState(0);

    function adding() {
        setCount(++count);
    }

    function tozero() {
        setCount(0);
    }

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(result => {
                setProduct(result);
            });
    }, []);

    function searching(e) {
        setSearch(e.target.value);
    }

    return (
        <>
           <nav id="nav-bar">
  <div id="logo-section">
    <h1 id="shopify">YourStyle Hub</h1>
  </div>
  <ul id="nav-items">
    <li>
      <Link to="/signinpage" className="nav-link">
        Sign Up
      </Link>
    </li>
    <li>
      <Link to="/loginpage" className="nav-link">
        Log In
      </Link>
    </li>
    <li>
      <button className="navbtn">
        <i className="fa-solid fa-cart-shopping"></i>
        Add to Cart: <span className="cart-count">{count}</span>
      </button>
    </li>
    <li>
      <button className="navbtn" onClick={tozero}>
        <i className="fa-solid fa-trash"></i> Reset
      </button>
    </li>
  </ul>
</nav>

            <br /><br /><br />
            <div id='topimg'>
                <h1 id='shop' style={{ fontSize: '25px', color: 'cyan' }}>
                    Discover YourStyle Hub - Where Fashion Meets Quality!
                </h1>
                <h4 id='fast' style={{ fontSize: '15px', color: 'cyan' }}>
                    Browse the trendiest collections from apparel to gadgets, all in one place with exclusive deals and quick delivery.
                </h4>
                <input type="text" placeholder='Search any products' onChange={searching} id='search-input' />
            </div> 
            <br /><br /> <br />
            <div id='productbox'>
                {
                    product.filter(value => value.title.toLowerCase().includes(search)).map(data =>
                        <div id='imagecart' className='cc' key={data.id}>
                            <img id='productimages' className="imges" src={data.image} alt={data.title} />
                            <div id='productinfo'>
                                <p>{data.title}</p>
                                <p>Price:  ${data.price}</p> <br />
                                <button id='btn1' className='shopbtns' onClick={adding}>Add to Cart</button>
                                <button id='btn2' className='shopbtns'> Buy Now</button>
                            </div>
                        </div>
                    )
                }
            </div>
            <Footer/> 

           
        </>
    );
}