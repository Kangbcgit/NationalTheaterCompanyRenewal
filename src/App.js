import Header from "./Component/Header";
import SectionCatchPhrase from "./Component/SectionCatchPhrase";
import "./App.css";
import "./Header.scss";
import "./SectionCatchPhrase.scss";
import { Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Header />
      <SectionCatchPhrase />
    </div>
  );
}
