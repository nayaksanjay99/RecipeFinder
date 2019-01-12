import React, { Component } from 'react';
import Header from './Components/Header';
import Input from './Components/input';
import Recipes from './Components/recipes'
import axios from 'axios'

class App extends Component {
  state={
    array:[]
  }
  setstring=(string)=>{
    console.log(string)
    if(string!=null){
        axios.get('https://api.edamam.com/search?q='+string+'&app_id=&app_key=	')
        .then(res=>{
          console.log(res);
          this.setState({
              array:res.data.hits
          })
      })
    }
    console.log("intern"+this.state.array)
    console.log(this.props)
  }

 componentDidMount=()=>{
    const json= localStorage.getItem("recipes")
    const recipes=JSON.parse(json)
    this.setState({
      array:recipes 
    })
 }

  componentDidUpdate=()=>{
    const recipes=JSON.stringify(this.state.array)
    localStorage.setItem("recipes",recipes)
  }

  render() {
    return (
      
        <div className="App">
         <Header/>
          <Input string={this.setstring}/>
            <div id='fullbody'>
              <Recipes strs={this.state.array}/>
            </div>
        </div>
      
    );
  }
}

export default (App);
