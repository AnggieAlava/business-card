import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Buttons = () => {
  const myPage = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="wrap-btn">
      <button
        className="btn"
        onClick={() => myPage("https://github.com/AngelesGit")}>
        {" "}
        <AiOutlineGithub /> Github
      </button>
      <button
        className="btn"
        onClick={() => myPage("https://www.linkedin.com/in/anggiealava/")}>
        <AiFillLinkedin /> Linkedin
      </button>
    </div>
  );
};

export default Buttons;
