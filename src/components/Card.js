import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./Card.css";

function Card({ close, listName, listIndex, itemIndex, lists, data, actions }) {
  const [toggle, setToggle] = useState("");
  const [subMenu, setSubMenu] = useState("");
  const [title, setTitle] = useState(data.name);
  const [newTitle, setNewTitle] = useState(data.name);
  const [desc, setDesc] = useState(data.description);
  const [newDesc, setNewDesc] = useState(data.description);
  const [descHeight, setDescHeight] = useState(null);
  const [destList, setDestList] = useState(listIndex);
  const [destIndex, setDestIndex] = useState(0);

  function OnInput() {
    this.style.height = 0;
    this.style.height = this.scrollHeight + "px";
  }

  const resizeTextAreas = useCallback(
    (cancel) => {
      const desc_input = document.getElementById("description");

      // reset description height if cancelling edit
      if (cancel === true && desc !== newDesc) {
        desc_input.setAttribute("style", "height:" + descHeight + "px");
      }
      const inputs = document.getElementsByTagName("textarea");
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].setAttribute(
          "style",
          "height:" + inputs[i].scrollHeight + "px;overflow-y:hidden;"
        );

        inputs[i].addEventListener("input", OnInput, false);
      }

      const card = document.getElementById("card");
      const newTitleHeight = parseInt(
        document.getElementById("title").style.height.slice(0, -2)
      );
      const newDescHeight = parseInt(desc_input.style.height.slice(0, -2));
      card.setAttribute(
        "style",
        "height:" + (820 + newDescHeight - 493 + newTitleHeight - 150) + "px"
      );
    },
    [descHeight]
  );

  window.addEventListener(
    "resize",
    function () {
      const card = document.getElementById("card");
      const inputs = document.getElementsByTagName("textarea");

      for (let i = 0; i < inputs.length; i++) {
        inputs[i].setAttribute("style", "height: 30px; overflow-y:hidden;");

        inputs[i].addEventListener("input", OnInput, false);
      }
      card.setAttribute("style", "height: 800px; overflow-y:hidden;");
      setTimeout(function () {
        resizeTextAreas();
      }, 300);
    },
    false
  );

  useEffect(() => {
    resizeTextAreas();
    const desc_input = document.getElementById("description");
    setDescHeight(desc_input.style.height);
  }, [toggle, resizeTextAreas]);

  const changeTitle = (e) => {
    if (newTitle.length > 0) {
      setTitle(newTitle);
      actions["change"](listIndex, itemIndex, {
        name: newTitle,
        description: newDesc,
      });
    } else {
      setNewTitle(title);
    }
    e.target.blur();
    setTimeout(function () {
      resizeTextAreas();
    }, 100);
  };

  const changeDesc = (e) => {
    setDesc(newDesc);
    actions["change"](listIndex, itemIndex, {
      name: newTitle,
      description: newDesc,
    });
    e.target.blur();
    setToggle("");
    setTimeout(function () {
      resizeTextAreas();
    }, 100);
  };

  return (
    <div id="background" onClick={() => close(null)}>
      <div id="card" onClick={(e) => e.stopPropagation()}>
        <button
          id="close"
          onClick={() => {
            close(null);
          }}
        >
          <FontAwesomeIcon icon={solid("xmark")} size="lg" />
        </button>

        {/* Title */}
        <div id="title-sec">
          <FontAwesomeIcon icon={solid("credit-card")} className="icon" />
          <div id="title-con">
            <textarea
              id="title"
              className={toggle === "title-edit" ? "title-edit" : "title-text"}
              value={newTitle}
              onClick={() => setToggle("title-edit")}
              onChange={(e) => {
                setNewTitle(e.target.value.replace(/[\r\n\v]+/g, ""));
                setTimeout(function () {
                  resizeTextAreas();
                }, 100);
              }}
              onBlur={(e) => changeTitle(e)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  changeTitle(e);
                }
              }}
            />

            <h5 id="list-name">
              in list <span>{listName}</span>
            </h5>

            <h6 id="date-created">Created on {data.date}</h6>
          </div>
        </div>

        {/* Description */}
        <div id="desc-sec">
          <FontAwesomeIcon icon={solid("align-justify")} className="icon" />
          <div id="desc-con">
            <h4>Description</h4>
            <textarea
              id="description"
              className={toggle === "desc-edit" ? "desc-edit" : "desc-text"}
              value={newDesc}
              placeholder="Add a more detailed description…"
              onClick={() => setToggle("desc-edit")}
              onChange={(e) => {
                setNewDesc(e.target.value);
                setTimeout(function () {
                  resizeTextAreas();
                }, 100);
              }}
            />

            {toggle === "desc-edit" && (
              <div id="desc-buttons">
                <button
                  id="save-button"
                  onClick={(e) => {
                    changeDesc(e);
                  }}
                >
                  Save
                </button>
                <button
                  id="cancel-button"
                  onClick={() => {
                    setToggle("");
                    setNewDesc(desc);
                    setTimeout(function () {
                      resizeTextAreas(true);
                    }, 100);
                  }}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
          <div id="actions-con">
            <h5 id="action-header">Actions</h5>
            <div id="actions-menu">
              {/*///////////////////////////////////*/}
              {/*//////////// Move Card ////////////*/}
              {/*///////////////////////////////////*/}
              <div className="dropdown-con">
                <button
                  className="action-button"
                  onClick={() => setToggle("move-dropdown")}
                >
                  <FontAwesomeIcon icon={solid("arrow-right")} />
                  Move
                </button>
                {toggle === "move-dropdown" && (
                  <div className="dropdown-popup">
                    <div className="dropdown-title">
                      <h5>Move card?</h5>
                      <button onClick={() => setToggle("")}>
                        <FontAwesomeIcon icon={solid("xmark")} size="lg" />
                      </button>
                    </div>
                    <hr />
                    <div
                      className={subMenu === "move-list" ? "dropdown-list" : ""}
                    >
                      <button
                        className="list-buttons"
                        onClick={() => {
                          subMenu === ""
                            ? setSubMenu("move-list")
                            : setSubMenu("");
                        }}
                      >
                        List:
                        {" " + lists[destList].title}
                      </button>
                      {subMenu === "move-list" && (
                        <div>
                          {lists.map((list, index) => {
                            return (
                              <button
                                key={index}
                                className={
                                  index === destList
                                    ? "dropdown-select"
                                    : "list-buttons"
                                }
                                onClick={() => {
                                  setDestList(index);
                                  setSubMenu("");
                                }}
                              >
                                {list.title}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    <button
                      className="confirm-button send-button"
                      onClick={() => {
                        actions["move"](listIndex, itemIndex, destList, data);
                        close(null);
                      }}
                    >
                      Move
                    </button>
                  </div>
                )}
              </div>

              {/*///////////////////////////////////*/}
              {/*//////////// Copy Card ////////////*/}
              {/*///////////////////////////////////*/}
              <div className="dropdown-con">
                <button
                  className="action-button"
                  onClick={() => setToggle("copy-dropdown")}
                >
                  <FontAwesomeIcon icon={solid("copy")} />
                  Copy
                </button>
                {toggle === "copy-dropdown" && (
                  <div className="dropdown-popup">
                    <div className="dropdown-title">
                      <h5>Copy card?</h5>
                      <button onClick={() => setToggle("")}>
                        <FontAwesomeIcon icon={solid("xmark")} size="lg" />
                      </button>
                    </div>
                    <hr />
                    <div
                      className={subMenu === "copy-list" ? "dropdown-list" : ""}
                    >
                      <button
                        className="list-buttons"
                        onClick={() => {
                          subMenu === ""
                            ? setSubMenu("copy-list")
                            : setSubMenu("");
                        }}
                      >
                        List:
                        {" " + lists[destList].title}
                      </button>
                      {subMenu === "copy-list" && (
                        <div>
                          {lists.map((list, index) => {
                            return (
                              <button
                                key={index}
                                className={
                                  index === destList
                                    ? "dropdown-select"
                                    : "list-buttons"
                                }
                                onClick={() => {
                                  setDestList(index);
                                  setSubMenu("");
                                }}
                              >
                                {list.title}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    <div
                      className={
                        subMenu === "copy-list-pos" ? "dropdown-list" : ""
                      }
                    >
                      <button
                        className="list-buttons"
                        onClick={() => {
                          subMenu === ""
                            ? setSubMenu("copy-list-pos")
                            : setSubMenu("");
                        }}
                      >
                        Position:
                        {" " + (destIndex + 1)}
                      </button>
                      {subMenu === "copy-list-pos" &&
                        lists &&
                        lists[destList].items.length > 0 && (
                          <div>
                            {lists[destList].items.map((_, index) => {
                              return (
                                <button
                                  key={index}
                                  className={
                                    index === destIndex
                                      ? "dropdown-select"
                                      : "list-buttons"
                                  }
                                  onClick={() => {
                                    setDestIndex(index);
                                    setSubMenu("");
                                  }}
                                >
                                  {index + 1}
                                </button>
                              );
                            })}
                          </div>
                        )}
                    </div>
                    <button
                      className="confirm-button send-button"
                      onClick={() => {
                        actions["copy"](
                          listIndex,
                          itemIndex,
                          destList,
                          destIndex,
                          data
                        );
                        close(null);
                      }}
                    >
                      Copy
                    </button>
                  </div>
                )}
              </div>

              {/*///////////////////////////////////*/}
              {/*/////////// Delete Card ///////////*/}
              {/*///////////////////////////////////*/}
              <div className="dropdown-con">
                <button
                  className="action-button"
                  onClick={() => setToggle("delete-dropdown")}
                >
                  <FontAwesomeIcon icon={solid("trash")} />
                  Delete
                </button>
                {toggle === "delete-dropdown" && (
                  <div className="dropdown-popup">
                    <div className="dropdown-title">
                      <h5>Delete card?</h5>
                      <button onClick={() => setToggle("")}>
                        <FontAwesomeIcon icon={solid("xmark")} size="lg" />
                      </button>
                    </div>
                    <hr />
                    <p>
                      All actions will be removed from the activity feed and you
                      won’t be able to re-open the card. There is no undo.
                    </p>
                    <button
                      className="confirm-button delete-button"
                      onClick={() => {
                        actions["delete"](listIndex, itemIndex);
                        close(null);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
