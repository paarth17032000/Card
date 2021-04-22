import React, { Component } from 'react'
import { exportComponentAsJPEG, exportComponentAsPNG } from 'react-component-export-image'

export default class Download extends Component {
    constructor(props){
        super(props);
        this.componentRef = React.createRef();

        this.state = {}
    }
    render() {
        const {options} = this.props;
        return (
            <input
                type="button"
                onClick={() => {
                    options.downloadChoice === "PNG" ? exportComponentAsPNG(this.props.componentRef) : exportComponentAsJPEG(this.props.componentRef)
                }} 
                className="mt-3 btn btn-dark"
                value="Download"
            />
        );
    }
}
