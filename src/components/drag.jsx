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
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         width: 100,
    //         height: 100,
    //         absoluteWidth: [],
    //         absoluteHeight: [],
    //         keyGen: 0
    //     }
    // } 
    state = {
        width: 200,
        height: 200,
        absoluteWidth: 200,
        absoluteHeight: 200,
        keyGen: 0,
    }
    onResizeAbsolute = (event, {element, size, handle}) => {
        // console.log(event);
        console.log(1,parseInt(event.target.parentNode.parentNode.key));
        // let key = this.props.upldItems;
        this.setState((state) => {
          let keyGen = state.keyGen;
        //   console.log(state.keyGen);
          let newLeft = state.absoluteLeft;
          let newTop = state.absoluteTop;
          const deltaHeight = size.height - state.absoluteHeight;
          const deltaWidth = size.width - state.absoluteWidth;
          if (handle[0] === 'n') {
            newTop= deltaHeight;
          } else if (handle[0] === 's') {
            newTop += deltaHeight;
          }
          if (handle[handle.length - 1] === 'w') {
            newLeft -= deltaWidth;
          } else if (handle[handle.length - 1] === 'e') {
            newLeft += deltaWidth;
          }
          
          return {
            // absoluteWidth: [...state.absoluteWidth,size.width[keyGen]],
            // absoluteHeight: [...state.absoluteHeight,size.height[keyGen]],
            // keyGen: keyGen + 1
            absoluteWidth: size.width,
            absoluteHeight: size.height
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
                                // id={this.state.keyGen}
                                resizeHandles={['se']}
                                minConstraints={[50,50]}
                                maxConstraints={[Infinity,Infinity]}
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
