import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import Card from "./Card";
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
  const [newList, setNewList] = useState(false);
  const [cardTitle, setCardTitle] = useState("");
  const [newCard, setNewCard] = useState(false);
  const [currList, setCurrList] = useState(null);
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
      newList[params.lIndex].items.splice(
        params.iIndex,
        0,
        newList[currItem.lIndex].items.splice(currItem.iIndex, 1)[0]
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
      currItem.lIndex === params.lIndex &&
      currItem.iIndex === params.iIndex
    ) {
      return "current list-item";
    }
    return "list-item";
  };

  const addList = () => {
    if (listTitle.length > 0) {
      let newList = {
        title: listTitle,
        items: [],
      };
      setLists((oldList) => [...oldList, newList]);
      setListTitle("");
      setTimeout(function () {
        var objDiv = document.getElementById("list-space");
        objDiv.scrollLeft = objDiv.scrollWidth;
      }, 75);
    }
  };

  const addCard = () => {
    if (cardTitle.length > 0) {
      lists[currList]["items"] = [...lists[currList]["items"], cardTitle];
      setCardTitle("");
      setTimeout(function () {
        var objDiv = document.getElementById(`list-scroll ${currList}`);
        objDiv.lastElementChild.scrollIntoView({
          behavior: "smooth",
          alignToTop: false,
        });
      }, 75);
    }
  };

  return (
    <div className="list-space" id="list-space">
      {/* <Card /> */}
      {lists.map((list, lIndex) => {
        return (
          <div
            key={lIndex}
            className="list"
            onDragEnter={
              dragging && !list.items.length
                ? (e) => handleDragEnter(e, { lIndex, iIndex: 0 })
                : null
            }
          >
            <div className="list-title">
              <h3>{list.title}</h3>
              <button className="list-options">
                <FontAwesomeIcon icon={solid("ellipsis")} size="xl" />
              </button>
            </div>
            <div className="list-scroll" id={`list-scroll ${lIndex}`}>
              {list.items.map((item, iIndex) => {
                return (
                  <div
                    draggable
                    onDragStart={(e) => {
                      handleDragStart(e, { lIndex, iIndex });
                    }}
                    onDragEnter={
                      dragging
                        ? (e) => {
                            handleDragEnter(e, { lIndex, iIndex });
                          }
                        : null
                    }
                    key={iIndex}
                    className={
                      dragging ? getStyles({ lIndex, iIndex }) : "list-item"
                    }
                  >
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>

            {/* Add card button */}
            {newCard && currList == lIndex ? (
              <div className="column add-list">
                <textarea
                  type={"text"}
                  className="add-input input-card"
                  value={cardTitle}
                  onChange={(e) =>
                    setCardTitle(e.target.value.replace(/[\r\n\v]+/g, ""))
                  }
                  placeholder="Enter a title for this card..."
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      addCard();
                    }
                  }}
                />
                <div className="row add-buttons">
                  <h4 className="add-button" onClick={(e) => addCard(e)}>
                    Add card
                  </h4>
                  <FontAwesomeIcon
                    icon={solid("xmark")}
                    size="2xl"
                    className="add-cancel"
                    onClick={() => {
                      setCurrList(null);
                      setCardTitle("");
                      setNewCard(false);
                    }}
                  />
                </div>
              </div>
            ) : (
              <button
                className="row add-card"
                onClick={() => {
                  setCurrList(lIndex);
                  setNewCard(true);
                  {
                    lists[lIndex]["items"].length > 0 &&
                      setTimeout(function () {
                        var objDiv = document.getElementById(
                          `list-scroll ${lIndex}`
                        );
                        objDiv.lastElementChild.scrollIntoView({
                          behavior: "smooth",
                          alignToTop: false,
                        });
                      }, 75);
                  }
                }}
              >
                <FontAwesomeIcon icon={solid("plus")} size="xl" />
                <h3>Add a card</h3>
              </button>
            )}
          </div>
        );
      })}

      {/* Add list button */}
      {newList ? (
        <div className="column add-list">
          <input
            type={"text"}
            className="add-input input-title"
            value={listTitle}
            onChange={(e) =>
              setListTitle(e.target.value.replace(/[\r\n\v]+/g, ""))
            }
            placeholder="Enter list title..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addList();
              }
            }}
          />
          <div className="row add-buttons">
            <h4 className="add-button" onClick={(e) => addList(e)}>
              Add list
            </h4>
            <FontAwesomeIcon
              icon={solid("xmark")}
              size="2xl"
              className="add-cancel"
              onClick={() => {
                setListTitle("");
                setNewList(false);
              }}
            />
          </div>
        </div>
      ) : (
        <button
          className="row add-list-button"
          onClick={() => setNewList(true)}
        >
          <FontAwesomeIcon icon={solid("plus")} size="xl" />
          <h3>Add another list</h3>
        </button>
      )}
    </div>
  );
}

export default Kanban;
