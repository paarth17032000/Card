import React, { Component } from 'react'
import { exportComponentAsJPEG, exportComponentAsPNG } from 'react-component-export-image'

export default class Download extends Component {
    constructor(props){
        super(props);
        this.componentRef = React.createRef();
    }
    removeHandlers(){
        let handlerColl = document.getElementsByClassName('react-resizable-handle-se');
        for(let i=0;i<handlerColl.length;i++){
            handlerColl[i].style.width="0%";
        }
    }
    showHandlers(){
        let handlerColl = document.getElementsByClassName('react-resizable-handle-se');
        for(let i=0;i<handlerColl.length;i++){
            handlerColl[i].style.width="100%";
        }
    }
    render() {
        const {options} = this.props;
        return (
            <div>
                <input
                    type="button"
                    onClick={() => {
                        this.removeHandlers();
                        options.downloadChoice === "PNG" ? exportComponentAsPNG(this.props.compref) : exportComponentAsJPEG(this.props.compref);
                        this.showHandlers();
                    }}
                    className="mt-3 btn btn-dark"
                    value="Download"
                />
            </div>
        );
    }
}
