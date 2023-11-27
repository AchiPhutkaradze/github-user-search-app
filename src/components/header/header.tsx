import "./header.css";
import sun from "../../assets/icon-sun.svg";
import dark from "../../assets/dark.svg";
import searchIcon from "../../assets/icon-search.svg";

export default function Header(props: {
  username: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  users: any;
  setUsers: React.Dispatch<React.SetStateAction<string>>;
  lightMode: any;
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
            <span className="LIGHT">
              {props.lightMode == true ? "DARK" : "LIGHT"}
            </span>
            {props.lightMode == false ? (
              <img src={sun} alt="sun-icon" />
            ) : (
              <img src={dark} alt="sun-icon" />
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
    </>
  );
}
