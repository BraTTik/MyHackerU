import React, {Component} from 'react';

class Input extends Component{
    constructor(props){
        super(props);
        this.state = {
            val: "JSON",
        }
    }
    handleChange = (e) => {
        const { value } = e.target;
        this.setState( {val: value} );
    }
    render(){
        return (
            <React.Fragment>
                <p>{ this.state.val }</p>
            <input 
                value = { this.state.val }
                type="text" 
                onChange = { this.handleChange }
                />
            </React.Fragment>
        )
    }
}

export default Input;