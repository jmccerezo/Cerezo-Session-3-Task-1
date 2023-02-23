import React, { Component } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";

class Form extends Component {
  state = {
    name: "",
    dob: null,
    email: "",
    contact: "",
    about: "",
    error: {
      nameError: "",
      dobError: "",
      emailError: "",
      contactError: "",
      aboutError: "",
    },
    formIsValid: false,
  };

  //   * Handle events
  handleChange = (id, value) => {
    if (id == "name") {
      this.validateName(value);
    }
    if (id == "dob") {
      this.validateDOB(value);
    }
    if (id == "email") {
      this.validateEmail(value);
    }
    if (id == "contact") {
      this.validateContact(value);
    }
    if (id == "about") {
      this.validateAbout(value);
    }
  };

  // * Validations
  validateName(name) {
    let formIsValid = this.state.formValid;
    let nameError = this.state.error.emailError;
    let alphabets = /^[A-Za-z ]+$/;

    if (name.trim() === "") {
      formIsValid = false;
      nameError = "This is required";
    } else if (name.trim().length < 3) {
      formIsValid = false;
      nameError = "Minimum of 3 characters are required";
    } else if (!alphabets.test(name)) {
      nameError = "Your name should contain alphabets only";
      formIsValid = false;
    } else {
      nameError = "";
      formIsValid = true;
    }

    this.setState({
      name,
      formIsValid,
      error: { ...this.state.error, nameError },
    });

    return formIsValid;
  }

  validateDOB(dob) {
    let formIsValid = this.state.formValid;
    let dobError = this.state.error.emailError;
    let today = new Date(Date.now());
    let dobInput = new Date(dob);

    if (dob == "") {
      formIsValid = false;
      dobError = "This is required";
    } else if (today < dobInput) {
      formIsValid = false;
      dobError = "Your date of birth should not exceed the date today";
    } else {
      formIsValid = true;
      dobError = "";
    }

    this.setState({
      dob,
      formIsValid,
      error: { ...this.state.error, dobError },
    });

    return formIsValid;
  }

  validateEmail = (email) => {
    let formIsValid = this.state.formValid;
    let emailError = this.state.error.emailError;

    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email == "") {
      formIsValid = false;
      emailError = "This is required";
    } else if (!pattern.test(email)) {
      emailError = "Please enter a valid email address";
      formIsValid = false;
    } else {
      emailError = "";
      formIsValid = true;
    }

    this.setState({
      email,
      formIsValid,
      error: { ...this.state.error, emailError },
    });

    return formIsValid;
  };

  validateContact = (contact) => {
    let formIsValid = this.state.formValid;
    let contactError = this.state.error.contactError;
    let numbers = /^[0-9]*$/;
    let alphabets = /^[A-Za-z]+$/;
    let pattern = /[\w\[\]`!@#$%\^&*()={}:;<>+'-]*/;

    if (contact.trim() == "") {
      contactError = "This is required";
      formIsValid = false;
    } else if (numbers.test(contact)) {
      if (contact.trim().length != 10) {
        contactError = "Contact number should be 10 digits";
        formIsValid = false;
      } else {
        contactError = "";
        formIsValid = true;
      }
    } else if (alphabets.test(contact) || pattern.test(contact)) {
      contactError = "Enter a valid contact number";
      formIsValid = false;
    } else {
      contactError = "";
      formIsValid = true;
    }

    this.setState({
      contact,
      formIsValid,
      error: { ...this.state.error, contactError },
    });

    return formIsValid;
  };

  validateAbout(about) {
    let formIsValid = this.state.formValid;
    let aboutError = this.state.error.contactError;

    if (about.trim() == "") {
      formIsValid = false;
      aboutError = "This is required";
    } else {
      formIsValid = true;
      aboutError = "";
    }

    this.setState({
      about,
      error: { ...this.state.aboutError, aboutError },
    });

    return formIsValid;
  }

  handeSubmit = (e) => {
    e.preventDefault();

    if (
      this.validateName(this.state.name) &&
      this.validateDOB(this.state.dob) &&
      this.validateEmail(this.state.email) &&
      this.validateContact(this.state.contact) &&
      this.validateAbout(this.state.about)
    ) {
      alert("Form is submitted");
      this.props.addData(this.state);

      this.setState({
        name: "",
        dob: null,
        email: "",
        contact: "",
        about: "",
        formIsValid: false,
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handeSubmit}>
        <div>
          <TextField
            placeholder="Enter your full name"
            id="name"
            value={this.state.name}
            onChange={(e) => {
              this.handleChange("name", e.target.value);
            }}
            label="Full Name"
            variant="outlined"
            style={{ width: 300 }}
          />
          <p style={{ color: "red", fontSize: "18px" }}>
            {this.state.error.nameError}
          </p>
        </div>

        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              id="dob"
              label="Date of Birth"
              value={this.state.dob}
              onChange={(value) => {
                this.handleChange("dob", value);
              }}
              renderInput={(params) => (
                <TextField style={{ width: 300 }} {...params} />
              )}
            />
          </LocalizationProvider>
          <p style={{ color: "red", fontSize: "18px" }}>
            {this.state.error.dobError}
          </p>
        </div>

        <div>
          <TextField
            placeholder="Enter your email address"
            id="email"
            value={this.state.email}
            onChange={(e) => {
              this.handleChange("email", e.target.value);
            }}
            label="Email Address"
            variant="outlined"
            style={{ width: 300 }}
          />
          <p style={{ color: "red", fontSize: "18px" }}>
            {this.state.error.emailError}
          </p>
        </div>
        <div>
          <TextField
            placeholder="Enter your contact number"
            id="contact"
            value={this.state.contact}
            onChange={(e) => {
              this.handleChange("contact", e.target.value);
            }}
            label="Contact Number"
            variant="outlined"
            style={{ width: 300 }}
          />
          <p style={{ color: "red", fontSize: "18px" }}>
            {this.state.error.contactError}
          </p>
        </div>

        <div>
          <TextField
            placeholder="Tell something interesting about you"
            id="about"
            value={this.state.about}
            onChange={(e) => {
              this.handleChange("about", e.target.value);
            }}
            label="About Yourself"
            variant="outlined"
            style={{ width: 300 }}
          />
          <p style={{ color: "red", fontSize: "18px" }}>
            {this.state.error.aboutError}
          </p>
        </div>
        <div id="submitContainer">
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
