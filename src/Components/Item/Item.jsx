import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="container">
    <div className="item">
      <Link to={`/product/${props.id}`} onClick={scrollToTop}>
        <img src={props.image} alt={props.name} />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          New Price: ${props.new_price}
        </div>
        <div className='item-price-new'>
          Old Price:
        <div className="item-price-old">
           ${props.old_price}
           </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Item
