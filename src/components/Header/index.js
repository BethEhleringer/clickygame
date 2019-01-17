import React from "react";
import "./style.css";

function Header(props) {
  return <div className="header">{props.children}
  <h1>Nice to Meet You!</h1>
  <h2><em>a simple memory game...</em></h2>
  <p><strong>INSTRUCTIONS:</strong> You have just moved into a new neighborhood and are attending the neighborhood block party. Your goal is to meet each neighbor once and only once.</p>
  <ul><li>You gain five points the first time you click on a neighbor's face.</li>
  <li>Each time you click on a neighbor's face more than once, you will lose five points.</li>
  <li>If you</li></ul></div>;
}

export default Header;