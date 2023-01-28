import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import CardMenu from "./CardMenu";
import "./Card.css";

function Card({ close, listIndex, itemIndex, lists, actions }) {
  const [toggle, setToggle] = useState("");
  const [title, setTitle] = useState(lists[listIndex].items[itemIndex].name);
  const [newTitle, setNewTitle] = useState(
    lists[listIndex].items[itemIndex].name
  );
  const [desc, setDesc] = useState(
    lists[listIndex].items[itemIndex].description
  );
  const [newDesc, setNewDesc] = useState(
    lists[listIndex].items[itemIndex].description
  );
  const [descHeight, setDescHeight] = useState(null);

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
  }, [toggle, newDesc]);

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
              in list <span>{lists[listIndex].title}</span>
            </h5>

            <h6 id="date-created">
              Created on {lists[listIndex].items[itemIndex].date}
            </h6>
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
          <CardMenu
            close={close}
            actions={actions}
            listIndex={listIndex}
            itemIndex={itemIndex}
            lists={lists}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
