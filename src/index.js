import axios from "axios";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle, { Container } from "./style";

const App = () => {
  const [url, setUrl] = useState();

  const getUrl = async () => {
    let inputValue = document.querySelector(".form input").value;
    const data = await axios
      .get(
        `https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=100x100`
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return console.log(error);
      });


    setUrl(await data)
    console.log(await data);
  };

  return (
    <>
      <Container>
        <h1>Gerador de QR Code</h1>
        <div className="form">
          <input type="text" placeholder="Digite a URL ou texto" />
          <button className="btn" onClick={getUrl}>
            Gerar QR Code
          </button>
        </div>
        {url && (
          <div className="qrcode">
            <img src={url} alt="" />
          </div>
        )}
      </Container>
      <GlobalStyle />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
