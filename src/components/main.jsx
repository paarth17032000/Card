import React, { Component } from 'react'
import Drag from './drag'

export default class Main extends Component {
    constructor(props){
        super(props);
        this.componentRef = React.createRef();
        this.state={
            val: null
        }
    }
    handleSearch = (e) => {
        this.setState({
            val: e.target.value
        })
        console.log(this.state.val);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.val);
    }
    render() {
        return (
            <div>
                <Drag ref={this.componentRef} />
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleSearch} className="m-4"/>
                </form>
                <div style={{backgroundImage: `${this.state.val}`}} className="p-5 border w-50 m-5">
                    <h6>Welcome to the jungle !!</h6>
                </div>
            </div>
        )
    }
}
