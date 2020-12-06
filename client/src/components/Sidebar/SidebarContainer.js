import "./SidebarContainer.css";

import React from "react";

import ToggleHelper from './ToggleHelper'



export const SidebarContainer = ({ width, height, children }) => {

 const forceUpdateHandler = () =>{
    this.forceUpdate();
  };

  const [xPosition, setX] = React.useState(-width);
  const [toggle, setToggle] = React.useState(false);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
      setToggle(false);
    } else {
      setX(-width);
      setToggle(true);
    }
  };


  React.useEffect(() => {
    setX(0);
  }, []);

  return (
    <React.Fragment>
      
      <div
        className="side-bar"
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height
        }}>
      
          <button
            onClick={() => toggleMenu()}
            className="toggle-menu"
            style={{
              transform: `translate(${width}px, 20vh)`
            }}>
          </button>

          <ToggleHelper
            toggleStatus = {toggle}
            children = {children}
          />
      
      </div>

    </React.Fragment>
  );
};