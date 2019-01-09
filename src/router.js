import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import App from './App'
import Recipe from './Components/recipe'

class Router extends React.Component{
    state={
        array:[]
    }

    setter=(array)=>{
        this.setState({
            array
        })
    }

    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route  exact path='/' component={App}/>         
                    <Route  path="/recipe/:clk" component={Recipe}/>
                </div>
            </BrowserRouter>
        )
    }
}
export default Router