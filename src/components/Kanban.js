import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";

function Kanban({ data }) {
  const [lists, setList] = useState(data);
  const [dragging, setDragging] = useState(false);
  const dragItem = useRef();
  const dragNode = useRef();

  const handleDragStart = (e, params) => {
    console.log("drag starting..", params);
    dragItem.current = params;
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (e, params) => {
    console.log("Entering drag..", params);
    const currItem = dragItem.current;
    setList((oldList) => {
      let newList = JSON.parse(JSON.stringify(oldList));
      newList[params.gIndex].items.splice(
        params.iIndex,
        0,
        newList[currItem.gIndex].items.splice(currItem.iIndex, 1)[0]
      );
      dragItem.current = params;
      return newList;
    });
  };

  const handleDragEnd = () => {
    console.log("Ending drag..");
    setDragging(false);
    dragNode.current.removeEventListener("dragend", handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
  };

  const getStyles = (params) => {
    const currItem = dragItem.current;
    if (
      currItem.gIndex === params.gIndex &&
      currItem.iIndex === params.iIndex
    ) {
      return "current list-item";
    }
    return "list-item";
  };

  return (
    <div className="list-space">
      {lists.map((list, gIndex) => {
        return (
          <div
            key={gIndex}
            className="list"
            onDragEnter={
              dragging && !list.items.length
                ? (e) => handleDragEnter(e, { gIndex, iIndex: 0 })
                : null
            }
          >
            <div className="list-title">
              <h6 className="list-text">{list.title}</h6>
              <FontAwesomeIcon
                icon={solid("ellipsis")}
                size="xl"
                className="list-options"
              />
            </div>
            {list.items.map((item, iIndex) => {
              return (
                <div
                  draggable
                  onDragStart={(e) => {
                    handleDragStart(e, { gIndex, iIndex });
                  }}
                  onDragEnter={
                    dragging
                      ? (e) => {
                          handleDragEnter(e, { gIndex, iIndex });
                        }
                      : null
                  }
                  key={iIndex}
                  className={
                    dragging ? getStyles({ gIndex, iIndex }) : "list-item"
                  }
                >
                  {item}
                </div>
              );
            })}
            <div className="row add-card">
              <FontAwesomeIcon icon={solid("plus")} />
              <h6 className="add-text">Add a card</h6>
            </div>
          </div>
        );
      })}
      <div className="row add-list">
        <FontAwesomeIcon icon={solid("plus")} />
        <h6 className="add-text">Add another list</h6>
      </div>
    </div>
  );
}

export default Kanban;
