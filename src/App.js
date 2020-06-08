import React, { useState } from "react";
import logo from "./assets/images/angular-logo-new-black.svg";
import "./app.scss";
import { Signature } from "./components/signatiure";

const App = () => {
  const colors = ["#00B6C7", "#F20002", "#FF9900", "#00AA96", "#ECB89E"];
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
        <p>Llena los campos</p>
        <form>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre completo"
            required
          />

          <input
            type="text"
            value={charge}
            onChange={(e) => setCharge(e.target.value)}
            placeholder="Cargo en Angular"
            required
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electrónico"
            required
          />

          <input
            type="tel"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            placeholder="Teléfono de contacto"
          />

          <input
            type="url"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            placeholder="URL de imagen"
          />

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
        </form>
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
            border: `2px solid ${color}`,
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
          font="Helvetica, Arial, sans-serif"
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
