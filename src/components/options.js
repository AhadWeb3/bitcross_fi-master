import bitcoin_logo from "../assets/bitcoin.svg";
import solana_logo from "../assets/solana.svg";

export const tokenOptions = [
  {
    key: "btc",
    text: "btc",
    value: "btc",
    image: { avatar: true, src: bitcoin_logo },
  },
  {
    key: "sol",
    text: "sol",
    value: "sol",
    image: { avatar: true, src: solana_logo },
  },
];

export const liquidityOptions = [
  { key: "add", text: "Add Liquidity", value: "add" },
  { key: "remove", text: "Remove Liquidity", value: "remove" },
  { key: "adjust", text: "Adjust Liquidity", value: "adjust" },
];
