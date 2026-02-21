import { useState } from "react";
import type { ReactNode } from "react";

import "~/styles/gridbox.css"

export default function GridBox({title, description, linktext: link, icon, href, unclickable=false}:{title:string, description:string, linktext?:string, icon?: ReactNode, href?:string, unclickable?:boolean}) {
  const [linkPos, setLinkPos] = useState<"left" | "right">("left");
  const [gridDir, setGridDir] = useState<"normal" | "reverse">("normal");

  const changeLinkPos = (linkTag: HTMLAnchorElement) => {
    linkTag.blur();
    setLinkPos(linkPos === "left" ? "right" : "left");
  };

  const changeGridDir = (titleTag: HTMLDivElement) => {
    titleTag.blur();
    setGridDir(gridDir === "normal" ? "reverse" : "normal");
    // Makes sure you won't hover the link after the switch
    setLinkPos("right");
  };

  return (
    <div className={`gridbox ${gridDir}`}> 
        <div
          className="title"
          onMouseEnter={unclickable ? (event) => changeGridDir(event.currentTarget) : undefined}
          onFocus={unclickable ? (event) => changeGridDir(event.currentTarget) : undefined}
        >
            <h2>{title}</h2>
            {icon && icon}
        </div>
        <p>{description}</p>
        {link && (
          <a
            className={linkPos}
            href={href}
            onMouseEnter={unclickable ? (event) => changeLinkPos(event.currentTarget) : undefined}
            onFocus={unclickable ? (event) => changeLinkPos(event.currentTarget) : undefined}
          >
            {link}
          </a>
        )}
    </div>
  );
}