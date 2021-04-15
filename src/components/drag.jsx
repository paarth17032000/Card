import React, { Component } from 'react'
import Draggable from 'react-draggable'
import { ResizableBox } from 'react-resizable'
import "react-resizable/css/styles.css"
import './coverimage.css'

// export default class Drag extends Component {
//     render() {
//         const { data } = this.props;
//         // to create draggable content
//         let details = data.text.map((text, key) => {
//             return(
//                 <div key={key}>
//                     <Draggable 
//                         axis="both"
//                         handle=".handle" 
//                         bounds="parent"
//                     >
//                         <ResizableBox
//                             className="box"
//                             width={100}
//                             height={100}
//                             minConstraints={[50,50]}
//                             maxConstraints={[Infinity,Infinity]}
//                             style={{position: "absolute", top: 0, cursor:"grab", zIndex: 10}}
//                         >
//                             <div 
//                                 className="handle"
//                                 style={{fontSize: `${data.font[key]}px`,
//                                         color: `${data.color[key]}`,
//                                         fontWeight: `${data.bold[key]}`,
//                                         fontStyle: `${data.italics[key]}`,
//                                         textDecoration: `${data.underline[key]}`,
//                                         textAlign:`${data.align[key]}`,
//                                         position: "absolute",
//                                         top: 0
//                                     }}
//                                 >
//                                 {text}
//                             </div>
//                         </ResizableBox>
//                     </Draggable>
//                 </div>
//             )
//         });

// // to create uploaded images or illustrations
//         var upldItems;
//         if(data.upldItems.length){
//             upldItems = data.upldItems.map((obj,key) => {
//                 return(
//                     <div key={key}>
//                         <Draggable
//                             axis="both"
//                             handle="img"
//                         >
//                             <ResizableBox
//                                 className="box"
//                                 width={100}
//                                 height={100}
//                                 minConstraints={[50,50]}
//                                 maxConstraints={[Infinity,Infinity]}
//                                 style={{position: "absolute", top: 0, cursor:"grab", zIndex: 15}}
//                             >
//                                 <img src={obj.src} width={75} height={75} alt="img"/>                            
//                             </ResizableBox>
//                         </Draggable>
//                     </div>
//                 )
//             });
//         }

//         return (
//             <div>
//                 {details}
//                 {upldItems}
//             </div>
//         )
//     }
// }

export default class Drag extends Component {
    state = {
        width: 200,
        height: 200,
        absoluteWidth: 200,
        absoluteHeight: 200,
        absoluteLeft: 0,
        absoluteTop: 0,
    }
    // handleResize = (event, {element, size, handle}) => {
    //     this.setState({
    //         width: size.width,
    //         height: size.height
    //     })
    // }
    onResizeAbsolute = (event, {element, size, handle}) => {
        this.setState((state) => {
          let newLeft = state.absoluteLeft;
          let newTop = state.absoluteTop;
          const deltaHeight = size.height - state.absoluteHeight;
          const deltaWidth = size.width - state.absoluteWidth;
          if (handle[0] === 'n') {
            newTop -= deltaHeight;
          } else if (handle[0] === 's') {
            newTop += deltaHeight;
          }
          if (handle[handle.length - 1] === 'w') {
            newLeft -= deltaWidth;
          } else if (handle[handle.length - 1] === 'e') {
            newLeft += deltaWidth;
          }
    
          return {
            absoluteWidth: size.width,
            absoluteHeight: size.height,
            absoluteLeft: newLeft,
            absoluteTop: newTop,
          };
        });
      };
    render() {
        const { data } = this.props;
        // to create draggable content
        let details = data.text.map((text, key) => {
            return(
                <div key={key}>
                    <Draggable 
                        axis="both"
                        handle=".handle" 
                        bounds="parent"
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
                                width={this.state.absoluteWidth}
                                height={this.state.absoluteHeight}
                                onResize={this.onResizeAbsolute}
                                resizeHandles={['se']}
                                // minConstraints={[50,50]}
                                // maxConstraints={[Infinity,Infinity]}
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    cursor:"grab",
                                    zIndex: 15,
                                }}
                            >
                                <img 
                                    src={obj.src} 
                                    className="img-fluid px-3"
                                    style = {{
                                        width: `${this.state.absoluteWidth}px`,
                                        height: `${this.state.absoluteHeight}ps`
                                    }}
                                    // width={this.state.width} 
                                    // height={this.state.height} 
                                    alt="img"/>     
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
