import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
class AlertTrue extends React.Component {
  constructor(props) {
    super(props);
    this.click = props.click;

    this.state = { show: true };
  }

  render() {
    const handleHide = () => this.setState({ show: false });
    const handleShow = () => {
      this.setState({ show: true });
    };
    return (
      <>
        <Alert show={this.state.show} variant="success">
          <Alert.Heading>Good Job!</Alert.Heading>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={this.click} variant="outline-success">
              Next game!
            </Button>
          </div>
        </Alert>

        {!this.state.show && <Button onClick={handleShow}>Restart</Button>}
      </>
    );
  }
}

export default AlertTrue;
