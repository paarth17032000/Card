import React, { Component } from 'react'
import Drag from './drag'
import './coverimage.css'
// import { Form } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { FaAlignLeft } from "react-icons/fa"
import { FaAlignCenter } from "react-icons/fa"
import { FaAlignRight } from "react-icons/fa"
// import { BsTextLeft } from "react-icons/bs";
// import { BsTextCenter } from "react-icons/bs";
// import { BsTextRight } from "react-icons/bs";

export default class Main extends Component {
    constructor(props){
        super(props);
        this.componentRef = React.createRef();
        this.state={
            width: "400px",
            height: "400px",
            text: null,
            // val: null,
            font: "16px",
            color: "black",
            bold: "normal",
            italics: "normal",
            underline: "none",
            bg: "none",
            align: "left",
            feilds: [],
            key: 0,
        }
    }
    handleWidth = (e) => {
        let width = `${e.target.value}px`;
        this.setState({
            width
        })
        // console.log(this.state.width);
    }
    handleHeight = (e) => {
        let height = `${e.target.value}px`;
        this.setState({
            height
        })
        // console.log(this.state.height);
    }
    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
        // console.log(this.state.text);
    }
    handleFont = (e) => {
        this.setState({
            font: e.target.value
        })
        // console.log(this.state.font);
    }
    handleColor = (e) => {
        this.setState({
            color: e.target.value
        })
        // console.log(this.state.color);
    }
    handleBold = (e) => {
        if(e.target.id === "false"){
            e.target.id = "true";
            let bold = "bold";
            this.setState({
                bold
            })
        }else{
            e.target.id = "false";
            let bold = "normal";
            this.setState({
                bold
            })
        }
        // console.log(3,e.target.id);
    }
    handleItalics = (e) => {
        if(e.target.id === "false"){
            e.target.id = "true";
            let italics = "italic";
            this.setState({
                italics
            })
        }else{
            e.target.id = "false";
            let italics = "normal";
            this.setState({
                italics
            })
        }
        // console.log(3,e.target.id);
    }
    handleUnderline = (e) => {
        if(e.target.id === "false"){
            e.target.id = "true";
            let underline = "underline";
            this.setState({
                underline
            })
        }else{
            e.target.id = "false";
            let underline = "none";
            this.setState({
                underline
            })
        }
        // console.log(3,e.target.id);
    }
    handleBackground = (e) => {
        this.setState({
            bg: e.target.value
        })
        console.log(this.state.bg);
    }
    handleAlign = (e) => {
        this.setState({
            align: e.target.value
        })
        // console.log(this.state.text);
    }
    handleAddFeild = (e) => {
        let newFeild = {
            text: (
                <input 
                    type="text"
                    onChange={this.handleText}
                    placeholder="Enter Text"
                    className="mt-3 text-center form-control w-75" 
                />
            ),
            // utilities
        }
        // this.setState({
        //     feilds: [...this.state.feilds,newFeild]
        // })
    }
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
                            <select
                                onChange={this.handleBackground}
                                placeholder="Select Background"
                                className="mt-3 text-center form-control w-75" 
                            >
                                <option>none</option>
                                <option>Cake</option>
                                <option>Party</option>
                                <option>Colors</option>
                                <option>Side-Style</option>
                                <option>Decor</option>
                                <option>Rangoli</option>
                                <option>Scenery</option>
                                <option>Triangles</option>
                                <option>Mexican-Folk</option>
                                <option>Stars</option>
                            </select>
                            <input 
                                type="text"
                                onChange={this.handleText}
                                placeholder="Enter Text"
                                className="mt-3 text-center form-control w-75" 
                            />
                            <div className="mt-3 d-flex flex-row justify-content-around w-75">
                                <div className="btn btn-dark" id="false" onClick={this.handleBold}>B</div>
                                <div className="btn btn-dark" id="false" onClick={this.handleItalics}>I</div>
                                <div className="btn btn-dark" id="false" onClick={this.handleUnderline}>U</div>
                                <select
                                    onChange={this.handleAlign}
                                    // placeholder="Select Background"
                                    className="text-center form-control w-25 text-dark" 
                                >
                                    <option value="fa fa-align-left"> left </option>
                                    <option>center</option>
                                    <option>right</option>
                                    {/* <option value="fa fa-align-left"> &#xf036; </option>
                                    <option>&#xf037;</option>
                                    <option>&#xf038;</option> */}
                                    {/* <FaAlignLeft/>
                                    <FaAlignCenter/>
                                    <FaAlignRight/> */}
                                    {/* <i class="fad fa-align-left"></i>
                                    <i class="fad fa-align-center"></i>
                                    <i class="fas fa-align-right"></i> */}
                                </select>
                                {/* <FaAlignLeft/> */}
                                {/* <Form>
                                    <Form.Group  controlId="exampleForm.ControlSelect1" className="text-center w-50 text-dark">
                                        <Form.Label>Example select</Form.Label>
                                        <Form.Control as="select">
                                            <option><FaAlignLeft /></option>
                                            <option><FaAlignCenter /></option>
                                            <option><FaAlignRight /></option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form> */}
                            </div> 
                            <div className="mt-3 d-flex flex-row justify-content-around w-100">
                                <input 
                                    type="text"
                                    onChange={this.handleFont}
                                    placeholder="Font Size(in px)"
                                    className="text-center form-control w-50" 
                                />
                                <input 
                                    type="color"
                                    onChange={this.handleColor}
                                    placeholder="Color"
                                    className="text-center form-control w-25"
                                />
                            </div>
                            <div 
                                className="mt-4 btn btn-dark w-75"
                                onClick={this.handleAddFeild}
                            >
                                Add Another Text Feild
                            </div>
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
                        <div className="my-4">
                            <div 
                                style={{
                                    width: `${this.state.width}`,
                                    height: `${this.state.height}`
                                }} 
                                className={`border img-fluid ${this.state.bg}`}
                            >  
                                <Drag ref={this.componentRef} data={this.state} />
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="btn btn-dark mt-2 d-flex justify-content-center align-items-center w-25">Download</div>
                </div>
            </div>
        )
    }
}