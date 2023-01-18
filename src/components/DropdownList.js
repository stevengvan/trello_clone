import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import "./DropdownList.css";

function Dropdown({ lIndex, setListMenu, actions, lists }) {
  const [showMenu, setShowMenu] = useState("");
  const [subMenu, setSubMenu] = useState("");
  const [destination, setDestination] = useState(0);

  return (
    <div className="list-menu">
      <div className="list-menu-header">
        <div className="row">
          <button
            className={showMenu != "" ? "show" : "hide"}
            disabled={showMenu === "" ? true : false}
            onClick={() => setShowMenu("")}
          >
            <FontAwesomeIcon icon={solid("arrow-left")} size="lg" />
          </button>
          <h5>{showMenu}</h5>
          <button
            className="list-menu-close"
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
      </div>
      {showMenu === "" && (
        <div className="list-buttonsCon">
          <button className="list-button">Add card</button>
          <button
            className="list-button"
            onClick={() => setShowMenu("Move List")}
          >
            Move list
          </button>
          <button className="list-button">Copy list</button>
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
      {showMenu === "Sort List" && (
        <div className="list-buttonsCon">
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
      {showMenu === "Move List" && (
        <div className="list-buttonsCon">
          <div className={subMenu === "list" ? "dropdownCon" : ""}>
            <button
              className="list-button"
              onClick={() => {
                subMenu === "" ? setSubMenu("list") : setSubMenu("");
              }}
            >
              Position:{" "}
              {lists[destination].title +
                " (Position " +
                (destination + 1) +
                ")"}
            </button>
            {subMenu === "list" && (
              <div>
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
                      {list.title + " (Position " + (index + 1) + ")"}
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
    </div>
  );
}

export default Dropdown;