import React from "react";
import { socialIcons } from "../data/Data";

export default function SocialIcons() {
  return (
    <>
      <div className="col-lg-3 px-5 header-social">
        {socialIcons.map((val, index) => (
          <a
            key={index}
            href={val.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {val.icon}
          </a>
        ))}
      </div>
    </>
  );
}
