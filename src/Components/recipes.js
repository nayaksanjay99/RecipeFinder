import React from 'react'
import {Link,withRouter} from 'react-router-dom'

class Recipes extends React.Component{
    render(){
        const posts=this.props.strs;
        console.log(posts)
        const post=posts.length?(
            posts.map(elm=>{
               
               
               
               
                const lablength=elm.recipe.dietLabels
                const lab=lablength.length?(
                    lablength.map(el=>{
                        return(
                            <span key={lablength.indexOf(el)} id="pspan">{el}</span>
                        )
                    })
                ):(
                    <span id="pspan">No tags</span>
                )
/*<span id="pspan">{elm.recipe.dietLabels.length}</span>*/






                return(
                <Link to={{
                    pathname:`/recipe/${posts.indexOf(elm)}`,
                    state:{recip:elm}
                }}  key={posts.indexOf(elm)} ><div className='objects'>
                    <img src={elm.recipe.image} alt="img"/>
                    <div id="imgdiv"></div>
                    <h3>{elm.recipe.label.length<20?(elm.recipe.label):(elm.recipe.label.substring(0,19)+'...')}</h3>
                    <p id="p">{lab}</p>
                    <p id="abs"></p>
                </div></Link>
                )
            })
        ):(
            <div>
                <h3>Loading...</h3>
            </div>
        )
        return(
            <div>
                {post}
            </div>
        )
    }
}
export default withRouter(Recipes)