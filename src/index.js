import React, { Component } from "react";
import ReactDOM from "react-dom";
import Box from "./Box/Box.js";
import "./styles.css";
import Popup from "reactjs-popup";
import AlertTrue from "./Alert/AlertTrue";
import AlertFalse from "./Alert/AlertFalse";
import Button from "react-bootstrap/Button";

const localStorage = window.localStorage;
/*function getRandomList(i) {
  var arr = [];
  while (arr.length < i) {
    var r = Math.floor(Math.random() * 75) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}*/
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function getRandomInt(min, max) {
  /**
   * Returns a random integer between min (inclusive) and max (inclusive).
   * The value is no lower than min (or the next integer greater than min
   * if min isn't an integer) and no greater than max (or the next integer
   * lower than max if max isn't an integer).
   * Using Math.round() will give you a non-uniform distribution!
   */
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function random(i) {
  var array = [];
  array = [
    {
      id: 0,
      red: Math.abs(getRandomInt(0, 256)),
      blue: Math.abs(getRandomInt(0, 256)),
      green: Math.abs(getRandomInt(0, 256)),
      T: "Wrong one, try again"
    }
  ];
  for (i; i > 1; i--) {
    //creating all values until i=1
    array = [
      ...array,
      {
        id: i,
        red: Math.abs(
          getRandomInt(
            array[0].red - getRandomInt(12, 70),
            array[0].red + getRandomInt(4, 50)
          )
        ),
        blue: Math.abs(
          getRandomInt(
            array[0].blue - getRandomInt(12, 70),
            array[0].blue + getRandomInt(4, 50)
          )
        ),
        green: Math.abs(
          getRandomInt(
            array[0].green - getRandomInt(12, 70),
            array[0].green + getRandomInt(4, 50)
          )
        ),
        T: "Wrong one try again"
      }
    ];
  }
  return shuffle(array); //shuffling it all because they all depend on the index 0
}
const V = getRandomInt(0, 4);
function set() {
  const array = random(5); //main function creating the colors
  console.log(array); //Random Value for success check
  array[V].T = true;
  array[V].V = V;
  return array;
}
const Card = props => (
  <div className="card">
    <div className="header">{props.title} </div>
    <div className="content">{props.content}</div>
  </div>
);
if (localStorage.getItem("mycat") === null) {
  var cat = 0;
  localStorage.setItem("myCat", cat);
  console.log(localStorage.getItem("mycat"));
}
var array = set();

class App extends React.Component {
  state = {
    Color: array,
    Value: V,
    alert: null,
    error: false,
    score: localStorage.getItem("mycat"),
    current: 5
  };

  OnClickListener = index => {
    if (this.state.alert) {
      console.log("Cheater");
    } else if (!this.state.alert) {
      if (index === this.state.Value) {
        this.setState({ alert: true });
        console.log(this.state.Value);
        console.log("Right");
        localStorage.setItem("myCat", this.state.score + this.state.current);
        console.log(localStorage.getItem("mycat"));
      } else {
        this.setState({ alert: false });
        this.setState({ current: this.state.current - 1 });
        console.log(this.state.Value);
        console.log("Wrong");
      }
    }
  };

  randomCall = () => {
    var array = set();
    var state = {
      Color: array,
      Value: V,
      alert: null,
      error: false,
      score: this.state.score + this.state.current,
      current: 5
    };
    this.setState(state);
    console.log("rerender");
  };

  render() {
    let Alert = null;
    try {
      if (this.state.alert == null) {
        //   Alert = </>;
        Alert = null;
      } else if (this.state.alert) {
        // Alert = <AlertList alerts={alerts} />;
        Alert = <AlertTrue click={() => this.randomCall()} />;
      } else {
        Alert = <AlertFalse />;
      }
    } catch (error) {
      this.setState({ error });
    }

    if (this.state.error) {
      return <h1>Caught an error.</h1>;
    }

    let BoxJs = null;
    BoxJs = (
      <div>
        {this.state.Color.map((color, index) => (
          <td classname="td " key={color.id}>
            <Box
              key={color.id}
              red={color.red}
              blue={color.blue}
              green={color.green}
              click={() => this.OnClickListener(index)}
            />
          </td>
        ))}
      </div>
    );

    return (
      <div className="App">
        <h1>Welcome to the color</h1>
        <h2>
          The Color needed is RGB({this.state.Color[this.state.Value].red},
          {this.state.Color[this.state.Value].blue},
          {this.state.Color[this.state.Value].green})
        </h2>
        <div className="alert alert-primary" role="alert">
          Your Score is
          <br />
          <a href="#" className="alert-link">
            {this.state.score}
          </a>
        </div>
        {Alert}
        <table className="table" class="table">
          <tr className="tr">{BoxJs}</tr>
        </table>
      </div>
    );
  }
}

//https://react-bootstrap.github.io/components/alerts/#alert-props
//http://bvaughn.github.io/react-virtualized/#/components/List
//http://bootstrap-notify.remabledesigns.com/
//https://daneden.github.io/animate.css/
//https://github.com/chadly/react-bs-notifier
//https://www.npmjs.com/package/reactjs-popup
//https://react-dropzone.js.org/
//https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/
//http://woodphoriaky.com/wp-content/uploads/2018/05/alpha-logo-design-alpha-logo-rose-liang-dribbble-template.png
//chrome-extension://klbibkeccnjlkjkiokjodocebajanakg/suspended.html#ttl=Responsive%20Data%20Tables%20%7C%20CSS-Tricks&pos=3067&uri=https://css-tricks.com/responsive-data-tables/
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
