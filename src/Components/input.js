import React from 'react'

class Input extends React.Component{
    state={
        str:null
    }
    editor=(e)=>{
        e.preventDefault();
        let str=e.target.value;
        this.setState({
            str
        })
        console.log("input"+this.state.str)
    }
    setter=(e)=>{
        e.preventDefault();
        console.log("sender"+this.state.str)
        this.props.string(document.getElementById('input').value)
    }
    render(){
        return(
            <div id="search">
                <form onSubmit={this.setter}>
                    <label>Search for </label>
                    <input id='input' type='text' placeholder='Enter dish name here' onChange={this.editor}/>
                    <button type='submit'>Enter</button>
                </form>
            </div>
        )
    }
}

export default Input;