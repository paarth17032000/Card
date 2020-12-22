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
                        width={150}
                        height={150}
                        minConstraints={[50,50]}
                        handleSize={[8,8]}
                        resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}
                        style={{position: "absolute", top: 0, cursor:"grab"}}
                    >
                        <div className="handle">
                            draggable component
                        </div>
                    </ResizableBox>
                </Draggable>
            </div>
        )
    }
}
