import "../style/footer.css";
import langContext from "../Context";
import { useState } from "react";

const Footer = () => {
  const [lang, setLang] = useState("");

  const handleChangeLang = (event) => {
    setLang(event.target.value);
    console.log(handleChangeLang);
  };
  return (
    <langContext.Consumer>
      {(value) => {
        return (
          <div className="footer">
            <select
              name=""
              id=""
              className="select"
              onChange={handleChangeLang}
            >
              <option value="vi">VI</option>
              <option value="en">EN</option>
            </select>
          </div>
        );
      }}
    </langContext.Consumer>
  );
};

export default Footer;
