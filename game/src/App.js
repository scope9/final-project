import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card/card';
import axios from 'axios';

class App extends React.Component{
  state = {
    clickedImages:[],
    image: [
      {
        id: 1,
        src: "http://croatia.hr/sites/default/files/styles/image_full_width/public/2017-08/02_01_slide_nature.jpg?itok=ItAHmLlp"
      },
      {
        id: 2,
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Hopetoun_falls.jpg/1200px-Hopetoun_falls.jpg"}
    ],
    dbScore: "",
    dbName: "", 
    highscore: 0,
    name:""
    
  }
  
  handleInputChange = (event) => {
    this.setState({ name: event.target.value });
  };

  postToDb = (event) => {
    event.preventDefault();
    const obgForReqToPost = {
      topName: this.state.name,
      topScore: this.state.highscore
    }
    console.log("post", obgForReqToPost)
    axios.post("/api/addTopScore", obgForReqToPost )
      .then(axiosDataComingFromDb => {
        // console.log(axiosDataComingFromDb.data) 
      })
      .catch(function(errFromDb) {
        console.log(errFromDb) 
      })
  };

  handleCardClick = (id) => {
    if (this.state.clickedImages.includes(id)) {
      console.log('you lose')
      alert("you lose")
      //end game
    } else {
      this.setState({clickedImages:[...this.state.clickedImages, id],  highscore: this.state.highscore + 1})
    }

    // console.log("before", event.target.getAttribute('data-hasBeenClicked'))


    // if (this.state.hasBeenCklicked = false) {
    //   this.setState({ highscore: this.state.highscore + 1 })
    // } else {
    //   alert("Game Over")
    // }

  

    // if false add point  else alert user game is over and set count back to zero

    // event.target.setAttribute("data-hasBeenClicked", true)
    // console.log("after", event.target.getAttribute('data-hasBeenClicked'))
 

  }


//  images = [
//   "http://croatia.hr/sites/default/files/styles/image_full_width/public/2017-08/02_01_slide_nature.jpg?itok=ItAHmLlp",
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Hopetoun_falls.jpg/1200px-Hopetoun_falls.jpg"
//  ]

//  renderCards = () => {
//   this.images.map((eachImageUrl) => {
//     return <Card imageUrlBla = {eachImageUrl}/>
//   })
//  }



componentDidMount(){
  axios.get('/api/allScoresFromDb')
  .then(data => {
    console.log(data)
    // grab the score and make this.setState.dbScore
    // grab the score and make this.setState.dbName
    // this.setState({ dbScore: this.state.highscore + 1 })
    // this.setState({ dbName: this.state.highscore + 1 })
    console.log(data)
   
  })
  .catch(err => {
    console.log(err)
  })
}

  render(){
    return(
      <div>
        <h1>Memory Click Game</h1>
        <h2>Make sure you don't click the image twice or you lose</h2>
        <h2>Submit your name after you finished playing</h2>
        <h2> Current Highscore:{this.state.highscore}  |  Name:{this.state.name}</h2>
       <form>
    <input value={this.state.name} onChange={this.handleInputChange} placeholder="Name"/>
    <button onClick={this.postToDb}> submit </button>
  </form>
          

       {
        this.state.image.map((eachImageInfo) => {
          return (
          <Card 
            key = {eachImageInfo.id}
            imageUrlBla = {eachImageInfo.src} 
            cardClick = {() => this.handleCardClick(eachImageInfo.id)}
            click = {this.postToDb}
            clickedTrueOrFalse = {eachImageInfo.hasBeenCklicked}

          /> 
          )
        })
       }
       {/* {
         this.images.map(function(eachImageUrl) {
          return <Card imageUrlBla = {eachImageUrl}/>
         })
       } */}
      </div>
    )
  }
  
}

// ReactDOM.render(<App />, document.getElementById('root'));
export default App;

// 
