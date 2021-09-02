import React, { Component } from 'react'
import Drag from './drag'
import Download from './Download'

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
            align: [],
            downloadChoice: 'PNG',
            // upload images 
            upldItems: [],
            keyItems: 0,
            // wallpaper
            upldImg: '',
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
                            <div className="mt-1 btn btn-danger" id="0" onClick={this.handleClose}>
                                <i className="fas fa-times pt-2"></i>
                            </div>
                        </div>
                    )
                }
            ],
            // key for upload img
            keyImg: 0,
            // key for field
            keyVal: 0,
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
                            <input type="button" className="btn btn-dark" id="false" name="0" onClick={this.handleBold} value="B"/>
                            <input type="button" className="btn btn-dark" id="false" name="0" onClick={this.handleItalics} value="I" />
                            <input type="button" className="btn btn-dark" id="false" name="0" onClick={this.handleUnderline} value="U" />
                            <select
                                onChange={this.handleAlign}
                                name="0"
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
            tobeDownloaded: <Drag data={this.state} />,
        }
    };

    // methods defined
    handleWidth = (e) => {
        let width = `${e.target.value}px`;
        this.setState({
            width
        })
    }
    handleHeight = (e) => {
        let height = `${e.target.value}px`;
        this.setState({
            height
        })
    }

    handleText = (e) => {
        let textArr = this.state.text;
        textArr[parseInt(e.target.name)] = e.target.value;
        this.setState({
            text: textArr
        })
    }

    handleFont = (e) => {
        let fontArr = this.state.font;
        fontArr[parseInt(e.target.name)] = e.target.value;
        this.setState({
            font: fontArr
        })
    }

    handleColor = (e) => {
        let colorArr = this.state.color;
        colorArr[parseInt(e.target.name)] = e.target.value;
        this.setState({
            color: colorArr
        })
    }

    handleBold = (e) => {
        if (e.target.id === "false") {
            e.target.id = "true";
            let boldArr = this.state.bold;
            boldArr[parseInt(e.target.name)] = "bold";
            this.setState({
                bold: boldArr
            })
        } else {
            e.target.id = "false";
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
            let italicsArr = this.state.italics;
            italicsArr[parseInt(e.target.name)] = "italic";
            this.setState({
                italics: italicsArr
            })
        } else {
            e.target.id = "false";
            let italicsArr = this.state.italics;
            italicsArr[parseInt(e.target.name)] = "normal";
            this.setState({
                italics: italicsArr
            })
        }
    }

    handleUnderline = (e) => {
        if (e.target.id === "false") {
            e.target.id = "true";
            let underlineArr = this.state.underline;
            underlineArr[parseInt(e.target.name)] = "underline";
            this.setState({
                underline: underlineArr
            })
        } else {
            e.target.id = "false";
            let underlineArr = this.state.underline;
            underlineArr[parseInt(e.target.name)] = "none";
            this.setState({
                underline: underlineArr
            })
        }
    }

    handleAlign = (e) => {
        let alignArr = this.state.align;
        alignArr[parseInt(e.target.name)] = e.target.value;
        this.setState({
            align: alignArr
        })
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
    }

    handleWallpaper = (event) => {
        var src = this.state.upldImg;
        src = URL.createObjectURL(event.target.files[0]);
        this.setState({
            upldImg: src
        })
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
                    <div className="btn btn-danger" id={key} onClick={this.handleClose}>
                        <i className="fas fa-times pt-2"></i>
                    </div>
                </div>
            )
        }
        this.setState({
            imgAndIllus: [...this.state.imgAndIllus, newFeild],
            keyImg: key
        })
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
    }


    render() {
        console.log(this.state.upldItems, this.state.imgAndIllus)
        return (
            <div className="container-fluid">
                <div className="row mx-auto">
                    <div className="col-xl-4 col-lg-4 col-md-4 border mt-4 mb-5">
                        <div className="mt-4 mb-4 text-center d-flex flex-column align-items-center">
                            <h2>Creator</h2>
                            <h6 className="mt-2">Hoping to help you make anything<br />according to you</h6>
                            <div className="d-flex flex-row justify-content-around w-100">
                                <input
                                    type="number"
                                    onChange={this.handleWidth}
                                    placeholder="Enter Width"
                                    className="mt-3 mr-2 text-center form-control w-50"
                                />
                                <input
                                    type="number"
                                    onChange={this.handleHeight}
                                    placeholder="Enter Height"
                                    className="mt-3 ml-2 text-center form-control w-50"
                                />
                            </div>
                            {this.state.feilds.map((element, id) => {
                                return (
                                    <div key={id} className="line w-100">
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
                                    className="mt-1 text-center form-control w-75"
                                />
                            </div>

                            {/* image as image or illustration */}
                            <h5 className="mt-3">-- choose for illus --</h5>
                            {this.state.imgAndIllus.map((feild) => {
                                return (
                                    <div key={feild.key}>
                                        {feild.element}
                                    </div>
                                )
                            })}
                            
                            <div className="mt-3 btn btn-dark" onClick={this.handleAddImageAndIllustration}>
                                Add image or illustration
                            </div>
                            <select
                                onClick = {(e) => {
                                    console.log(e.target.value)
                                    this.setState({
                                        downloadChoice: e.target.value
                                    })
                                }}
                                className="text-center form-control w-25 text-dark mt-3"
                            >
                                
                                <option value="PNG">PNG</option>
                                <option value="JPG">JPG</option>
                                
                            </select>

                            <Download options={this.state} compref={this.componentRef}/>
                        </div>
                    </div>

                    {/* space to display everything */}
                    <div className="col-xl-8 col-lg-8 col-md-8 d-flex flex-row justify-content-center my-5">
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
