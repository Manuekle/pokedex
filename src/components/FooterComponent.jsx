import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

function FooterComponent(props) {
  const up = <FontAwesomeIcon icon={faCircleArrowUp} size="2xl" />;

  return (
    <footer className="flex flex-col font-normal pt-2 pb-10">
      <div className="flex justify-center">
        <span>Created by Manuel</span>
      </div>
      <div className="flex justify-center pt-2">
        <a href="#" className="text-black hover:text-gray-500">
          {up}
        </a>
      </div>
    </footer>
  );
}

export default FooterComponent;
