import { useState } from "react";
import "./App.css";
import Content from "./components/content/content";
import Header from "./components/header/header";
import data from "./data.json";

function App() {
  const [username, setUserName] = useState<string>("");
  const [users, setUsers] = useState<any>(data);
  const [lightMode, setLightMode] = useState<boolean>(false);
  console.log();

  return (
    <div className={`container ${lightMode ? " back-color" : null}`}>
      <Header
        username={username}
        setUserName={setUserName}
        users={users}
        setUsers={setUsers}
        lightMode={lightMode}
        setLightMode={setLightMode}
      />
      <Content
        users={users}
        setUsers={setUsers}
        username={username}
        setUsername={setUserName}
        lightMode={lightMode}
        setLightMode={setLightMode}
      />
    </div>
  );
}

export default App;
