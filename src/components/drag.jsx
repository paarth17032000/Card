import React, { Component } from 'react'
import Draggable from 'react-draggable'
import { ResizableBox } from 'react-resizable'
import ResizeImage from 'react-resize-image'
import "react-resizable/css/styles.css"
import './coverimage.css'

export default class Drag extends Component {
    render() {
        const { data } = this.props;
        // console.log(data);
        
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
        console.log(data.upldItems);

        // var upldItems;

        // if(data.UpldItems){
        //     upldItems = data.UpldItems.map((src,key) => {
        //         return(
        //             <div key={key}>
        //                 <Draggable 
        //                     axis="both"
        //                     handle=".handle"
        //                 >
        //                     <ResizableBox
        //                         className="box"
        //                         width={100}
        //                         height={100}
        //                         minConstraints={[50,50]}
        //                         maxConstraints={[Infinity,Infinity]}
        //                         style={{position: "absolute", top: 0, cursor:"grab", zIndex: 10}}
        //                     >
        //                         <div 
        //                             className="handle"
        //                             style={{position: "absolute",
        //                                     top: 0,
        //                                     zIndex: 10,
        //                                     width: '100%'
        //                                 }}
        //                             >
        //                             <img src={src} />
        //                         </div>
        //                     </ResizableBox>
        //                 </Draggable>
        //             </div>
        //         )
        //     });
        // }

        // let object = (
        //     <div>
        //         <Draggable 
        //             axis="both"
        //             handle=".handle"
        //         >
        //             <ResizableBox
        //                 className="box"
        //                 width={110}
        //                 height={110}
        //                 minConstraints={[25,25]}
        //                 maxConstraints={[Infinity,Infinity]}
        //                 style={{position: "absolute", top: 0, cursor:"grab", zIndex: 10}}
        //             >
        //                 <div
        //                     style={{position: "absolute",
        //                             top: 0,
        //                             cursor:"grab"
        //                     }}
        //                 >
        //                     <img 
        //                         className="handle"
        //                         id="img"
        //                         style={{position: "absolute",
        //                                 top: 0,
        //                                 zIndex: 10,
        //                             }}
        //                         width="100px"
        //                         height="100px"
        //                         src={data.upldItems[0]}
        //                     />
        //                 </div>
        //             </ResizableBox>
        //         </Draggable>
        //     </div>
        // )
        
        var img;
        if(data.upldItems[0]){
            img = (
                <ResizeImage
                    src={data.upldItems[0]}
                    alt="Tsunami bt hokusai"
                    options={{
                        width: 100
                    }}
                />
            )
        }
        

        return (
            <div>
                {details}
                {/* {upldItems} */}
                {/* {object} */}
                {img}
            </div>
        )
    }
}


// export default class Drag extends Component {
//     render() {
//         const { data } = this.props;
 
//         return (
//             <div>
//                 <Draggable 
//                     axis="both"
//                     handle=".handle"
//                 >
//                     <ResizableBox
//                         className="box"
//                         width={100}
//                         height={100}
//                         minConstraints={[50,50]}
//                         maxConstraints={[Infinity,Infinity]}
//                         style={{position: "absolute", top: 0, cursor:"grab"}}
//                     >
//                         <div 
//                             className="handle"
//                             style={{fontSize: `${data.font}px`,
//                                     color: `${data.color}`,
//                                     fontWeight: `${data.bold}`,
//                                     fontStyle: `${data.italics}`,
//                                     textDecoration: `${data.underline}`,
//                                     textAlign:`${data.align}`
//                                 }}
//                         >
//                             {data.text}
//                         </div>
//                     </ResizableBox>
//                 </Draggable>
//             </div> 
//         )
//     }
// }


