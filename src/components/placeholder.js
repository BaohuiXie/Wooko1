import React, {Component} from 'react';



export default class Placeholder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder:'',
            text:'',
            error:''
        };
    }

    updateInputPlaceholder(event){
        this.setState({
            placeholder:event.target.value,
        })
    }

    updateInputTEXT(event){
        this.setState({
            text:event.target.value,
        })
    }

    updateInputError(event){
        this.setState({
            error:event.target.value,
        })
    }
 
    render(){
        return (<div id='Text input'>
        <p>Text input with Placeholder: </p>
        <input onChange={this.updateInputPlaceholder.bind(this)} value={this.state.placeholder} type='text' placeholder='placeholder'/>
        <p>Text input with Text: </p>
        <input onChange={this.updateInputTEXT.bind(this)} value={this.state.text} type='text' placeholder='Text'/>
        <p>Text input with Error: </p>
        <input onChange={this.updateInputError.bind(this)} value={this.state.error} type='text' placeholder='Text'/>
    </div>);
    }
}