import React, { Component } from 'react'
import Draggable from 'react-draggable'
import { ResizableBox } from 'react-resizable'
import "react-resizable/css/styles.css";
import './coverimage.css'

export default class Drag extends Component {
    render() {
        const { data } = this.props; 
        // const { Text, Font, Color} = data;
        return (
            <div>
                <Draggable 
                    axis="both"
                    handle=".handle"
                    >
                    <ResizableBox
                        className="box"
                        width={100}
                        height={100}
                        minConstraints={[50,50]}
                        maxConstraints={[Infinity,Infinity]}
                        style={{position: "absolute", top: 0, cursor:"grab"}}
                    >
                        <div 
                            className="handle"
                            style={{fontSize: `${data.font}px`,
                                    color: `${data.color}`,
                                    fontWeight: `${data.bold}`,
                                    fontStyle: `${data.italics}`,
                                    textDecoration: `${data.underline}`,
                                    // textAlign:'right'
                                }}
                            >
                            {data.text}
                        </div>
                    </ResizableBox>
                </Draggable>
            </div>
        )
    }
}
