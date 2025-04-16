import React, { useState, useEffect } from "react";
import { useModal } from "./ModalContext";

import Swap from "./Swap";

import { Grid } from "semantic-ui-react";

import { tokenOptions } from "./options";

function TradingWorks({ account = null }) {
  const { selectedType, setSelectedType } = useModal();

  const [method, setMethod] = useState("swap");

  useEffect(() => {
    if (selectedType === "swap") {
      setMethod(selectedType);
    } else {
      setMethod("swap");
      setSelectedType("swap");
    }
  }, [selectedType, setSelectedType]);

  let layout = (
    <div>
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={8}>
            <Swap account={account} tokenOptions={tokenOptions} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );

  return layout;
}

export default TradingWorks;
