import React from "react";

// functional component
//Rules:-
//the component name should always starts with capital letter
// A componenet should return single element
//Inside react always use className instead of class

function Card(props) {
  return  <div class="col-lg-4 col-md-6 mb-4">
  <div className="card h-100">
    <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
    
    <div className="card-body">
      <h4 className="card-title">
        <a href="#">{props.data.productName}</a>
      </h4>
      <h5>{props.data.price}</h5>
      <p className="card-text">{props.data.description}</p> </div>
    <div className="card-footer">
      <small className="text-muted">★ ★ ★ ★ ☆ </small>
      <small className="btn btn-primary">Add To Cart</small>
    </div>
  </div>
</div>
    
  
}

export default Card;

