import React, { Component } from 'react'
import Drag from './drag'

export default class Main extends Component {
    constructor(props){
        super(props);
        this.componentRef = React.createRef();
        this.state={
        
        }
    }
    render() {
        return (
            <div>
                <Drag ref={this.componentRef} />
                <input className="m-4"/>
            </div>
        )
    }
}
