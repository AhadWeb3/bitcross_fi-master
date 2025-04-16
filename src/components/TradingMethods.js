import React, { useState, useEffect } from "react";

import { useModal } from "./ModalContext";

import { Grid, Image } from "semantic-ui-react";

import swap_order from "../assets/swap_order.svg";

import "./trade.css";

function TradingMethods() {
  const { selectedOperationType, selectedType, setSelectedType } = useModal();

  const [method, setMethod] = useState("swap");

  useEffect(() => {
    if (selectedType === "swap") {
      setMethod(selectedType);
    } else {
      setMethod("swap");
      setSelectedType("swap");
    }
  }, [selectedOperationType, selectedType, setSelectedType]);

  const handleSelectType = (type) => {
    setSelectedType(type);
    sessionStorage.setItem("selectedType", type);
  };

  let layout = (
    <Grid style={{ width: "100%" }}>
      <Grid.Row only="computer tablet" style={{ justifyContent: "center" }}>
        <Grid.Column width={6} style={{ display: "flex", justifyContent: "center" }}>
          <Grid
            className="methodsDiv"
            style={{
              cursor: "pointer",
              borderBottom: "2px solid #6f8586",
              backgroundColor: "#0e1d24",
            }}
            onClick={() => handleSelectType("swap")}
          >
            <Grid.Column width={5} verticalAlign="middle">
              <div
                style={{
                  border: "1px solid grey",
                  padding: "2px",
                  borderRadius: "5px",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#19292f",
                    padding: "6px",
                    margin: "2%",
                    borderRadius: "8px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    src={swap_order}
                    size="small"
                    style={{ width: "120px", height: "30px" }}
                  />
                </div>
              </div>
            </Grid.Column>
            <Grid.Column width={8} verticalAlign="middle">
              <div className="new-header-text">
                <p>Swap</p>
                <p>Instant token swap</p>
              </div>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row only="mobile" style={{ justifyContent: "center" }}>
        <Grid.Column width={5} style={{ display: "flex", justifyContent: "center" }}>
          <Grid
            className="methodsDiv"
            centered
            style={{
              borderBottom: "2px solid #6f8586",
              backgroundColor: "#0e1d24",
              width: "100%",
              height: "8em",
              cursor: "pointer",
            }}
            onClick={() => handleSelectType("swap")}
          >
            <Grid.Row>
              <div
                style={{
                  border: "1px solid grey",
                  borderRadius: "5px",
                  padding: ".2rem",
                }}
              >
                <Image
                  src={swap_order}
                  size="mini"
                  style={{
                    width: "4em",
                    height: "4em",
                  }}
                />
                <div className="new-header-text">
                  <p>Swap</p>
                </div>
              </div>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );

  return layout;
}

export default TradingMethods;
