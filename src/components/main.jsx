import React, { Component } from 'react'
import Drag from './drag'

export default class Main extends Component {
    constructor(props){
        super(props);
        this.componentRef = React.createRef();
    }
    render() {
        return (
            <div>
                <Drag ref={this.componentRef} />
            </div>
        )
    }
}
