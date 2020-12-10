import React, { useState } from "react";
import logo from "./assets/images/waa-logo-2021-icon-night.svg";
import "./app.scss";
import { Signature } from "./components/signature";
import { PrimaryInput } from "./components/inputs";
import { colors } from "./assets/style/colors";
import { charges } from "./assets/content";

const App = () => {
  const [name, setName] = useState("");
  const [charge, setCharge] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [photoURL, setPhotoURL] = useState(
    "https://weareangular.com/static/images/juan-perez.png"
  );
  const [color, setColor] = useState(colors[0]);

  const copyToClip = (str) => {
    function listener(e) {
      e.clipboardData.setData("text/html", str);
      e.clipboardData.setData("text/plain", str);
      e.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
  };

  return (
    <div className="app">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <h1>Signature Generator</h1>
      </header>

      <div className="form-container">
        <p>Fill the inputs</p>
        <form>
          <PrimaryInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeHolder="Full name"
            isRequired
          />

          <PrimaryInput
            type="text"
            value={charge}
            onChange={(e) => setCharge(e.target.value)}
            placeHolder="Current position"
            isRequired
            isSelect
            optionsSelect={charges}
          />

          <PrimaryInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeHolder="Work email"
            isRequired
          />

          <PrimaryInput
            type="tel"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            placeHolder="Contact phone number"
          />

          <PrimaryInput
            type="url"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            placeHolder="URL profile image"
          />
        </form>
        <p>Select your favorite color</p>
        <div className="color-options">
          {colors.map((option, index) => (
            <span
              key={index}
              style={{
                background: option,
                boxShadow:
                  option === color ? `0px 0px 10px ${option}dd` : `none`,
              }}
              onClick={() => setColor(option)}
              className={option === color ? "selected-color" : ""}
              title={option}
            ></span>
          ))}
        </div>
      </div>
      <div className="guide">
        <p>
          A continuación, cuando tengas tu información lista, dale click en{" "}
          <b>Copiar Firma</b> o selecciona el contenido desde los dos guiones
          finales hasta los dos guiones iniciales, copialo y pégalo como firma
          de correo electrónico.{" "}
          <b>
            Cuando pegues el contenido asegúrate de eliminar con cuidado los
            guiones.
          </b>
        </p>
        <button
          style={{
            border: "none",
            background: `${color}33`,
            color: color,
          }}
          onClick={() =>
            copyToClip(document.getElementById("signature").innerHTML)
          }
        >
          Copiar firma
        </button>
      </div>
      <div className="container-signature" id="signature">
        <Signature
          name={name}
          charge={charge}
          email={email}
          telephone={telephone}
          photoURL={photoURL}
          font="Helvetica,'Roboto',Arial, sans-serif"
          color={color}
        />
      </div>
      <footer>
        <p>
          © {new Date().getFullYear()}{" "}
          <a
            href="https://weareangular.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color }}
          >
            We Are Angular
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default App;
