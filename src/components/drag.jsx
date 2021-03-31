import React, { Component } from 'react'
import Draggable from 'react-draggable'
import { ResizableBox } from 'react-resizable'
import "react-resizable/css/styles.css"
import './coverimage.css'

export default class Drag extends Component {
    render() {
        const { data } = this.props;
        // to create draggable content
        let details = data.text.map((text, key) => {
            return(
                <div key={key}>
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
                            style={{position: "absolute", top: 0, cursor:"grab", zIndex: 10}}
                        >
                            <div 
                                className="handle"
                                style={{fontSize: `${data.font[key]}px`,
                                        color: `${data.color[key]}`,
                                        fontWeight: `${data.bold[key]}`,
                                        fontStyle: `${data.italics[key]}`,
                                        textDecoration: `${data.underline[key]}`,
                                        textAlign:`${data.align[key]}`,
                                        position: "absolute",
                                        top: 0
                                    }}
                                >
                                {text}
                            </div>
                        </ResizableBox>
                    </Draggable>
                </div>
            )
        });

// to create uploaded images or illustrations
        var upldItems;
        if(data.upldItems.length){
            upldItems = data.upldItems.map((obj,key) => {
                return(
                    <div key={key}>
                        <Draggable
                            axis="both"
                            handle="img"
                        >
                            <ResizableBox
                                className="box"
                                width={100}
                                height={100}
                                minConstraints={[50,50]}
                                maxConstraints={[Infinity,Infinity]}
                                style={{position: "absolute", top: 0, cursor:"grab", zIndex: 10}}
                            >
                                <img src={obj.src} width={75} height={75} alt="img"/>                            
                            </ResizableBox>
                        </Draggable>
                    </div>
                )
            });
        }

        return (
            <div>
                {details}
                {upldItems}
            </div>
        )
    }
}
