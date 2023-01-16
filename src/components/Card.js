import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./Card.css";

function Card({ close, listName, listIndex, itemIndex, data, actions }) {
  const [title, setTitle] = useState(data.name);
  const [newTitle, setNewTitle] = useState(data.name);
  const [editTitle, setEditTitle] = useState(false);
  const [description, setDescription] = useState(data.description);
  const [newDesc, setNewDesc] = useState(data.description);
  const [editDesc, setEditDesc] = useState(false);
  const [descHeight, setDescHeight] = useState(null);
  const [togDelete, setTogDelete] = useState(false);

  window.screen.orientation.onchange = function () {
    const card = document.getElementById("card");
    const tx = document.getElementsByTagName("textarea");

    for (let i = 0; i < tx.length; i++) {
      tx[i].setAttribute("style", "height: 30px; overflow-y:hidden;");

      tx[i].addEventListener("input", OnInput, false);
    }
    card.setAttribute("style", "height: 800px; overflow-y:hidden;");
    setTimeout(function () {
      resizeTextAreas();
    }, 300);
  };

  function OnInput() {
    this.style.height = 0;
    this.style.height = this.scrollHeight + "px";
  }

  function resizeTextAreas(cancel) {
    // reset description height if cancelling edit
    if (cancel === true) {
      const txDesc = document.getElementById("description");
      txDesc.setAttribute("style", "height:" + descHeight + "px");
    }
    const tx = document.getElementsByTagName("textarea");
    for (let i = 0; i < tx.length; i++) {
      tx[i].setAttribute(
        "style",
        "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
      );

      tx[i].addEventListener("input", OnInput, false);
    }

    const card = document.getElementById("card");
    const newTitleHeight = parseInt(
      document.getElementById("title").style.height.slice(0, -2)
    );
    const newDescHeight = parseInt(
      document.getElementById("description").style.height.slice(0, -2)
    );
    card.setAttribute(
      "style",
      "height:" + (820 + newDescHeight - 493 + newTitleHeight - 150) + "px"
    );
  }

  useEffect(() => {
    resizeTextAreas();
    const txDesc = document.getElementById("description");
    setDescHeight(txDesc.style.height);
  }, [editTitle, editDesc]);

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
    setDescription(newDesc);
    actions["change"](listIndex, itemIndex, {
      name: newTitle,
      description: newDesc,
    });
    e.target.blur();
    setEditDesc(false);
    setTimeout(function () {
      resizeTextAreas();
    }, 100);
  };

  return (
    <div className="container" onClick={() => close(null)}>
      <div id="card" className="card" onClick={(e) => e.stopPropagation()}>
        <button
          className="close"
          onClick={() => {
            close(null);
          }}
        >
          <FontAwesomeIcon icon={solid("xmark")} size="lg" />
        </button>

        {/* Title */}
        <div className="row">
          <FontAwesomeIcon icon={solid("credit-card")} className="icon" />
          <div className="cardName">
            <textarea
              id="title"
              className={editTitle ? "name-edit" : "name-text"}
              value={newTitle}
              onClick={() => setEditTitle(true)}
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

            <h5 className="listName">
              in list <span>{listName}</span>
            </h5>
          </div>
        </div>

        {/* Description */}
        <div className="row">
          <FontAwesomeIcon icon={solid("align-justify")} className="icon" />
          <div className="descCon">
            <h4>Description</h4>
            <textarea
              id="description"
              className={editDesc ? "description-edit" : "description"}
              value={newDesc}
              placeholder="Add a more detailed description…"
              onClick={() => setEditDesc(true)}
              onChange={(e) => {
                setNewDesc(e.target.value);
                setTimeout(function () {
                  resizeTextAreas();
                }, 100);
              }}
            />

            {editDesc && (
              <div className="row desc-buttons">
                <button
                  className="btn save"
                  onClick={(e) => {
                    changeDesc(e);
                  }}
                >
                  Save
                </button>
                <button
                  className="btn cancel"
                  onClick={() => {
                    setEditDesc(false);
                    setNewDesc(description);
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
          <div className="actionsCon">
            <h5 className="action-header">Add to card</h5>
            <div className="actions-menu">
              <button className="row action-button">
                <FontAwesomeIcon icon={solid("arrow-right")} />
                Move
              </button>
              <button className="row action-button">
                <FontAwesomeIcon icon={solid("copy")} />
                Copy
              </button>
              <div className="dropdownCon">
                <button
                  className="row action-button"
                  onClick={() => setTogDelete(true)}
                >
                  <FontAwesomeIcon icon={solid("trash")} />
                  Delete
                </button>
                {togDelete && (
                  <div className="column dropdown">
                    <div className="row dropdown-title">
                      <h5>Delete card?</h5>
                      <button onClick={() => setTogDelete(false)}>
                        <FontAwesomeIcon icon={solid("xmark")} size="lg" />
                      </button>
                    </div>
                    <hr />
                    <p>
                      All actions will be removed from the activity feed and you
                      won’t be able to re-open the card. There is no undo.
                    </p>
                    <button
                      className="delete-button"
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
        {/* <div className="background" onClick={() => close(null)} /> */}
      </div>
    </div>
  );
}

export default Card;
