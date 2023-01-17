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
        {
          name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          date: "1/15/2023, 5:55:52 PM",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          name: "testing 1 - 2 -3",
          date: "1/15/2023, 5:55:52 PM",
          description: "nothing",
        },
        {
          name: "Hello World!",
          date: "1/14/2023, 7:45:52 AM",
          description: "earthling",
        },
        {
          name: "Hello World!",
          date: "1/14/2023, 7:55:52 AM",
          description: "worm",
        },
      ],
    },
    {
      title: "Doing",
      items: [
        { name: "TEXT", date: "1/14/2023, 9:55:52 PM", description: "words" },
        {
          name: "Totally not Trello",
          date: "1/15/2023, 5:55:52 PM",
          description: "it really isn't",
        },
      ],
    },
    { title: "Done", items: [] },
  ]);
  const [listTitle, setListTitle] = useState("");
  const [newList, setNewList] = useState(false);
  const [cardTitle, setCardTitle] = useState("");
  const [listMenu, setListMenu] = useState(false);
  const [listSortMenu, setListSortMenu] = useState(false);
  const [newCard, setNewCard] = useState(false);
  const [currList, setCurrList] = useState(null);
  const [currListName, setCurrListName] = useState(null);
  const [currCard, setCurrCard] = useState(null);
  const [currCardIndex, setCurrCardIndex] = useState(null);
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

  const deleteList = (listIndex) => {
    let newLists = [...lists];
    newLists.splice(listIndex, 1);
    setCurrList(null);
    setListMenu(false);
    setLists(newLists);
  };

  const sortList = (listIndex, order) => {
    let newLists = [...lists];
    switch (order) {
      case "newest":
        newLists[listIndex]["items"].sort(function (a, b) {
          return new Date(b.date) - new Date(a.date);
        });
        break;
      case "oldest":
        newLists[listIndex]["items"].sort(function (a, b) {
          return new Date(a.date) - new Date(b.date);
        });
        break;
      case "alphabetical(desc)":
        newLists[listIndex]["items"].sort(function (a, b) {
          return b.name.localeCompare(a.name);
        });
        break;
      case "alphabetical(asc)":
        newLists[listIndex]["items"].sort(function (a, b) {
          return a.name.localeCompare(b.name);
        });
        break;
      default:
        newLists[listIndex]["items"].sort(function (a, b) {
          return new Date(b.date) - new Date(a.date);
        });
    }
    setCurrList(null);
    setListSortMenu(false);
    setListMenu(false);
    setLists(newLists);
  };

  const addCard = () => {
    if (cardTitle.length > 0) {
      let date = new Date();
      lists[currList]["items"] = [
        ...lists[currList]["items"],
        { name: cardTitle, date: date.toLocaleString(), description: "" },
      ];
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

  const changeCardData = (listIndex, itemIndex, changeData) => {
    let newLists = [...lists];
    newLists[listIndex]["items"][itemIndex] = changeData;
    setLists(newLists);
  };

  const deleteCard = (listIndex, itemIndex) => {
    let newLists = [...lists];
    newLists[listIndex]["items"].splice(itemIndex, 1);
    setLists(newLists);
  };

  return (
    <div className="list-space" id="list-space">
      {currCardIndex != null && (
        <Card
          close={setCurrCardIndex}
          listName={currListName}
          listIndex={currList}
          itemIndex={currCardIndex}
          data={currCard}
          actions={{ change: changeCardData, delete: deleteCard }}
        />
      )}
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
              <div className="list-optionsCon">
                <button
                  className="list-options"
                  onClick={() => {
                    setListMenu(true);
                    setCurrList(lIndex);
                  }}
                >
                  <FontAwesomeIcon icon={solid("ellipsis")} size="xl" />
                </button>
                {listMenu && lIndex === currList && (
                  <div className="list-menu">
                    <div className="list-menu-header">
                      <div className="row">
                        <button
                          className={listSortMenu ? "show" : "hide"}
                          disabled={!listSortMenu ? true : false}
                          onClick={() => setListSortMenu(false)}
                        >
                          <FontAwesomeIcon
                            icon={solid("arrow-left")}
                            size="lg"
                          />
                        </button>
                        <h5>{listSortMenu ? "Sort list" : "List actions"}</h5>
                        <button
                          className="list-menu-close"
                          onClick={() => {
                            setCurrList(null);
                            setListSortMenu(false);
                            setListMenu(false);
                          }}
                        >
                          <FontAwesomeIcon icon={solid("xmark")} size="lg" />
                        </button>
                      </div>
                      <hr />
                    </div>
                    {!listSortMenu && (
                      <div>
                        <button className="list-button">Add card</button>
                        <button className="list-button">Move list</button>
                        <button className="list-button">Copy list</button>
                        <button
                          className="list-button"
                          onClick={() => setListSortMenu(true)}
                        >
                          Sort list by...
                        </button>
                        <button
                          className="list-button"
                          onClick={() => deleteList(lIndex)}
                        >
                          Delete list
                        </button>
                      </div>
                    )}
                    {listSortMenu && (
                      <div>
                        <button
                          className="list-button"
                          onClick={() => sortList(lIndex, "newest")}
                        >{`Date created (newest)`}</button>
                        <button
                          className="list-button"
                          onClick={() => sortList(lIndex, "oldest")}
                        >{`Date created (oldest)`}</button>
                        <button
                          className="list-button"
                          onClick={() => sortList(lIndex, "alphabetical(desc)")}
                        >{`Card name (descending)`}</button>
                        <button
                          className="list-button"
                          onClick={() => sortList(lIndex, "alphabetical(asc)")}
                        >{`Card name (ascending)`}</button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="list-scroll" id={`list-scroll ${lIndex}`}>
              {list.items.map((item, iIndex) => {
                return (
                  <div
                    key={iIndex}
                    className={
                      dragging ? getStyles({ lIndex, iIndex }) : "list-item"
                    }
                    onClick={() => {
                      setCurrListName(list.title);
                      setCurrList(lIndex);
                      setCurrCard(list["items"][iIndex]);
                      setCurrCardIndex(iIndex);
                    }}
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
                  >
                    {item.name}
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
                  <button
                    className="add-cancel"
                    onClick={() => {
                      setCurrList(null);
                      setCardTitle("");
                      setNewCard(false);
                    }}
                  >
                    <FontAwesomeIcon
                      icon={solid("xmark")}
                      size="2xl"
                      className="add-cancel-button"
                    />
                  </button>
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
        <div className="column add-list add-list-input">
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
            <button
              className="add-cancel"
              onClick={() => {
                setListTitle("");
                setNewList(false);
              }}
            >
              <FontAwesomeIcon
                icon={solid("xmark")}
                size="2xl"
                className="add-cancel-button"
              />
            </button>
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
