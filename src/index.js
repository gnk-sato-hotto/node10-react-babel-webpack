import React from "react";
import ReactDOM from "react-dom";
import './index.less';

import Home from "components/home";

const app = document.getElementById("app");
app ? ReactDOM.render(<Home />, app) : false;
