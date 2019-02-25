import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "./NavBar";
import App from "./App";

//https://codesandbox.io/embed/p2wqnk3zqj
//https://react-bootstrap.github.io/components/alerts/#alert-props
//http://bvaughn.github.io/react-virtualized/#/components/List
//http://bootstrap-notify.remabledesigns.com/
//https://daneden.github.io/animate.css/
//https://github.com/chadly/react-bs-notifier
//https://www.npmjs.com/package/reactjs-popup
//https://react-dropzone.js.org/
//https://reacttraining.com/react-router/web/example/basic
//https://mdbootstrap.com/docs/react/getting-started/download/
//https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/
//http://woodphoriaky.com/wp-content/uploads/2018/05/alpha-logo-design-alpha-logo-rose-liang-dribbble-template.png
//chrome-extension://klbibkeccnjlkjkiokjodocebajanakg/suspended.html#ttl=Responsive%20Data%20Tables%20%7C%20CSS-Tricks&pos=3067&uri=https://css-tricks.com/responsive-data-tables/
const Navi = document.getElementById("Nav");
ReactDOM.render(<Nav />, Navi);
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
