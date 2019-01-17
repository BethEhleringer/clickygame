import React, { Component } from "react";
import FaceCard from "./components/FaceCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
//import Navbar from "./components/Navbar";
import Header from "./components/Header";
//import Main from "./components/Main";
//import Footer from "./components/Footer";
import faces from "./faces.json";

class App extends Component {
  // Setting this.state.met to the faces json array
  state = {
    faces 
  };

 /* removeFace = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const faces = this.state.faces.filter(face => face.id !== id);
    // Set this.state.friends equal to the new friends array
 this.setState({ faces });
  };*/

 /* changeState = id => {

  }
  shuffleFaces(array){
    for (let i = array.length-1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i+1));
      [array[i], array[j]] = array[j], array[i] ];   }
      return array;
  }; */

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Header />
        <Title>Neighbors</Title>
        {this.state.faces.map(face => (
          <FaceCard
//removeFace={this.removeFace}
            id={face.id}
            key={face.id}
            name={face.name}
            image={face.image}
                      />
        ))}
      </Wrapper>
    );
  }
}

export default App;
