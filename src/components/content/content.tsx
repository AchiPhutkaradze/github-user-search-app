import "./content.css";
import person from "../../assets/cat.svg";
import location from "../../assets/icon-location.svg";
import website from "../../assets/icon-website.svg";
import twitter from "../../assets/icon-twitter.svg";
import company from "../../assets/icon-company.svg";

export default function Content(props: {
  users: any;
  setUsers: React.Dispatch<React.SetStateAction<object>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  lightMode: boolean;
  setLightMode: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const date = () => {
    const time = new Date(props.users.created_at);
    const monthNAmes = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNAmes[time.getMonth()];
    return month;
  };
  return (
    <main className={`main ${props.lightMode ? "color-for-main" : null}`}>
      {" "}
      <div className="person">
        <img
          src={
            props.username == props.users.login
              ? props.users.avatar_url
              : person
          }
          alt=""
          id="person-img"
        />
        <div className="three-text">
          <div className="name-login">
            <span
              style={props.lightMode == true ? { color: "black" } : undefined}
              className="Octocat f-s"
            >
              {props.users.name == null ? props.users.login : props.users.name}
            </span>
            <span className="login glb">{props.users.login}</span>
          </div>
          <div className="date">
            <span
              className={`join-date glb ${props.lightMode ? "for-text" : null}`}
            >
              Joined {props.users.created_at.slice(8, 10)} {date()}{" "}
              {props.users.created_at.slice(0, 4)}
            </span>{" "}
          </div>
          <div className="text-div">
            <span className={`text glb ${props.lightMode ? "for-text" : null}`}>
              {props.users.bio == null
                ? "This profile has no bio"
                : props.users.bio}
            </span>
          </div>
        </div>
      </div>
      <div
        className={`account ${props.lightMode ? "back-color-for-box" : null}`}
      >
        <div className="repos flex glb ">
          <span
            style={
              props.lightMode == true
                ? { color: "var(--steelblue)" }
                : undefined
            }
          >
            Repos
          </span>
          <span
            className="f-s"
            style={
              props.lightMode == true ? { color: "var(--black)" } : undefined
            }
          >
            {props.users.public_repos}
          </span>
        </div>
        <div className="followers flex glb">
          <span
            style={
              props.lightMode == true
                ? { color: "var(--steelblue)" }
                : undefined
            }
          >
            followers
          </span>
          <span
            className="f-s"
            style={
              props.lightMode == true ? { color: "var(--black)" } : undefined
            }
          >
            {props.users.followers}
          </span>
        </div>
        <div className="following flex glb">
          <span
            style={
              props.lightMode == true
                ? { color: "var(--steelblue)" }
                : undefined
            }
          >
            following
          </span>
          <span
            className="f-s"
            style={
              props.lightMode == true ? { color: "var(--black)" } : undefined
            }
          >
            {props.users.following}
          </span>
        </div>
      </div>
      <div className="footer">
        <div className="location x">
          <img src={location} />
          <span
            className="glb"
            style={
              props.lightMode == true ? { color: "var(--black)" } : undefined
            }
          >
            {props.users.location == null
              ? "Not Available"
              : props.users.location}
          </span>
        </div>
        <div className="website x">
          <img src={website} />
          <span className="glb">
            {" "}
            <a
              href={props.users.html_url}
              target="_blank"
              style={
                props.lightMode == true
                  ? { color: "#4B6A9B" }
                  : { color: " #FFF" }
              }
            >
              {props.users.html_url}
            </a>
          </span>
        </div>
        <div className="twitter x">
          <img src={twitter} />
          <span className="glb">
            <a
              href={`https://twitter.com/${props.users.twitter_username}`}
              target="_blank"
              className="twitter-span "
              style={
                props.lightMode == true
                  ? { color: "#4B6A9B" }
                  : { color: " #FFF", opacity: 0.6 }
              }
            >
              {props.users.twitter_username == null
                ? "Not Available"
                : props.users.twitter_username}
            </a>
          </span>
        </div>
        <div className="company x">
          <img src={company} />
          <span
            className="glb"
            style={
              props.lightMode == true ? { color: "var(--black)" } : undefined
            }
          >
            {props.users.company == null
              ? "Not Available"
              : props.users.company}
          </span>
        </div>
      </div>
    </main>
  );
}
