import React, { Component } from 'react'
import { exportComponentAsJPEG, exportComponentAsPNG } from 'react-component-export-image'

export default class Download extends Component {
    constructor(props){
        super(props);
        this.componentRef = React.createRef();

        // this.state = {}
    }
    render() {
        const {options} = this.props;
        // const {compref} = this.props;
        // console.log(options);
        console.log(this.props.compref)
        // exportComponentAsPNG(this.props.compref)
        return (
            <div 
                // ref={this.props.compref}
            >
                <input
                type="button"
                onClick={() => {
                    options.downloadChoice === "PNG"
                    ? exportComponentAsPNG(this.props.compref)
                    : exportComponentAsJPEG(this.props.compref);
                    {
                    console.log(exportComponentAsPNG(this.props.compref));
                    }
                }}
                className="mt-3 btn btn-dark"
                value="Download"
                />
            </div>
            // <div ref={this.props.compref}>
            //     <input
            //     type="button"
            //     onClick={() => {
            //         options.downloadChoice === "PNG"
            //         ? exportComponentAsPNG(this.props.compref)
            //         : exportComponentAsJPEG(this.props.compref);
            //         {
            //         console.log(exportComponentAsPNG(this.props.compref));
            //         }
            //     }}
            //     className="mt-3 btn btn-dark"
            //     value="Download"
            //     />
            // </div>
            // <input
            //     type="button"
            //     onClick={() => {
            //         options.downloadChoice === "PNG" ? exportComponentAsPNG(this.props.compref) : exportComponentAsJPEG(this.props.compref)
            //         {console.log(exportComponentAsPNG(this.props.compref))}
            //     }} 
            //     className="mt-3 btn btn-dark"
            //     value="Download"
            // />
        );
    }
}
