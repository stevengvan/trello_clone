import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import "./Kanban.css";

function Kanban() {
  const [lists, setLists] = useState([
    {
      title: "To Do",
      items: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "testing 1 - 2 -3",
        "Hello World!",
        "Hello World!",
      ],
    },
    { title: "Doing", items: ["TEXT", "Totally not Trello"] },
    { title: "Done", items: [] },
  ]);
  const [listTitle, setListTitle] = useState("");
  const [toggleAddL, setToggleAddL] = useState(false);
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
    setLists((oldList) => {
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

  const addList = (e) => {
    if (listTitle.length > 0) {
      let newList = {
        title: listTitle,
        items: [],
      };
      setLists((oldList) => [...oldList, newList]);
      setListTitle("");
      e.target.blur();
    } else {
    }
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
              <button className="list-options">
                <FontAwesomeIcon icon={solid("ellipsis")} size="xl" />
              </button>
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
            <button className="row add-card">
              <FontAwesomeIcon icon={solid("plus")} size="xl" />
              <h6 className="add-text">Add a card</h6>
            </button>
          </div>
        );
      })}
      {toggleAddL ? (
        <div className="column add-list">
          <input
            type={"text"}
            className="add-input"
            value={listTitle}
            onChange={(e) => setListTitle(e.target.value)}
            placeholder="Enter list title..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addList(e);
              }
            }}
          />
          <div className="row add-buttons">
            <h6 className="add-text add-button" onClick={(e) => addList(e)}>
              Add list
            </h6>
            <FontAwesomeIcon
              icon={solid("xmark")}
              size="2xl"
              className="add-cancel"
              onClick={() => setToggleAddL(false)}
            />
          </div>
        </div>
      ) : (
        <button
          className="row add-list-button"
          onClick={() => setToggleAddL(true)}
        >
          <FontAwesomeIcon icon={solid("plus")} size="xl" />
          <h6 className="add-text">Add another list</h6>
        </button>
      )}
    </div>
  );
}

export default Kanban;
