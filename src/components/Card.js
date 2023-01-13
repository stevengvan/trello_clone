import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import "./Card.css";

function Card() {
  return (
    <div className="background">
      <div className="scroll">
        <div className="card"></div>
      </div>
    </div>
  );
}

export default Card;
