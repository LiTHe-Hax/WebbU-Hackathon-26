import { useEffect, useState } from "react";

import Icon from "~/components/icon";
import FlexSpacer from "~/components/flex-spacer";

import "~/styles/page-header.css";
import FlameCanvas from "~/scripts/FlameCanvas";

import type { FlameParams } from "~/scripts/flame";
import LogoBogo from "~/scripts/logoChange";

function SearchButton() {
  // TODO: on input focus, not button focus
  const [isFocused, setIsFocused] = useState(false);

  return (
    <button onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
      <Icon type={isFocused ? "back" : "magnifying"} />
    </button>
  );
}

function TopBar({
  logoSwitched,
  historyAvailable
}: {
  logoSwitched: boolean,
  historyAvailable: boolean
}) {
  return (
    <div className="top-bar">
      <LogoBogo logoSwitched={logoSwitched} />
      <div className="search-container">
        <SearchButton />
        <input type="search" placeholder="Search across sites" list="past-searches" />
        {historyAvailable && (
          <datalist id="past-searches">
            <option value="how to delete search history"></option>
            <option value="how to hack lisam"></option>
            <option value="how to hide notes during exam"></option>
            <option value="am i allowed notes during exams?"></option>
            <option value="boobs"></option>
            <option value="what does 67 mean?"></option>
          </datalist>
        )}
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

function LisamBar({fireToggled}: {fireToggled: boolean}) {
  const [flameIntensity, setFlameIntensity] = useState(1);

  const [flameParams1, setFlameParams1] = useState<FlameParams>({
    maxParticle: 20,
    frequency: 25,
    innerColor: "orange",
    outerColor: "red",
    friction: 0.95,
    maxDistance: 8
  });

  const [flameParams2, setFlameParams2] = useState<FlameParams>({
    maxParticle: 35,
    frequency: 40,
    innerColor: "yellow",
    outerColor: "red",
    friction: 0.92,
    maxDistance: 6,
  });

  const [flameParams3, setFlameParams3] = useState<FlameParams>({
    maxParticle: 10,
    frequency: 20,
    innerColor: "yellow",
    outerColor: "red",
    friction: 0.97,
    maxDistance: 9,
    sizeCurve: () => 8
  });

  const [flameParams4, setFlameParams4] = useState<FlameParams>({
    maxParticle: 15,
    frequency: 20,
    innerColor: "yellow",
    outerColor: "red",
    friction: 0.93,
    maxDistance: 9,
    sizeCurve: () => 6
  });

  const [brightness, setBrightness] = useState(100)
  const [rotation, setRotation] = useState(0)
  const [position, setPosition] = useState(0)

  useEffect(() => {
    if (!fireToggled) return;

    const interval = setInterval(() => {
      setBrightness((prev) => {
        const newBrightness = Math.max(prev - 1, 0);

        if (newBrightness === 0) {
          setRotation((prevRot) => (prevRot < 45 ? prevRot + 1 : 45));
          setPosition((prevPos) => rotation < 45 ? prevPos + 1 : prevPos);

          setFlameIntensity((prevIntensity) => Math.max(prevIntensity - 0.02, 0));
        }

        return newBrightness;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [fireToggled]);

  return (
    <div className="lisam-bar">
      {
        fireToggled &&
        <>
          <FlameCanvas params={{ ...flameParams1, frequency: flameParams1.frequency ? flameParams1.frequency * flameIntensity : 0 }} xOffset={72} yOffset={156} zIndex={0} />
          <FlameCanvas params={{ ...flameParams2, frequency: flameParams2.frequency ? flameParams2.frequency * flameIntensity : 0 }} xOffset={42} yOffset={156} zIndex={0} />
          <FlameCanvas params={{ ...flameParams3, frequency: flameParams3.frequency ? flameParams3.frequency * flameIntensity : 0 }} xOffset={80} yOffset={156} zIndex={2} />
          <FlameCanvas params={{ ...flameParams4, frequency: flameParams4.frequency ? flameParams4.frequency * flameIntensity : 0 }} xOffset={32} yOffset={156} zIndex={2} />
        </>
      }
      <div
        className="logo-container"
        style={{
          position: "relative",
          height: "48px",
          overflow: "hidden",
        }}
      >
        <div style={{
          transform: `translateY(${position}px)`,
          display: "inline-block"
        }}>
          <img src="https://liuonline.sharepoint.com/sites/Lisam/_api/siteiconmanager/getsitelogo?type=%271%27"
            style={{
              filter: `brightness(${brightness}%)`,
              transformOrigin: "center",
              transform: `rotate(${rotation}deg)`,
            }}
          />
        </div>
      </div>
      <div className="nav-container">
        <h1>Lisam</h1>
        <nav>
          <a className="selected">Home</a>
          <a>Courses and programs</a>
          <a>Lisam news</a>
          <a>Upcoming</a>
        </nav>
      </div>
    </div>
  );
}

export default function PageHeader({
  fireToggled,
  logoSwitched,
  historyAvailable,
}: {
  fireToggled: boolean,
  logoSwitched: boolean,
  historyAvailable: boolean,
}) {
  return (
    <header className="page-header">
      <TopBar logoSwitched={logoSwitched} historyAvailable={historyAvailable} />
      <BreadcrumbsBar />
      <LisamBar fireToggled={fireToggled} />
    </header>
  );
}