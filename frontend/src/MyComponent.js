import React, { Component } from 'react'

export default class MyComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            inputName: '',
            serverResponse: ''
        }
    }
    
    inputChangeHandler = event => {
        this.setState({
            inputName: event.target.value
        })
    }

    setResponse(val){
        this.setState({
            serverResponse: val
        })
    }

    render() {
        return(
            <div>
                <form>
                    <label>Your Input Request to Server: </label>
                    <input 
                        type = "text" 
                        placeholder = "First Name"
                        value =  {this.state.inputName}
                        onChange = {this.inputChangeHandler}
                    />

                    <button
                        type = "button"

                        onClick = {
                            () => {
                                fetch("/identify/" + this.state.inputName)
                                .then(response => response.json())
                                .then(data => {
                                    this.setResponse(data.returnName)
                                })
                                .catch(error => {
                                    console.log(error)
                                })
                            }
                    }>
                        Submit
                    </button><br/>

                    <label>Server Response: </label>
                    <textarea
                        value = {this.state.serverResponse}
                        readOnly
                    ></textarea>
                </form>
            </div>
        )
    }
}