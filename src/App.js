import Header from "./Component/Header/Header";
import SectionCatchPhrase from "./Component/CatchPhrase/SectionCatchPhrase";
import CttBoard from "./Component/CttBoard/CttBoard";
import "./App.css";
import "./Component/Header/Header.scss";
import "./Component/CatchPhrase/SectionCatchPhrase.scss";
import "./Component/CttBoard/CttBoard.scss";
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
