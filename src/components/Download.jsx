import React, { Component } from 'react'
import { exportComponentAsJPEG, exportComponentAsPNG } from 'react-component-export-image'

export default class Download extends Component {
    constructor(props){
        super(props);
        this.componentRef = React.createRef();
    }
    render() {
        const {options} = this.props;
        return (
            <div>
                <input
                    type="button"
                    onClick={() => {
                        options.downloadChoice === "PNG" ? exportComponentAsPNG(this.props.compref) : exportComponentAsJPEG(this.props.compref);
                    }}
                    className="mt-3 btn btn-dark"
                    value="Download"
                />
            </div>
        );
    }
}
