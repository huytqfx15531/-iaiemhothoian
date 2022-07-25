import React, { Component } from 'react';
import { Stocks } from "../../Stocks";
class Home extends Component {

  render() {
    return (
      <>

        <div className="stock-container">
          <Stocks />
        </div>

      </>

    );


  }


};



export default Home;
