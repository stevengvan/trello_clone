import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./ListMenu.css";

function ListMenu({ lIndex, setListMenu, actions, lists }) {
  const [showMenu, setShowMenu] = useState("List Actions");
  const [subMenu, setSubMenu] = useState("");
  const [destination, setDestination] = useState(0);
  const [listTitle, setListTitle] = useState("");

  return (
    <div id="togBackground">
      <div id="list-menu">
        <div id="list-menu-header">
          <button
            id={showMenu !== "List Actions" ? "show" : "hide"}
            disabled={showMenu === "" ? true : false}
            onClick={() => {
              setShowMenu("List Actions");
              setSubMenu("");
            }}
          >
            <FontAwesomeIcon icon={solid("arrow-left")} size="lg" />
          </button>
          <h5>{lists[lIndex].title + ": " + showMenu}</h5>
          <button
            id="list-menu-close"
            onClick={() => {
              setSubMenu("");
              setShowMenu("");
              setListMenu(false);
            }}
          >
            <FontAwesomeIcon icon={solid("xmark")} size="lg" />
          </button>
        </div>
        <hr />
        {showMenu === "List Actions" && (
          <div className="list-buttons-con">
            <button
              className="list-button"
              onClick={() => {
                actions["add"]("card-add-first");
                setListMenu(false);
              }}
            >
              Add card
            </button>
            <button
              className="list-button"
              onClick={() => setShowMenu("Move List")}
            >
              Move list
            </button>
            <button
              className="list-button"
              onClick={() => setShowMenu("Copy List")}
            >
              Copy list
            </button>
            <button
              className="list-button"
              onClick={() => setShowMenu("Sort List")}
            >
              Sort list by...
            </button>
            <button
              className="list-button"
              onClick={() => actions["delete"](lIndex)}
            >
              Delete list
            </button>
          </div>
        )}
        {showMenu === "Move List" && (
          <div className="list-buttons-con">
            <div className={subMenu === "move-list" ? "dropdown-con" : ""}>
              <button
                className="list-button"
                onClick={() => {
                  subMenu === "" ? setSubMenu("move-list") : setSubMenu("");
                }}
              >
                Position: {lists[destination].title}
              </button>
              {subMenu === "move-list" && (
                <div className="dropdown-con">
                  {lists.map((list, index) => {
                    return (
                      <button
                        key={index}
                        className={
                          index === destination
                            ? "dropdown-select"
                            : "list-button"
                        }
                        onClick={() => {
                          setDestination(index);
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
              className="list-button"
              onClick={() => {
                actions["move"](lIndex, destination);
                setListMenu(false);
              }}
            >
              Move
            </button>
          </div>
        )}
        {showMenu === "Copy List" && (
          <div className="list-buttons-con">
            <textarea
              className="copy-input"
              value={listTitle}
              onChange={(e) => setListTitle(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  actions["copy"](lIndex, listTitle);
                  setListMenu(false);
                }
              }}
            />

            <button
              className="list-button"
              onClick={() => {
                actions["copy"](lIndex, listTitle);
                setListMenu(false);
              }}
            >
              Create list
            </button>
          </div>
        )}
        {showMenu === "Sort List" && (
          <div className="list-buttons-con">
            <button
              className="list-button"
              onClick={() => actions["sort"](lIndex, "newest")}
            >{`Date created (newest)`}</button>
            <button
              className="list-button"
              onClick={() => actions["sort"](lIndex, "oldest")}
            >{`Date created (oldest)`}</button>
            <button
              className="list-button"
              onClick={() => actions["sort"](lIndex, "alphabetical(desc)")}
            >{`Card name (descending)`}</button>
            <button
              className="list-button"
              onClick={() => actions["sort"](lIndex, "alphabetical(asc)")}
            >{`Card name (ascending)`}</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListMenu;
