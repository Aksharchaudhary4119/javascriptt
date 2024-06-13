import React from "react";
import CardCompo from "./CardCompo.jsx";
import carcompo from "./car_compo.jpg";
import cars from "./../cars.jpeg";

const Products = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3">
            <CardCompo title="Product1" gmete={cars} />
          </div>
          <div className="col-lg-3">
            <CardCompo
              title="Testing"
              gmete={process.env.PUBLIC_URL + "/car.jpeg"}
            />
            {/* <div class="card">
                            <img class="card-img-top" src={process.env.PUBLIC_URL + '/car.jpeg'}  alt="Card image cap"/>
                            <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div> */}
          </div>
          <div className="col-lg-3">
            <CardCompo title="Other" gmete={"/car.jpeg"} />
            {/* <div class="card">
                            <img class="card-img-top" src={'/car.jpeg'}  alt="Card image cap"/>
                            <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div> */}
          </div>
          <div className="col-lg-3">
            <CardCompo title="something" gmete={"/car.jpeg"} />
            {/* <div class="card"> 
                            <img class="card-img-top" src={cars}  alt="Card image cap"/>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                        </div> */}
          </div>
          {/* <div className="col-lg-3"> <CardCompo/></div>
                <div className="col-lg-3"> <CardCompo/></div>
                <div className="col-lg-3"> <CardCompo/></div>
                <div className="col-lg-3"> <CardCompo/></div> */}
        </div>
      </div>
    </>
  );
};

export default Products;
