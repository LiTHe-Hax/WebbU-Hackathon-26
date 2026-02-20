import type { ReactNode } from "react";

import "~/styles/gridbox.css"

export default function GridBox({title, description, linktext: link, icon, href}:{title:string, description:string, linktext?:string, icon?: ReactNode, href?:string}) {
  return (
    <div className="gridbox"> 
        <div className="title">
            <h2>{title}</h2>
            {icon && icon}
        </div>
        <p>{description}</p>
        {link && <a href={href}>{link}</a>}
    </div>
  );
}