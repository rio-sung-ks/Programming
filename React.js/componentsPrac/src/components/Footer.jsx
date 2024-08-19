import React from "react";

const date = new Date();
const thisYear = date.getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright ⓒ {thisYear}</p>
    </footer>
  );
}
export default Footer;
