import React, { Component } from 'react'
import Drag from './drag'

export default class Main extends Component {
    constructor(props){
        super(props);
        this.componentRef = React.createRef();
        this.state={
            width: "400px",
            height: "400px",
            text: null,
            val: null,
            font: "16px"
        }
    }
    handleWidth = (e) => {
        let width = `${e.target.value}px`;
        this.setState({
            width
        })
        console.log(this.state.width);
    }
    handleHeight = (e) => {
        let height = `${e.target.value}px`;
        this.setState({
            height
        })
        console.log(this.state.height);
    }
    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
        console.log(this.state.text);
    }
    handleFont = (e) => {
        this.setState({
            font: e.target.value
        })
        console.log(this.state.font);
    }
    // handleSearch = (e) => {
    //     this.setState({
    //         val: e.target.value
    //     })
    //     console.log(this.state.val);
    // }
    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(this.state.val);
    // }
    render() {
        return (
            <div className="container-fluid">
                <div className="row mx-auto">
                    <div className="col-xl-3 col-lg-4 col-md-4 border mt-4">
                        <div className="my-4 text-center d-flex flex-column align-items-center">
                            <h2>Wishes</h2>
                            <h6 className="mt-2">Hoping to help you make invitation<br />according to you</h6>
                            <div className="d-flex flex-row justify-content-around w-100">
                                <input 
                                type="text"
                                onChange={this.handleWidth}
                                placeholder="Enter Width"
                                className="mt-3 mr-2 text-center form-control w-50" 
                                />
                                <input 
                                    type="text"
                                    onChange={this.handleHeight}
                                    placeholder="Enter Height"
                                    className="mt-3 ml-2 text-center form-control w-50" 
                                />
                            </div>
                            <input 
                                type="select"
                                // onChange={this}
                                placeholder="Select Background"
                                className="mt-3 text-center form-control w-75" 
                            />
                            <input 
                                type="text"
                                onChange={this.handleText}
                                placeholder="Enter Text"
                                className="mt-3 text-center form-control w-75" 
                            />
                            <div className="mt-3 d-flex flex-row justify-content-around w-50">
                                <div className="btn btn-dark">B</div>
                                <div className="btn btn-dark">I</div>
                                <div className="btn btn-dark">U</div>
                            </div> 
                            <div className="mt-3 d-flex flex-row justify-content-around w-100">
                                <input 
                                    type="text"
                                    onChange={this.handleFont}
                                    placeholder="Font Size(in px)"
                                    className="text-center form-control w-50" 
                                    // style={{fontSize: `${this.state.font}px`}}
                                />
                                <div className="btn btn-dark w-25">Color</div>
                            </div>
                            <div className="mt-4 btn btn-dark w-75">Add Another Text Feild</div>
                            {/* image as bg */}
                            <input 
                                type="file"
                                // onChange={this}
                                placeholder="Font Size(in px)"
                                className="mt-3 text-center form-control w-75" 
                            />
                            {/* image as image or illustration */}
                            <input 
                                type="file"
                                // onChange={this}
                                placeholder="Font Size(in px)"
                                className="mt-3 text-center form-control w-75" 
                            />
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-8 col-md-8 d-flex flex-row justify-content-center align-items-center">
                        <Drag data={this.state} />
                        <div className="my-4">
                            <div 
                                style={{
                                    backgroundColor: `${this.state.val}`,
                                    width: `${this.state.width}`,
                                    height: `${this.state.height}`
                                }} 
                                className="border"
                            >
                                {/* <h6>Welcome to the jungle ..</h6> */}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
 
               

{/* <Drag ref={this.componentRef} />
                            <form onSubmit={this.handleSubmit}>
                                <input onChange={this.handleSearch} className="m-4"/>
                            </form>  */}