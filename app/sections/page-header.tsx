import { useState } from "react";

import Icon from "~/components/icon";
import FlexSpacer from "~/components/flex-spacer";

import "~/styles/page-header.css";
import liuLogo from "~/images/LiU-Black_Liu_noText.svg";

function SearchButton() {
  // TODO: on input focus, not button focus
  const [isFocused, setIsFocused] = useState(false);
  
  return ( 
    <button onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
      <Icon type={isFocused ? "back" : "magnifying"} />
    </button>
  );
}

function TopBar() {
  return (
    <div className="top-bar">
      <img src={liuLogo} alt="LiU logo" />
      <div className="search-container">
        <SearchButton />
        <input type="search" placeholder="Search across sites" />
      </div>
      <FlexSpacer />
      <button>
        <Icon type="cog" />
      </button>
      <button>
        <Icon type="question" />
      </button>
      <button>
        <img src="https://github.com/LiTHe-Hax/website-assets/blob/main/images/2025-2026/contacts/board/tyson_h.jpg?raw=true" />
      </button>
    </div>
  );
}

function BreadcrumbsBar() {
  return (
    <div className="breadcrumbs-bar">
    </div>
  );
}

export default function PageHeader() {
  return (
    <header className="page-header">
      <TopBar />
      <BreadcrumbsBar />
    </header>
  );
}