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
      <table style={{ fontFamily: font, fontStyle: "normal" }}>
        <tbody>
          <tr
            style={{
              textDecoration: "none",
              textDecorationColor: "transparent",
            }}
          >
            <td
              style={{
                textAlign: "left",
                textDecoration: "none",
                textDecorationColor: "transparent",
              }}
            >
              <p
                style={{
                  fontWeight: "bolder",
                  fontFamily: font,
                  fontSize: "small",
                  fontStyle: "normal",
                  lineHeight: "150%",
                  margin: 0,
                  color: "#101921",
                }}
              >
                {name ? name : "Add your full name"}
              </p>
              <p
                style={{
                  fontSize: "small",
                  fontFamily: font,
                  fontStyle: "normal",
                  lineHeight: "150%",
                  margin: 0,
                  color: "#101921",
                }}
              >
                {charge ? charge : "Add your current position"}
              </p>
              <a
                style={{
                  textDecoration: "none",
                  fontFamily: font,
                  fontSize: "small",
                  lineHeight: "150%",
                  color: color,
                  margin: 0,
                  textDecorationColor: "transparent",
                  display: "inline-block",
                }}
                href={`mailto:${email ? email : "hello@weareangular.com"}`}
              >
                {email ? email : "Add your work email"}
              </a>
              {telephone ? (
                <>
                  {" "}
                  •{" "}
                  <a
                    style={{
                      textDecoration: "none",
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
                height: "40px",
                boxSizing: "border-box",
              }}
            >
              {photoURL ? (
                <img
                  src={photoURL}
                  style={{
                    height: "40px",
                    border: `2px solid ${color}`,
                    borderRadius: "50%",
                    marginRight: "15px",
                    marginBottom: "10px",
                    objectFit: "cover",
                    width: "40px",
                  }}
                  height="40px"
                  width="40px"
                  alt={name ? name : "Profile Member"}
                />
              ) : null}
              <img
                src="https://res.cloudinary.com/weareangular/image/upload/v1607026971/weareangular/mailing/waa-logo-2021-icon-night_upsrz6.png"
                style={{
                  height: "40px",
                  margin: "2px 0",
                  marginBottom: "10px",
                }}
                height="40px"
                alt="We Are Angular Logo"
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
                Cl. 18 No. 122-135, Cali, Colombia <br />©{" "}
                {new Date().getFullYear()} We Are Angular
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
