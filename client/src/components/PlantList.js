import React, { Component } from "react";
import axios from "axios";

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array

  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/

   constructor(){
    super();
    
    this.state={
      dataPlants:[],
      plants:[],
      userInput:""
    }
   }

     //handle input
  searchInputChange=(e)=>{
   this.setState({
     userInput:e.target.value
   })
  //console.log(userInput)
}

   componentDidMount(){
    axios.get("http://localhost:3333/plants")
    .then((response)=>{
        this.setState({
          plants:response.data.plantsData,
          dataPlants:response.data.plantsData
        })
    })
    .catch((err)=>{
      console.log(err)
    })
   }
   componentDidUpdate(prevProps,prevState){
     if(this.state.userInput && prevState.userInput!=this.state.userInput){ 
      const newPlants= this.state.dataPlants.filter((plant)=>plant.name.toLowerCase().includes(this.state.userInput.toLowerCase()))
      this.setState({
        plants: newPlants
   })
    }

   }
  render() {
    const mystyle = {
      width: "40%", 
      margin: "auto ", 
      marginTop:"10px"
    };
    return (
      <>
    <input style={mystyle} className='searchInput' name="search" type="text" 
      placeholder="type plant name"
      onChange={this.searchInputChange}
      />
      <main className="plant-list">
        {this.state?.plants?.map((plant) => (
          <div className="plant-card" key={plant.id}>
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p>☀️ {plant.light}</p>
                <p>💦 {plant.watering}x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => this.props.addToCart(plant)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
      </>
    );
  }
}
