import CoursesSection from "~/sections/courses-section";
import type { Route } from "./+types/home";
import PageHeader from "~/sections/page-header";
import Footer from "~/sections/footer";
import Links from "~/sections/links-section";
import NewsSection from "~/sections/news-section";
import { useState } from "react";
import { useEffect } from "react";
import "~/styles/terminal.css";
import Icon from "~/components/icon";
import TwoFactorAuthentication from "~/components/tfa";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Lisam - Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
//href="/_layouts/15/images/favicon.ico?rev=43"

type TerminalCommand = {
  desc: string;
  onRun: () => void;
};

export default function Home() {
  const [fireToggled, setFireToggled] = useState(false);
  const [logoSwitched, setLogoSwitched] = useState(false);
  const [memeifyNews, setMemeifyNews] = useState(false);
  const [historyAvailable, setHistoryAvailable] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false); // TODO: use when feature is done
  const [teleportingCert, setTeleportingCert] = useState(false);
  const [raccursorEnabled, setRaccursorEnabled] = useState(false);
  const [editingEnabled, setEditingEnabled] = useState(false);

  const [twoFactorTime, setTwoFactorTime] = useState(Date.now());

  const [showTermPointer, setShowTermPointer] = useState<boolean>(true);
  const [showTerminal, setShowTerminal] = useState<boolean>(false)
  const [commandResponse, setCommandResponse] = useState<string>("Do you want to");
  const [terminalText, setTerminalText] = useState<string>("");
  const [commands, setCommands] = useState<TerminalCommand[]>([
    {
      desc: "use raccursor",
      onRun: () => {
        setRaccursorEnabled(true);
        setCommandResponse("Activating cute cursor!");
      }
    },
    { 
      desc: "set lisam on fire",
      onRun: () => {
        setFireToggled(true);
        setCommandResponse("Let the world burn!");
      }
    },
    {
      desc: "update the logo",
      onRun: () => {
        setLogoSwitched(true);
        setCommandResponse("Now that's an improvement!");
      }
    },
    {
      desc: "post fake news",
      onRun: () => {
        setMemeifyNews(true);
        setCommandResponse("Enlighten the masses!");
      }
    },
    {
      desc: "show search history",
      onRun: () => {
        setHistoryAvailable(true);
        setCommandResponse("Secrets: exposed!");
      }
    },
    {
      desc: "edit the page",
      onRun: () => {
        setEditingEnabled(true);
        setCommandResponse("This site could use a redesign!");
      }
    },
    {
      desc: "f**k up certificate link",
      onRun: () => {
        setTeleportingCert(true);
        setCommandResponse("Certification: uncertified!");
      }
    },
    {
      desc: "trigger 2FA",
      onRun: () => {
        setTwoFactorEnabled(true);
        setCommandResponse("Made your account more secure!");
      }
    }
  ]);

  function toggleTerminal() {
    setShowTermPointer(false);
    if (showTerminal == false)
      setShowTerminal(true)
    else
      setShowTerminal(false)
  }

  function hax(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const command = event.target.command.value.trim();
    event.target.command.value = "";

    if (/^\d+$/.test(command)) {
      // If is integer
      const commandIdx = parseInt(command) - 1;
      if (commandIdx >= 0 && commandIdx < commands.length) {
        commands[commandIdx].onRun();
        let newCommands = commands;
        newCommands.splice(commandIdx, 1);
        setCommands(newCommands);
      } else {
        setCommandResponse("You can't just pretend there are\nmore commands than there are!");
      }
    } else if (command == "") {
      setCommandResponse("Hello????\nAre you gonna enter a command?");
    } else {
      setCommandResponse("Were you dropped as a child?\nEnter a real command!");
    }
  }

  function resetTwoFactorTime() {
    setTwoFactorEnabled(false);
    setTimeout(() => {
      setTwoFactorEnabled(true);
    }, 10000);
  }

  useEffect(() => {
    let newTerminalText = commandResponse + "\n";
    commands.forEach((command, idx) => {
      newTerminalText += "\n";
      newTerminalText += `[${idx + 1}] ${command.desc}`;
    });
    setTerminalText(newTerminalText);
  }, [commandResponse]);

  return (
    <div style={{cursor: raccursorEnabled ? "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🦝</text></svg>\") 16 0, auto" : "default"}}>
      {twoFactorEnabled && <TwoFactorAuthentication resetTwoFactorTime={resetTwoFactorTime} />}
      <div style={{ display: twoFactorEnabled ? "none" : "contents" }}>
        <PageHeader fireToggled={fireToggled} logoSwitched={logoSwitched} historyAvailable={historyAvailable} />
        <main>
          <div style={{ padding: "0 16px", }}>
            <CoursesSection isEditing={editingEnabled} />
            <NewsSection memeifyNews={memeifyNews} />
            <Links teleportingCert={teleportingCert} />
          </div>
        </main>
        <Footer />
        {showTerminal && (
          <form className="terminal-win" onSubmit={hax}>
            <pre>{terminalText}</pre>
            <input name="command" id="command" autoComplete="off" />
            <div className="input-prompt">&gt;</div>
          </form>
        )}

        <div style={{
          position: "fixed",
          zIndex: "1000",
          right: "40px",
          bottom: "40px",
          cursor: "pointer",
        }}>
          {showTermPointer && (
            <div className="terminal-pointer">
              <Icon type="pointing" />
            </div>
          )}
          <button style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            border: "none",
            overflow: "hidden",
            cursor: "inherit",
            boxShadow: "0 0 10px 0 rgba(0,0,0,.4)"
          }}
            onClick={toggleTerminal}>
            <img src="https://github.com/LiTHe-Hax/website-assets/blob/main/images/2025-2026/contacts/board/tyson_h.jpg?raw=true" />
          </button>
        </div>
      </div>
    </div>
  );
}
