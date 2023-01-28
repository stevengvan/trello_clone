import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Card from "./Card";
import ListMenu from "./ListMenu";
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
          date: "1/14/2023, 7:55:52 AM",
          description: "Simply a statement",
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
  const [toggle, setToggle] = useState("");
  const [listTitle, setListTitle] = useState("");
  const [cardTitle, setCardTitle] = useState("");
  const [listMenu, setListMenu] = useState(false);
  const [currList, setCurrList] = useState(null);
  const [currListName, setCurrListName] = useState(null);
  const [currCard, setCurrCard] = useState(null);
  const [currCardIndex, setCurrCardIndex] = useState(null);
  const [dragging, setDragging] = useState(false);
  const dragItem = useRef();
  const dragNode = useRef();

  const handleDragStart = (e, params) => {
    dragItem.current = params;
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (e, params) => {
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
      return "current list-card";
    }
    return "list-card";
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
        var objDiv = document.getElementById("lists-space");
        objDiv.scrollLeft = objDiv.scrollWidth;
      }, 75);
    }
  };

  const moveList = (targetIndex, destinationIndex) => {
    if (targetIndex === destinationIndex) {
      return;
    }
    setLists((oldLists) => {
      let newLists = JSON.parse(JSON.stringify(oldLists));
      newLists.splice(destinationIndex, 0, newLists.splice(targetIndex, 1)[0]);
      return newLists;
    });
  };

  const copyList = (targetIndex, listTitle) => {
    setLists((oldLists) => {
      let newLists = JSON.parse(JSON.stringify(oldLists));
      let copy = JSON.parse(JSON.stringify(newLists[targetIndex]));
      copy.title = listTitle;
      newLists.splice(targetIndex + 1, 0, copy);
      return newLists;
    });
  };

  const deleteList = (listIndex) => {
    let newLists = [...lists];
    newLists.splice(listIndex, 1);
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
    setListMenu(false);
    setLists(newLists);
  };

  const addCard = (targetList, position) => {
    if (cardTitle.length > 0) {
      let date = new Date();
      if (position === "last") {
        lists[targetList]["items"] = [
          ...lists[targetList]["items"],
          { name: cardTitle, date: date.toLocaleString(), description: "" },
        ];
      } else {
        lists[targetList].items.splice(position, 0, {
          name: cardTitle,
          date: date.toLocaleString(),
          description: "",
        });
      }
      setCardTitle("");
      setTimeout(function () {
        var objDiv = document.getElementById(`list-scroll ${targetList}`);
        if (position === "last") {
          objDiv.lastElementChild.scrollIntoView({
            behavior: "smooth",
            alignToTop: false,
          });
        } else if (position === 0) {
          objDiv.firstElementChild.scrollIntoView({
            behavior: "smooth",
            alignToTop: false,
          });
        }
      }, 75);
    }
  };

  const moveCard = (targetList, targetIndex, destinationList, data) => {
    if (targetList === destinationList) {
      return;
    }
    let newLists = [...lists];
    newLists[targetList]["items"].splice(targetIndex, 1);
    newLists[destinationList]["items"] = [
      data,
      ...newLists[destinationList]["items"],
    ];
    return newLists;
  };

  const copyCard = (
    targetList,
    targetIndex,
    destinationList,
    destinationIndex,
    data
  ) => {
    if (targetList === destinationList && targetIndex === destinationIndex) {
      return;
    }
    let newLists = [...lists];
    newLists[destinationList]["items"].splice(destinationIndex, 0, data);
    return newLists;
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
    <div id="lists-space">
      {currCardIndex != null && (
        <Card
          close={setCurrCardIndex}
          listIndex={currList}
          itemIndex={currCardIndex}
          lists={lists}
          data={currCard}
          actions={{
            change: changeCardData,
            move: moveCard,
            copy: copyCard,
            delete: deleteCard,
          }}
        />
      )}

      {/*///////////////////////////////////*/}
      {/*////////////// Lists //////////////*/}
      {/*///////////////////////////////////*/}
      {lists?.map((list, lIndex) => {
        return (
          <div
            key={lIndex}
            className="list-con"
            onDragEnter={
              dragging && !list.items.length
                ? (e) => handleDragEnter(e, { lIndex, iIndex: 0 })
                : null
            }
          >
            <div className="list-title">
              <h3>{list.title}</h3>
              <div className="list-options">
                <button
                  className="list-option-btn"
                  onClick={() => {
                    setListMenu(true);
                    setCurrList(lIndex);
                  }}
                >
                  <FontAwesomeIcon icon={solid("ellipsis")} size="xl" />
                </button>
                {listMenu && lIndex === currList && (
                  <ListMenu
                    lIndex={lIndex}
                    setListMenu={setListMenu}
                    actions={{
                      add: setToggle,
                      move: moveList,
                      copy: copyList,
                      sort: sortList,
                      delete: deleteList,
                    }}
                    lists={lists}
                  />
                )}
              </div>
            </div>

            {/*///////////////////////////////////*/}
            {/*////////////// Cards //////////////*/}
            {/*///////////////////////////////////*/}
            <div className="list-scroll" id={`list-scroll ${lIndex}`}>
              {toggle === "card-add-first" && currList === lIndex && (
                <div className="add-con">
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
                        addCard(lIndex, 0);
                      }
                    }}
                  />
                  <div className="row add-buttons">
                    <h4
                      className="add-button"
                      onClick={() => addCard(lIndex, 0)}
                    >
                      Add card
                    </h4>
                    <button
                      className="add-cancel"
                      onClick={() => {
                        setCardTitle("");
                        setToggle("");
                      }}
                    >
                      <FontAwesomeIcon icon={solid("xmark")} size="2xl" />
                    </button>
                  </div>
                </div>
              )}
              {list.items?.map((item, iIndex) => {
                return (
                  <div
                    key={iIndex}
                    id={`list-card ${iIndex}`}
                    className={
                      dragging ? getStyles({ lIndex, iIndex }) : "list-card"
                    }
                    onClick={() => {
                      setListMenu(false);
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

            {/*///////////////////////////////////*/}
            {/*///////// Add Card Button /////////*/}
            {/*///////////////////////////////////*/}
            {toggle === "card-add-last" && currList === lIndex ? (
              <div className="add-con">
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
                      addCard(lIndex, "last");
                    }
                  }}
                />
                <div className="add-buttons">
                  <h4
                    className="add-button"
                    onClick={() => addCard(lIndex, "last")}
                  >
                    Add card
                  </h4>
                  <button
                    className="add-cancel"
                    onClick={() => {
                      setCardTitle("");
                      setToggle("");
                    }}
                  >
                    <FontAwesomeIcon icon={solid("xmark")} size="2xl" />
                  </button>
                </div>
              </div>
            ) : (
              <button
                className="add-toggle"
                onClick={() => {
                  setCurrList(lIndex);
                  setToggle("card-add-last");
                }}
              >
                <FontAwesomeIcon icon={solid("plus")} size="xl" />
                <h3>Add a card</h3>
              </button>
            )}
          </div>
        );
      })}

      {/*///////////////////////////////////*/}
      {/*///////// Add List Button /////////*/}
      {/*///////////////////////////////////*/}
      {toggle === "list-add" ? (
        <div className="add-con fixed-width">
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
          <div className="add-buttons">
            <h4 className="add-button" onClick={(e) => addList(e)}>
              Add list
            </h4>
            <button
              className="add-cancel"
              onClick={() => {
                setListTitle("");
                setToggle("");
              }}
            >
              <FontAwesomeIcon icon={solid("xmark")} size="2xl" />
            </button>
          </div>
        </div>
      ) : (
        <button
          className="add-toggle fixed-width"
          onClick={() => setToggle("list-add")}
        >
          <FontAwesomeIcon icon={solid("plus")} size="xl" />
          <h3>Add another list</h3>
        </button>
      )}
    </div>
  );
}

export default Kanban;
