import React from "react";

const Signature = ({
  name,
  charge,
  email,
  telephone,
  photoURL,
  font,
  color,
}) => {
  const validateTelephone = (tel) => {
    const telephoneArray = tel.split("");
    return telephoneArray[0] === "5" && telephoneArray[1] === "7"
      ? `+${tel}`
      : `+57 ${tel}`;
  };

  return (
    <>
      {"--"}
      <table style={{ fontFamily: font }}>
        <tbody>
          <tr
            style={{
              textDecoration: "none !important",
              textDecorationColor: "transparent",
            }}
          >
            <td
              style={{
                textAlign: "left",
                textDecoration: "none !important",
                textDecorationColor: "transparent",
              }}
            >
              <p
                style={{
                  fontWeight: "bolder",
                  fontSize: "small",
                  lineHeight: "150%",
                  margin: 0,
                  color: "#101921",
                }}
              >
                {name ? name : "Agregue un nombre"}
              </p>
              <p
                style={{
                  fontSize: "small",
                  lineHeight: "150%",
                  margin: 0,
                  color: "#101921",
                }}
              >
                {charge ? charge : "Agregue un cargo"}
              </p>
              <a
                style={{
                  textDecoration: "none !important",
                  fontSize: "small",
                  lineHeight: "150%",
                  color: color,
                  margin: 0,
                  textDecorationColor: "transparent",
                  display: "inline-block",
                }}
                href={`mailto:${email ? email : "hablemos@weareangular.com"}`}
              >
                {email ? email : "Agregue un correo"}
              </a>
              {telephone ? (
                <>
                  {" "}
                  •{" "}
                  <a
                    style={{
                      textDecoration: "none !important",
                      fontFamily: font,
                      fontSize: "small",
                      lineHeight: "150%",
                      color: color,
                      margin: 0,
                      textDecorationColor: "transparent",
                      display: "inline-block",
                    }}
                    href={`tel:${validateTelephone(telephone)}`}
                  >
                    {validateTelephone(telephone)}
                  </a>
                </>
              ) : null}
            </td>
            <td
              style={{
                verticalAlign: "top",
                textAlign: "right",
                height: "30px",
                boxSizing: "border-box",
              }}
            >
              {photoURL ? (
                <img
                  src={photoURL}
                  style={{
                    height: "30px",
                    border: `2px solid ${color}`,
                    borderRadius: "50%",
                    marginRight: "10px",
                    marginBottom: "10px",
                  }}
                  height="30px"
                  alt="Team"
                />
              ) : null}
              <img
                src="//weareangular.com/static/images/angular-logo-new-black.png"
                style={{
                  height: "30px",
                  margin: "2px 0",
                  marginBottom: "10px",
                }}
                height="30px"
                alt="Angular Logo"
              />
            </td>
          </tr>
          <tr style={{ textDecoration: "none" }}>
            <td colSpan="2" style={{ textDecoration: "none" }}>
              <p
                style={{
                  fontFamily: font,
                  fontSize: "small",
                  lineHeight: "150%",
                  margin: 0,
                  paddingTop: "10px",
                  color: "#5d6b77",
                }}
              >
                Cl. 18 Nº 122 - 135, Cali, Colombia <br />©{" "}
                {new Date().getFullYear()} Angular Diseño más Interacción S.A.S.
              </p>
              <a
                style={{
                  textDecoration: "none",
                  fontFamily: font,
                  fontSize: "small",
                  lineHeight: "150%",
                  color: "#5d6b77",
                  margin: 0,
                  textDecorationColor: "transparent",
                }}
                href="https://weareangular.com"
              >
                www.weareangular.com
              </a>
            </td>
          </tr>
          <tr style={{ textDecoration: "none !important" }}>
            <td
              colSpan="2"
              style={{ textDecoration: "none !important", fontSize: "9px" }}
            >
              <p
                style={{
                  fontFamily: font,
                  fontSize: "x-small",
                  lineHeight: "150%",
                  color: "#b3bdc3",
                  margin: 0,
                  paddingTop: "10px",
                }}
              >
                La información adjunta es exclusiva para la persona a la cual se
                dirige este mensaje, la cual puede contener información
                confidencial y/o material privilegiado. Cualquier revisión,
                retransmisión, diseminación o uso del mismo, así como cualquier
                acción que se tome respecto a la información contenida, por
                personas o entidades diferentes al propósito original de las
                mismas, es ilegal. Si usted recibe este mensaje por error, favor
                notifíqueme y elimine ese material.
                <br />
                El destinatario de este mensaje debe verificar con sus
                protecciones que el mismo no está afectado por virus u otros
                defectos. El remitente no asume responsabilidad alguna por el
                recibo, transmisión y uso de este material.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      {"--"}
    </>
  );
};

export { Signature };
