import "./header.css";
import sun from "../../assets/icon-sun.svg";
import dark from "../../assets/dark.svg";

export default function Header(props: {
  username: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  users: any;
  setUsers: React.Dispatch<React.SetStateAction<string>>;
  lightMode: boolean;
  setLightMode: React.Dispatch<any>;
}) {
  const githubUsers = async () => {
    const response = await fetch(
      `https://api.github.com/users/${props.username}`
    );
    if (response.ok) {
      const data = await response.json();
      props.setUsers(data);
    }
  };

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
        <span className="error">
          {props.username != props.users.login ? "No results" : ""}
        </span>
      </div>
    </>
  );
}
