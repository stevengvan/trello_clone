import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import "./Card.css";

function Card({ close, listName, listIndex, data, itemIndex }) {
  const [title, setTitle] = useState(data.name);
  const [description, setDescription] = useState(data.description);
  const [editDesc, setEditDesc] = useState(false);

  return (
    <div className="background">
      <div className="scroll">
        <div className="card">
          <button
            className="close"
            onClick={() => {
              close(null);
            }}
          >
            <FontAwesomeIcon icon={solid("xmark")} size="lg" />
          </button>

          {/* Title */}
          <div className="row cardName">
            <FontAwesomeIcon icon={solid("credit-card")} className="icon" />
            <div>
              <h3>{data.name}</h3>
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
                type={"text"}
                className="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={description}
                onFocus={() => setEditDesc(true)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    //   addCard();
                  }
                }}
              />
              {editDesc && (
                <div className="row">
                  <button>Save</button>
                  <button>Cancel</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
