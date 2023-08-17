import Header from "./Component/Header";
import SectionCatchPhrase from "./Component/SectionCatchPhrase";
import CttBoard from "./Component/CttBoard";
import "./App.css";
import "./Header.scss";
import "./SectionCatchPhrase.scss";
import "./CttBoard.scss";
import { Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Header />
      <SectionCatchPhrase />
      <CttBoard />
    </div>
  );
}
