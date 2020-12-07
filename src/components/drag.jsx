import React, { Component } from 'react'
import Draggable from 'react-draggable'
import { ResizableBox } from 'react-resizable'

export default class Drag extends Component {
    render() {
        return (
            <div>
                <Draggable 
                    axis="both"
                    handle=".handle"
                    // defaultPosition={{ x: 0, y: 0 }}
                    // position={null}
                    // grid={[50, 50]}
                    // scale={3}
                    // onStart={handleStart}
                    // onDrag={handleDrag}
                    // onStop={handleStop}
                    // handle=".handle"
                    >
                    <ResizableBox
                        className="handle"
                        width={100}
                        height={100}
                        minConstraints={[50,50]}
                        style={{position: "absolute", top: 0, cursor:"grab"}}
                    >
                        <div className="handle">hey there</div>
                    </ResizableBox>
                </Draggable>
            </div>
        )
    }
}
