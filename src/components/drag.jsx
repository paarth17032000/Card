import React, { Component } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import "./coverimage.css";
import Birthday from "../images/birthday_cake.jpg";

export default class Drag extends Component {    
  state = {
    width: 200,
    height: 200,
    absoluteWidth: 200,
    absoluteHeight: 200,
    keyGen: 0,
  };
  onResizeAbsolute = (event, { element, size, handle }) => {
    this.setState((state) => {
      let newLeft = state.absoluteLeft;
      let newTop = state.absoluteTop;
      const deltaHeight = size.height - state.absoluteHeight;
      const deltaWidth = size.width - state.absoluteWidth;
      if (handle[0] === "n") {
        newTop -= deltaHeight;
      } else if (handle[0] === "s") {
        newTop += deltaHeight;
      }
      if (handle[handle.length - 1] === "w") {
        newLeft -= deltaWidth;
      } else if (handle[handle.length - 1] === "e") {
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
      return (
        <div key={key}>
          <Draggable
            axis="both"
            handle=".handle"
            // bounds="parent"
            // style={{position: "absolute", top: 0, cursor:"grab", zIndex: 10}}
          >
            <ResizableBox
              className="box"
              width={100}
              height={100}
              // minConstraints={[50,50]}
              // maxConstraints={[Infinity,Infinity]}
              style={{
                position: "absolute",
                top: "2.5%",
                cursor: "grab",
                zIndex: 10,
              }}
            >
              <div
                className="handle"
                style={{
                  fontSize: `${data.font[key]}px`,
                  color: `${data.color[key]}`,
                  fontWeight: `${data.bold[key]}`,
                  fontStyle: `${data.italics[key]}`,
                  textDecoration: `${data.underline[key]}`,
                  textAlign: `${data.align[key]}`,
                  position: "absolute",
                  top: 0,
                }}
              >
                {text}
              </div>
            </ResizableBox>
          </Draggable>
        </div>
      );
    });

    // to create uploaded images or illustrations
    var upldItems;
    if (data.upldItems.length) {
      upldItems = data.upldItems.map((obj, key) => {
        return (
          <Draggable
            axis="both"
            handle="img"
            key={key}
            style={{
              position: "relative",
            }}
            onResize={this.onResizeAbsolute}
          >
            <ResizableBox
              className="box"
              resizeHandles={["se"]}
              width={this.state.absoluteWidth}
              height={this.state.absoluteHeight}
              style={{
                position: "absolute",
                top: 0,
                cursor: "grab",
                zIndex: 15,
                width: `${this.state.absoluteWidth}px`,
                height: `${this.state.absoluteHeight}px`,
              }}
            >
              <img src={obj.src} className="img-fluid" alt="img" />
            </ResizableBox>
          </Draggable>
        );
      });
    }
    return (
      <div>
        {details}
        {upldItems}
        <img
          className={`border ${this.state.bg}`}
          id="wallpaper"
          alt="place to design your own thoughts"
          src={data.upldImg? data.upldImg: Birthday}
          width={data.width ? data.width + "px" : "800px"}
          height={data.height ? data.height + "px" : "800px"}          
        />
      </div>
    );
  }
}
