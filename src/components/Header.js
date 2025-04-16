import React from "react";
import { Grid, Image } from "semantic-ui-react";
import WalletConnectButton from "./WalletConnectButton";
import logo from "../assets/logo.png";
import "./buttonstyle.css";

function Header() {
  return (
    <div
      style={{
        paddingTop: "1%",
        paddingBottom: "1%",
        paddingLeft: "6%",
        paddingRight: "6%",
      }}
    >
      <Grid verticalAlign="middle" columns={2} centered>
        <Grid.Row only="computer">
          <Grid.Column width={4} floated="left">
            <Image
              src={logo}
              size="small"
              style={{ width: "30%", height: "auto" }}
            />
          </Grid.Column>

          <Grid.Column width={4} floated="right">
            <WalletConnectButton />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row only="tablet">
          <Grid.Column width={4} floated="left">
            <Image
              src={logo}
              size="small"
              style={{ width: "50%", height: "auto" }}
            />
          </Grid.Column>

          <Grid.Column width={4} floated="right">
            <WalletConnectButton />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row only="mobile" style={{ marginTop: "2%", marginBottom: "2%" }}>
          <Grid.Column width={8} floated="left">
            <Image
              src={logo}
              size="small"
              floated="left"
            />
          </Grid.Column>

          <Grid.Column width={8} floated="right" textAlign="right">
            <WalletConnectButton />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Header;
