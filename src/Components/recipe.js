import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default class Recipe extends React.Component{

    state={
        array:[]
    }

    componentWillMount(){
        this.setState({
            array:this.props.location.state.recip.recipe
        })
    }

    render(){
        const ing=this.state.array.ingredients;
        const ingredients=ing.map(elm=>{
            return(
                <div id="singlestep" key={ing.indexOf(elm)}>
                    <h4 id="singlestephead">{ing.indexOf(elm)}.</h4>
                    <p id="singlesteppara">{elm.text}</p>
                </div>
            )
        })
        return(
            <div className="App">
                <Header/>
                <div id='fullbody2'>
                    <img id= "recipeimg" src={this.state.array.image} alt="img"/>
                    {console.log(this.state.array)}
                    <h2>{this.state.array.label}</h2>
                    <div id="ingr">
                        <h3>Ingredients</h3>
                        {ingredients}
                        <h3 id="recipelinkhead">Recipe Link:</h3>
                        <p id="recipelink"><a href={this.state.array.source}>{this.state.array.url}</a></p>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }

}

//////Length of title