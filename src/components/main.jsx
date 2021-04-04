import React, { Component } from 'react'
import Drag from './drag'
import './coverimage.css'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
        this.state = {
            width: "400px",
            height: "400px",
            text: [],
            font: [],
            color: [],
            bold: [],
            italics: [],
            underline: [],
            upldItems: [],
            keyItems: 0,
            upldImg: '',
            align: [],
            imgAndIllus: [
                {
                    key: 0,
                    element: (
                        <div className="d-flex flex-row justify-content-around w-100 mx-auto">
                            <input
                                type="file"
                                name="0"
                                onChange={this.handleUpldItems}
                                id="wallpaper"
                                className="mt-1 text-center form-control w-75"
                            />
                            <div className="mt-1 btn btn-danger" id="0" onClick={this.handleClose}>X</div>
                        </div>
                    )
                }
            ],
            keyImg: 0,
            feilds: [
                {
                    key: 0,
                    text: (
                        <input
                            type="text"
                            name="0"
                            onChange={this.handleText}
                            placeholder="Enter Text"
                            className="mt-3 text-center form-control w-75 mx-auto"
                        />
                    ),
                    utilities: (
                        <div className="mt-3 d-flex flex-row justify-content-around w-75  mx-auto">
                            <input type="button" className="btn btn-dark" id="false" name="0" onClick={this.handleBold} value="B" />
                            <input type="button" className="btn btn-dark" id="false" name="0" onClick={this.handleItalics} value="I" />
                            <input type="button" className="btn btn-dark" id="false" name="0" onClick={this.handleUnderline} value="U" />
                            <select
                                onChange={this.handleAlign}
                                name="0"
                                // placeholder="Select Background"
                                className="text-center form-control w-25 text-dark"
                            >
                                <option>Left</option>
                                <option>Center</option>
                                <option>Right</option>
                            </select>
                        </div>
                    ),
                    fontAndColor: (
                        <div id="line" className="mt-3 d-flex flex-row justify-content-around w-100">
                            <input
                                type="text"
                                name="0"
                                onChange={this.handleFont}
                                placeholder="Font Size(in px)"
                                className="text-center form-control w-50"
                            />
                            <input
                                type="color"
                                name="0"
                                onChange={this.handleColor}
                                placeholder="Color"
                                className="text-center form-control w-25"
                            />
                        </div>
                    )
                }
            ],
            keyVal: 0,
        }
    }
    // methods defined
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
        // let newText = e.target.value;
        let textArr = this.state.text;
        textArr[parseInt(e.target.name)] = e.target.value;
        // console.log(1,this.state.text);
        this.setState({
            // text: [...this.state.text, newText]
            text: textArr
        })
        // console.log(9,this.state.text);
    }
    handleFont = (e) => {
        // let newFont = e.target.value;
        let fontArr = this.state.font;
        fontArr[parseInt(e.target.name)] = e.target.value;
        this.setState({
            // font: [...this.state.font, newFont]
            font: fontArr
        })
        // console.log(this.state.font);
    }
    handleColor = (e) => {
        // let newColor = e.target.value;
        let colorArr = this.state.color;
        colorArr[parseInt(e.target.name)] = e.target.value;
        this.setState({
            // color: [...this.state.color, newColor]
            color: colorArr
        })
        console.log(1.00, e.target.name);
    }
    handleBold = (e) => {
        if (e.target.id === "false") {
            e.target.id = "true";
            // let bold = "bold";
            let boldArr = this.state.bold;
            boldArr[parseInt(e.target.name)] = "bold";
            this.setState({
                bold: boldArr
            })
            // console.log(boldArr,e.target.name);
            console.log(e.target.name);
        } else {
            e.target.id = "false";
            // let bold = "normal";
            let boldArr = this.state.bold;
            boldArr[parseInt(e.target.name)] = "normal";
            this.setState({
                bold: boldArr
            })
        }
    }
    handleItalics = (e) => {
        if (e.target.id === "false") {
            e.target.id = "true";
            // let italics = "italic";
            let italicsArr = this.state.italics;
            italicsArr[parseInt(e.target.name)] = "italic";
            this.setState({
                italics: italicsArr
            })
            console.log(e.target);
            // this.setState({
            //     italics
            // })
        } else {
            e.target.id = "false";
            // let italics = "normal";
            let italicsArr = this.state.italics;
            italicsArr[parseInt(e.target.name)] = "normal";
            this.setState({
                italics: italicsArr
            })
            // this.setState({
            //     italics
            // })
        }
        // console.log(3,e.target.id);
    }
    handleUnderline = (e) => {
        if (e.target.id === "false") {
            e.target.id = "true";
            // let underline = "underline";
            let underlineArr = this.state.underline;
            underlineArr[parseInt(e.target.name)] = "underline";
            this.setState({
                underline: underlineArr
            })
            // this.setState({
            //     underline
            // })
        } else {
            e.target.id = "false";
            // let underline = "none";
            let underlineArr = this.state.underline;
            underlineArr[parseInt(e.target.name)] = "none";
            this.setState({
                underline: underlineArr
            })
            // this.setState({
            //     underline
            // })
        }
        // console.log(3,e.target.id);
    }
    handleAlign = (e) => {
        let alignArr = this.state.align;
        alignArr[parseInt(e.target.name)] = e.target.value;
        this.setState({
            align: alignArr
        })
        // this.setState({
        //     align: e.target.value
        // })
        // console.log(this.state.text);
    }
    handleAddFeild = (e) => {
        let key = parseInt(this.state.keyVal + 1);
        let newFeild = {
            key: key,
            text: (
                <input
                    type="text"
                    name={key}
                    onChange={this.handleText}
                    placeholder="Enter Text"
                    className="mt-3 text-center form-control w-75 mx-auto"
                />
            ),
            utilities: (
                <div className="mt-3 d-flex flex-row justify-content-around w-75 mx-auto">
                    <input type="button" className="btn btn-dark" id="false" name={key} onClick={this.handleBold} value="B" />
                    <input type="button" className="btn btn-dark" id="false" name={key} onClick={this.handleItalics} value="I" />
                    <input type="button" className="btn btn-dark" id="false" name={key} onClick={this.handleUnderline} value="U" />
                    <select
                        onChange={this.handleAlign}
                        name={key}
                        // placeholder="Select Background"
                        className="text-center form-control w-25 text-dark"
                    >
                        <option>Left</option>
                        <option>Center</option>
                        <option>Right</option>
                    </select>
                </div>
            ),
            fontAndColor: (
                <div className="mt-3 d-flex flex-row justify-content-around w-100">
                    <input
                        type="text"
                        name={key}
                        onChange={this.handleFont}
                        placeholder="Font Size(in px)"
                        className="text-center form-control w-50"
                    />
                    <input
                        type="color"
                        name={key}
                        onChange={this.handleColor}
                        placeholder="Color"
                        className="text-center form-control w-25"
                    />
                </div>
            )
        }
        this.setState({
            feilds: [...this.state.feilds, newFeild],
            keyVal: key
        })
        // console.log(typeof this.state.keyVal);
    }
    handleWallpaper = (event) => {
        var src = this.state.upldImg;
        src = URL.createObjectURL(event.target.files[0]);
        this.setState({
            upldImg: src
        })
        // console.log(src);
    }
    handleAddImageAndIllustration = (e) => {
        let key = parseInt(this.state.keyImg + 1);
        let newFeild = {
            key: key,
            element: (
                <div className="mt-2 d-flex flex-row justify-content-around w-100 mx-auto">
                    <input
                        type="file"
                        name={key}
                        onChange={this.handleUpldItems}
                        id="wallpaper"
                        className="text-center form-control w-75"
                    />
                    <div className="btn btn-danger" id={key} onClick={this.handleClose}>X</div>
                </div>
            )
        }
        this.setState({
            imgAndIllus: [...this.state.imgAndIllus, newFeild],
            keyImg: key
        })
        console.log(this.state.keyImg);
    }
    handleClose = (e) => {
        let id = parseInt(e.target.id);
        let newArr = this.state.imgAndIllus.filter(element => id !== element.key);
        let newUpldItemsArr = this.state.upldItems.filter(element => id !== element.key );
        this.setState({
            imgAndIllus: newArr,
            upldItems: newUpldItemsArr
        })
    }
    handleUpldItems = (event) => {
        let src = URL.createObjectURL(event.target.files[0]);
        let key = parseInt(this.state.keyItems);
        let newObject = {
            key: key,
            src: src
        }
        key = key + 1;
        this.setState({
            upldItems: [...this.state.upldItems, newObject],
            keyItems : key
        })
        console.log(this.state.upldItems);
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row mx-auto">
                    <div className="col-xl-3 col-lg-4 col-md-4 border mt-4">
                        <div className="my-4 text-center d-flex flex-column align-items-center">
                            <h2>Wishes</h2>
                            <h6 className="mt-2">Hoping to help you make anything<br />according to you</h6>
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
                            {this.state.feilds.map((element, id) => {
                                return (
                                    <div key={id} className="line w-75">
                                        {element.text}
                                        {element.utilities}
                                        {element.fontAndColor}
                                    </div>
                                )
                            })}
                            <div
                                className="mt-4 btn btn-dark w-75"
                                onClick={this.handleAddFeild}
                            >
                                Add Another Text Feild
                            </div>
                            {/* image as bg */}
                            <h5 className="mt-3">-- choose for bg --</h5>
                            <div className="d-flex flex-row justify-content-around w-100 mx-auto">
                                <input
                                    type="file"
                                    onChange={this.handleWallpaper}
                                    // id="wallpaper"
                                    className="mt-1 text-center form-control w-75"
                                />
                                {/* <div className=" mt-1 btn btn-danger">X</div> */}
                            </div>
                            {/* image as image or illustration */}
                            <h5 className="mt-3">-- choose for illus --</h5>
                            {this.state.imgAndIllus.map((feild, id) => {
                                return (
                                    <div key={id}>
                                        {feild.element}
                                    </div>
                                )
                            })}
                            <div className="mt-3 btn btn-dark" onClick={this.handleAddImageAndIllustration}>
                                Add image or illustration
                            </div>
                            <select
                                // onChange={this.handleAlign}
                                // name={key}
                                value="download"
                                className="text-center form-control w-25 text-dark mt-3"
                            >
                                <option>JPG</option>
                                <option>PNG</option>
                            </select>
                            <div className="mt-3 btn btn-dark" onClick={this.handleDownload}>
                                Download
                            </div>
                        </div>
                    </div>

                    {/* white space to display everything */}
                    <div className="col-xl-9 col-lg-8 col-md-8 d-flex flex-row justify-content-center align-items-center">
                        <div className="my-4">
                            <div
                                className={`border img-fluid ${this.state.bg}`}
                                id="wallpaper"
                                style={{
                                    width: `${this.state.width}`,
                                    height: `${this.state.height}`,
                                    backgroundImage: `url(${this.state.upldImg})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <Drag ref={this.componentRef} data={this.state} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}