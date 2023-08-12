import React from "react";
import { getRandomUser } from "./Utility/api";
//This is a class based component. This will also contain the lifecycle methods that we will learn

class CyclopediaClassPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructor: undefined,
      studentList: [],
      students: 0,
      hideInstructor: false,
    };
  }
  //The next three methods namely componentDidMount, ...DidUpdate and ...WillMount are the lifecycle methods
  componentDidMount = async () => {
    console.log("Component mounted");
    const response = await getRandomUser();
    console.log(response);
    this.setState((prevState) => {
      return {
        instructor: {
          name: response.data.first_name + " " + response.data.last_name,
          email: response.data.email,
          phone: response.data.phone_number,
        },
      };
    });
  };
  com_numberponentDidUpdate() {
    console.log("Component updated");
  }
  componentWillUnmount() {
    console.log("Component unmounted");
  }
  render() {
    console.log("Render Component");
    return (
      <div>
        {this.state.instructor && (
          <div className="p-3">
            <span className="h4 text-success">Instructor</span>
            <i className="bi bi-toggle-off btn btn-success btn-sm"></i>
            <br />
            Name: {this.state.instructor.name} <br />
            E-mail: {this.state.instructor.email} <br />
            Phone: {this.state.instructor.phone} <br />
          </div>
        )}
      </div>
    );
  }
}
export default CyclopediaClassPage;
