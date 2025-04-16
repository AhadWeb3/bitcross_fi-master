import React, { useState, useEffect, useRef } from "react";

import { useModal } from "./ModalContext";

import {
  Grid,
  Message,
  Dropdown,
  Input,
  Image,
  Button,
} from "semantic-ui-react";
import bitcoin_logo from "../assets/bitcoin.svg";
import solana_logo from "../assets/solana.svg";
import flip from "../assets/flip.svg";

import "./methods.css";
import "./buttonstyle.css";

function Swap({ account = null, tokenOptions }) {
  const { openModal } = useModal();

  const containerRef = useRef(null);

  const [highlightedDivId, setHighlightedDivId] = useState(null);

  const [selectedValueSend, setSelectedValueSend] = useState(
    tokenOptions[0].value
  );
  const [selectedValueReceive, setSelectedValueReceive] = useState(
    tokenOptions[1].value
  );

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // If clicked outside the divs container, remove the highlight
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setHighlightedDivId(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleClick = (id) => {
    // Set the clicked div as the only highlighted div
    setHighlightedDivId(id);
  };

  const handleChangeSend = (e, { value }) => {
    setSelectedValueSend(value);
  };

  const handleChangeReceive = (e, { value }) => {
    setSelectedValueReceive(value);
  };

  const handleFlip = () => {
    setSelectedValueSend((prevValue) => {
      setSelectedValueReceive(selectedValueSend);
      return selectedValueReceive;
    });
  };

  let nested_layout = (
    <div
      style={{
        backgroundColor: "#162125",
        padding: "5%",
        borderRadius: "10px",
      }}
    >
      <p
        style={{
          color: "#ede7df",
          fontFamily: "'Raleway', sans-serif",
          textAlign: "left",
        }}
      >
        You're paying
      </p>

      <div
        ref={containerRef}
        key={1}
        className={`inputDiv ${highlightedDivId === 1 ? "borderHighlight" : ""}`}
        onClick={() => handleClick(1)}
        style={{
          backgroundColor: "#1f4452",
          padding: "2%",
          borderRadius: "10px",
          textAlign: "left",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Dropdown
            fluid
            selection
            options={tokenOptions}
            value={selectedValueSend}
            onChange={handleChangeSend}
            style={{
              backgroundColor: "#0d303d",
              color: "#ede7df",
              fontFamily: "'Raleway', sans-serif",
              width: "140px",
              marginRight: "10px",
            }}
          />

          <Input
            className="inputContent"
            placeholder="0.00"
            size="mini"
            type="number"
            input={{
              style: {
                backgroundColor: "#1f4452",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "5px",
                fontSize: "1.6rem",
              },
            }}
          />
        </div>
      </div>

      <div
        style={{
          marginTop: "4%",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <hr style={{ width: "100%", borderTop: "1px solid #41402f" }} />
        <Image
          src={flip}
          onClick={handleFlip}
          style={{
            position: "absolute",
            top: "-50%",
            cursor: "pointer",
          }}
        />
      </div>

      <p
        style={{
          color: "#ede7df",
          fontFamily: "'Raleway', sans-serif",
          textAlign: "left",
          marginTop: "3%",
        }}
      >
        To receive
      </p>
      <div
        ref={containerRef}
        key={2}
        className={`inputDiv ${highlightedDivId === 2 ? "borderHighlight" : ""}`}
        onClick={() => handleClick(2)}
        style={{
          backgroundColor: "#0d303d",
          padding: "2%",
          borderRadius: "10px",
          textAlign: "left",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Dropdown
            fluid
            selection
            options={tokenOptions}
            value={selectedValueReceive}
            onChange={handleChangeReceive}
            style={{
              backgroundColor: "#1f4452",
              color: "#ede7df",
              fontFamily: "'Raleway', sans-serif",
              width: "140px",
              marginRight: "10px",
            }}
          />

          <Input
            className="inputContent"
            placeholder="0.00"
            size="mini"
            type="number"
            input={{
              style: {
                backgroundColor: "#0d303d",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "5px",
                fontSize: "1.6rem",
              },
            }}
          />
        </div>
      </div>

      <div style={{ marginTop: "3%", display: "flex", gap: "2%" }}>
        <Button
          className="custom-button"
          style={{
            flex: 1,
            borderRadius: "4px",
            padding: "2%",
            backgroundColor: "#2b2d19",
            color: "#ede7df",
            fontFamily: "'Raleway', sans-serif",
          }}
        >
          Mint
        </Button>
      </div>
    </div>
  );

  let layout = <div></div>;

  if (account === null) {
    layout = (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          className="custom-button"
          onClick={openModal}
          style={{ padding: "2%" }}
        >
          Connect Wallet
        </Button>
      </div>
    );
  } else if (account === -1) {
    layout = <Message negative>Error connecting to Wallet</Message>;
  } else if (account === -2) {
    layout = <Message negative>Wallet is not installed</Message>;
  } else {
    layout = <div style={{ width: "100%" }}>{nested_layout}</div>;
  }

  return <div>{layout}</div>;
}

export default Swap;
