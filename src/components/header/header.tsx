import "./header.css";
import sun from "../../assets/icon-sun.svg";
import dark from "../../assets/dark.svg";
import { useState } from "react";

export default function Header(props: {
  username: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  users: any;
  setUsers: React.Dispatch<React.SetStateAction<string>>;
  lightMode: boolean;
  setLightMode: React.Dispatch<any>;
}) {
  const [isTrue, setIsTrue] = useState<number>(0);

  const githubUsers = async () => {
    const response = await fetch(
      `https://api.github.com/users/${props.username}`
    );
    if (response.ok) {
      const data = await response.json();
      props.setUsers(data);
      setIsTrue(0);
    } else {
      setIsTrue(1);
    }
  };
  console.log(isTrue);
  return (
    <>
      <div className="header">
        <h1 style={props.lightMode == true ? { color: "black" } : undefined}>
          devfinder
        </h1>
        <button
          className={`btn-back-color ${
            props.lightMode == true ? "btn-back-color-two" : null
          }`}
          onClick={() => {
            props.setLightMode(!props.lightMode);
          }}
        >
          <div className="background">
            <span
              className={`light ${props.lightMode == true ? "dark" : ""}`}
            ></span>
            {props.lightMode == false ? (
              <img src={sun} id="sun-icon" />
            ) : (
              <img src={dark} id="dark-icon" />
            )}
          </div>
        </button>
      </div>
      <div className="search">
        <input
          type="text"
          className={`search-input ${
            props.lightMode ? "input-background-color" : null
          }`}
          onChange={(e) => props.setUserName(e.target.value)}
          value={props.username}
          placeholder={"Search GitHub username…"}
        />
        <button className="search-btn " onClick={githubUsers}>
          Search
        </button>
      </div>
      <div className="error-div">
        <span className="error">{isTrue === 1 ? "No results" : ""}</span>
      </div>
    </>
  );
}
