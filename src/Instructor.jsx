import React from "react";

class Instructor extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("Instructor - Mounted");
  }
  componentDidUpdate() {
    console.log("Instructor - Updated");
  }
  componentWillUnmount() {
    console.log("Instructor - UnMounted");
  }
  render() {
    console.log("Instructor - rendered");
    return (
      <div>
        Name: {this.props.instructor.name} <br />
        E-mail: {this.props.instructor.email} <br />
        Phone: {this.props.instructor.phone} <br />
      </div>
    );
  }
}
export default Instructor;
