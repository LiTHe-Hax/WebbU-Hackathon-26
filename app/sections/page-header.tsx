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
    <div className="breadcrumbs-bar" style={{
      display: "flex",
      justifyContent: "space-between",
      fontSize: "14px",
      color: "rgb(36, 36, 36)"
    }}>
      <div style={{
        display: "flex",
        paddingLeft: "12px",
        gap: "8px"
      }}>
        <p>Start</p>
        <p>/</p>
        <p>Lisam</p>
      </div>
      <div style={{
        borderLeft: "1px solid #e1dfdd",
        paddingLeft: "12px",
        paddingRight: "12px"
      }}>
        <p>Courses and programs</p>
      </div>
    </div>
  );
}

function LisamBar() {
  return (
    <div style={{
      display: "flex",
      gap: "32px",
      paddingLeft: "32px",
      paddingTop: "16px",
      paddingBottom: "16px",
      alignItems: "center",
      background: "white"
    }}>
      <img src="https://liuonline.sharepoint.com/sites/Lisam/_api/siteiconmanager/getsitelogo?type=%271%27" style={{
        width: "48px",
        height: "48px"
      }} />
      <h1 style={{ fontSize: "24px", fontWeight: "600", color: "black" }}>Lisam</h1>
      <div style={{
        fontSize: "14px",
        color: "black",
        display: "flex",
        gap: "22px"
      }}>
        <a style={{
          fontWeight: "600",
          paddingBottom: "4px",
          borderBottom: "2px solid rgb(3, 120, 124)"
        }}>Home</a>
        <a>Courses and programs</a>
        <a>Lisam news</a>
        <a>Upcoming</a>
      </div>
    </div>
  );
}

export default function PageHeader() {
  return (
    <header className="page-header">
      <TopBar />
      <BreadcrumbsBar />
      <LisamBar />
    </header>
  );
}