import React from 'react'
import { ResizableBox as ReactResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

export default function resize() {
    
    return (
        <div>
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
                                    style={{position: "absolute", top: 0, cursor:"grab", zIndex: 15}}
                                >
                                    <img src={obj.src} width={75} height={75} alt="img"/>                            
                                </ResizableBox>
                            </Draggable>
                        </div>
                    )
                });
            }
        </div>
    )
}
