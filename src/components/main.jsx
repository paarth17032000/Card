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
            <div className="container-fluid">
                <div className="row mx-auto">
                    <div className="col-xl-4 col-md-5 col-sm-6 bg-success mt-5">
                        <Drag ref={this.componentRef} />
                        <form onSubmit={this.handleSubmit}>
                            <input onChange={this.handleSearch} className="m-4"/>
                        </form>
                    </div>
                    <div className="col-xl-8 col-md-7 col-sm-6 bg-warning mt-5">
                        <div style={{backgroundImage: `${this.state.val}`}} className="p-5 border w-25 m-5">
                            <h6>Welcome to the jungle !!</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
 
                