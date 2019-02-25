import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

class AlertFalse extends React.Component {
  constructor(props) {
    super(props);

    this.state = { show: true };
  }

  render() {
    const handleHide = () => this.setState({ show: false });
    const handleShow = () => this.setState({ show: true });
    return (
      <>
        <Alert show={this.state.show} variant="danger">
          <Alert.Heading>Wrong!</Alert.Heading>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={handleHide} variant="outline-danger">
              Close me ya'll!
            </Button>
          </div>
        </Alert>

        {!this.state.show && <Button onClick={handleShow}>Show Alert</Button>}
      </>
    );
  }
}

export default AlertFalse;
