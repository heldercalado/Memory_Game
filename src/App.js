import React, { Component } from 'react';

import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Card from "./components/Card";
import dbzchars from "./dbz.json";


class App extends Component {
  state ={
    dbzchars:dbzchars,
    score:0,
    topscore:0,
    shake:false,
    gameover:""
  }
  
  updateTopScore = score => {
    this.state.topscore < score ? this.setState({ topscore: score}): this.setState({ topscore: this.state.topscore})
  };
  updateScore = id => {
    // filter the array friends to display only the index with id of id
   const filtered  = this.state.dbzchars.filter(data => data.id === id);
   // checks if the filtered var has any index in it 
  if (filtered.length > 0){
    //checks if the filtered index has the value clicked set to true
    if (filtered[0].clicked){
      //if yes the game over
      this.shakePicture();
      this.setState({ gameover: "Game Over!"});
      this.updateTopScore(this.state.score);
      this.newGame();
    }else {
      //if not , set that index .clicked to true 
      filtered[0].clicked = true;
      // update the score 
      this.setState({ score: this.state.score + 1});
      // shuffle the images
      this.randomizeBoard();
    }
  }
}
shakePicture (){
  this.setState({ shake: !this.state.shake});
  console.log("shake activated");

}
newGame(){
  let dbzchars = this.state.dbzchars.map(data => {

    data.clicked =false
    return data;
  })
   
    
  this.setState({
    score:0,
    dbzchars,
    gameover: ""


  })
  
  this.shakePicture();
  
}
  randomizeBoard = (id) => {
    // initialize the var 
    let sourceArray=this.state.dbzchars
   // loop the array and randomizes its indexes
      for (var i = 0; i < sourceArray.length - 1; i++) {
          var j = i + Math.floor(Math.random() * (sourceArray.length - i));
  // creates a temp var to hold the index 
          var temp = sourceArray[j];
          //set the array index j with the value of the old array
          sourceArray[j] = sourceArray[i];
          //then sets the original index position to the temp value 
          sourceArray[i] = temp; 
      }
      // update the object array with its new order
      this.setState({ dbzchars:sourceArray });
  
   
    
    

  }
  render() {
    return (
      <div className="container-fluid">
      <Nav
      score={this.state.score}
      topscore={this.state.topscore}
      />
      <Header />
      <Main>
      {this.state.dbzchars.map((chars, index) =>{
        return (
              <Card 
                  key={chars.id}
                  id={chars.id}
                  name={chars.name}
                  image={chars.image}
                  updateScore={this.updateScore}
                  shake={this.state.shake}
                      
              />
                    
                )
                  })}
        <Card />
      </Main>
       <Footer />
      </div>
    );
  }
}

export default App;

// state = {
//   friends: friends,
//   score: 0,
//   topscore:0
// }

// randomizeBoard = () => {
//   // initialize the var
//   let sourceArray=this.state.friends
//  // loop the array and randomizes its indexes
//     for (var i = 0; i < sourceArray.length - 1; i++) {
//         var j = i + Math.floor(Math.random() * (sourceArray.length - i));
// // creates a temp var to hold the index
//         var temp = sourceArray[j];
//         //set the array index j with the value of the old array
//         sourceArray[j] = sourceArray[i];
//         //then sets the original index position to the temp value
//         sourceArray[i] = temp;
//     }
//     // update the object array with its new order
//     this.setState({ friends:sourceArray });

// }
// updateTopScore = score => {
//  if ( this.state.topscore < score) {
//   this.setState({ topscore: score})
//  }
// };



// }
//   // Filter this.state.pokemon for pokemon with an id not equal to the id being removed
 
//   // Set this.state.friends equal to the new friends array
 
// };



// render() {
//   return (

//     <div className="App">
//       <Nav 
//       score = {this.state.score} 
//       topscore={this.state.topscore}/>
//       <Header />
//       <Main >
//          {this.state.friends.map((chars, index) => {
//           return (
//             <Card
//             updateScore={this.updateScore}
//             removeCard = {this.removeCard}
//                key = {chars.id}
//               id= {chars.id}
//               name={chars.name}
//               image ={chars.image}
//             />
//           )

//         })}
//         <Card />
//       </Main>
//       <Footer />
//     </div>
//   );
//       }
//     }


//   export default App
