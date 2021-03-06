import React, { Component } from 'react';
import Vacation from 'Vacation';

class App extends Component {
  constructor(){
    super();
    this.vacationSpots = [
        {
          place: "Meridian, Idaho",
          price: 40,
          timeToGo: "Spring"
        },{
          place: "Cancun",
          price: 900,
          timeToGo: "Winter"
        },{
          place: "China",
          price: 1200,
          timeToGo: "Fall"
        },{
          place: "Russia",
          price: 1100,
          timeToGo: "Summer"
        },{
          place: "Lebanon",
          price: 400,
          timeToGo: "Spring"
        }
      ];
  }
  render(){
    const panels = vacationSpots.map(spot => {
      if (price < 500){
        price = spot.price;
      }else if (price > 500 || price < 1000){
        price = '$' + spot.price;
      }else{
        price = '$$' + spot.price;
      }
      switch (spot.timeToGo){
        case 'Spring':
            return <Vacation
              place={spot.place}
              price={price}
              timeToGo={spot.timeToGo}
              backgroundColor = 'green'/>;
        case 'winter':
           return  <Vacation
              place={spot.place}
              price={price}
              timeToGo={spot.timeToGo}
              backgroundColor = 'blue'/>;
        case 'Summer':
          return <Vacation
              place={spot.place}
              price={price}
              timeToGo={spot.timeToGo}
              backgroundColor = 'yellow'>;
        case 'Fall':
           return <Vacation
              place={spot.place}
              price={price}
              timeToGo={spot.timeToGo}
              backgroundColor = 'orange'/>;
        default:
            break;
      }
});

    return(
      <div className='vacationContainer'>
        (panels)
      </div>
    );
  }
}

export default
