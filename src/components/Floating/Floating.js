import React from "react";
import { Button } from "react-materialize";

class Floating extends React.Component {
  render() {
    return (
      <Button
        floating
        fab="vertical"
        faicon="fa fa-plus"
        className="red"
        large
        style={{ bottom: "45px", right: "24px" }}
      />
    );
  }
}

export default Floating;
