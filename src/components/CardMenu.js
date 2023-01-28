import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./CardMenu.css";

function CardMenu({ close, actions, listIndex, itemIndex, lists }) {
  const [toggle, setToggle] = useState("");
  const [subMenu, setSubMenu] = useState("");
  const [destList, setDestList] = useState(listIndex);
  const [destIndex, setDestIndex] = useState(0);

  return (
    <div id="actions-con">
      <h5 id="action-header">Actions</h5>
      <div id="actions-menu">
        {/*///////////////////////////////////*/}
        {/*//////////// Move Card ////////////*/}
        {/*///////////////////////////////////*/}
        <div className="dropdown-con">
          <button
            className="action-button"
            onClick={() => {
              setToggle("move-dropdown");
              setSubMenu("");
            }}
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
              <div className={subMenu === "move-list" ? "dropdown-list" : ""}>
                <button
                  className="list-buttons"
                  onClick={() => {
                    subMenu === "" ? setSubMenu("move-list") : setSubMenu("");
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
                  actions["move"](
                    listIndex,
                    itemIndex,
                    destList,
                    lists[listIndex].items[itemIndex]
                  );
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
            onClick={() => {
              setToggle("copy-dropdown");
              setSubMenu("");
            }}
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
              <div className={subMenu === "copy-list" ? "dropdown-list" : ""}>
                <button
                  className="list-buttons"
                  onClick={() => {
                    subMenu === "" ? setSubMenu("copy-list") : setSubMenu("");
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
                className={subMenu === "copy-list-pos" ? "dropdown-list" : ""}
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
                    lists[listIndex].items[itemIndex]
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
            onClick={() => {
              setToggle("delete-dropdown");
              setSubMenu("");
            }}
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
                All actions will be removed from the activity feed and you won’t
                be able to re-open the card. There is no undo.
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
  );
}

export default CardMenu;
