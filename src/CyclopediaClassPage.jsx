import React from "react";
import { getRandomUser } from "./Utility/api";
//This is a class based component. This will also contain the lifecycle methods that we will learn

class CyclopediaClassPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem("cyclopediaState")) || {
      instructor: undefined,
      studentList: [],
      students: 0,
      hideInstructor: false,
      inputName: "",
      inputFeedback: "",
    };
  }
  //The next three methods namely componentDidMount, ...DidUpdate and ...WillMount are the lifecycle methods
  componentDidMount = async () => {
    console.log("Component mounted");
    if (JSON.parse(localStorage.getItem("cyclopediaState"))) {
      // this.setState(JSON.parse(localStorage.getItem("cyclopediaState")));
    } else {
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
    }
  };
  componentDidUpdate() {
    console.log("Component updated");
    localStorage.setItem("cyclopediaState", JSON.stringify(this.state));
  }
  componentWillUnmount() {
    console.log("Component unmounted");
  }
  handleAddStudent = () => {
    this.setState((prevState) => {
      return { students: prevState.students + 1 };
    });
  };
  handleRemoveAllStudents = () => {
    this.setState((prevState) => {
      return { students: 0 };
    });
  };
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
        <div className="p-3">
          <span className="h-4 text-success">Feedback</span>
          <br />
          <input
            type="text"
            value={this.state.inputName}
            placeholder="Name..."
            onChange={(n) => {
              this.setState({ inputName: n.target.value });
            }}
          />
          <br />
          <textarea
            name=""
            placeholder="Feedback..."
            value={this.state.inputFeedback}
            onChange={(f) => {
              this.setState({ inputFeedback: f.target.value });
            }}
          ></textarea>
        </div>
        <div className="p-3">
          <span className="h-4 text-success">Students</span>
          <br />
          <div>Student Count : {this.state.students}</div>
          <button
            className="btn btn-success btn-sm"
            onClick={this.handleAddStudent}
          >
            Add student
          </button>
          &nbsp;
          <button
            className="btn btn-danger btn-sm"
            onClick={this.handleRemoveAllStudents}
          >
            Remove all students
          </button>
        </div>
      </div>
    );
  }
}
export default CyclopediaClassPage;
