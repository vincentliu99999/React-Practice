import React, { Component } from "react";
import { Button, ButtonToolbar } from "react-bootstrap";

class BootstrapBtn extends Component {
  render() {
    return (
      <div class="panel panel-default">
        <div class="panel-heading">
          Circle Icon Buttons with Font Awesome Icons
        </div>

        <div class="panel-body">
          <h4> Theme Circle Buttons </h4>
          <button type="button" class="btn btn-default btn-circle">
            <i class="fa fa-check" />
          </button>
          <button type="button" class="btn btn-primary btn-circle">
            <i class="fa fa-list" />
          </button>
          <button type="button" class="btn btn-success btn-circle">
            <i class="fa fa-link" />
          </button>
          <button type="button" class="btn btn-info btn-circle">
            <i class="fa fa-check" />
          </button>
          <button type="button" class="btn btn-warning btn-circle">
            <i class="fa fa-times" />
          </button>
          <button type="button" class="btn btn-danger btn-circle">
            <i class="fa fa-heart" />
          </button>
          <br />
          <br />
          <h4> Theme React Bootstrap Circle Buttons </h4>
          <ButtonToolbar>
            <Button bsStyle="btn btn-default btn-circle">
              <i className="fa fa-check" />
            </Button>
            <Button bsStyle="btn btn-primary btn-circle">
              <i className="fa fa-list" />
            </Button>
            <Button bsStyle="btn btn-success btn-circle">
              <i className="fa fa-link" />
            </Button>
            <Button bsStyle="btn btn-info btn-circle">
              <i className="fa fa-check" />
            </Button>
            <Button bsStyle="btn btn-warning btn-circle">
              <i className="fa fa-times" />
            </Button>
            <Button bsStyle="btn btn-danger btn-circle">
              <i className="fa fa-heart" />
            </Button>
          </ButtonToolbar>
          <br />
          <br />
          <h4> React Bootstrap Buttons </h4>
          <ButtonToolbar>
            <Button> Default </Button>
            <Button bsStyle="primary"> Primary </Button>
            <Button bsStyle="success"> Success </Button>
            <Button bsStyle="info"> Info </Button>
            <Button bsStyle="warning"> Warning </Button>
            <Button bsStyle="danger"> Danger </Button>
            <Button bsStyle="link"> Link </Button>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}

export default BootstrapBtn;
