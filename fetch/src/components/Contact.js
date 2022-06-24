import React from 'react'
import Header from "./Header";
import { Button } from 'react-bootstrap';
import { useState } from "react";
import './css/form.css'

function About() {

  const [data, setData] = useState("")

  const [errors, setErrors] = useState({})

  const [submitVar, setSubmitVar] = useState()


  const validateForm = (event, name, value) => {
    event.preventDefault()
    switch (name) {
      case "fname":
        if (value.length < 3 || value.length === "") {
          setErrors({
            ...errors,
            fname: 'FirstName atleast have 5 letters and not empty'
          })
          setSubmitVar(false)
        }
        else {
          setErrors({
            ...errors,
            fname: ''
          })
          setSubmitVar(true)
        }
        break;
      case "lname":
        if (value.length < 3 || value.length === "") {
          setErrors({
            ...errors,
            lname: 'LastName atleast have 5 letters and not empty'
          })
          setSubmitVar(false)
        }
        else {
          setErrors({
            ...errors,
            lname: ''
          })
          setSubmitVar(true)
        }
        break;
      case "password":
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        if (value.length < 8 || value.length === "" || regex.test(value) === false) {
          setErrors({
            ...errors,
            Pname: 'password should be atleast 8 letters and not empty'
          })
          setSubmitVar(false)
        }
        else {
          setErrors({
            ...errors,
            Pname: ''
          })
          setSubmitVar(true)
        }
        break;
      case "email":
        if (String(value).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)!==null) {
          setErrors({
            ...errors,
            Ename: ''
          })
          setSubmitVar(true)
        }
        else {
          setErrors({
            ...errors,
            Ename: 'Email is not valid and not empty'
          })
          setSubmitVar(false)
        }
        break;
      default:
        break;
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    validateForm(event, name, value)
    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    if (submitVar === true) {
    event.preventDefault();
      fetch("http://localhost:8080/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          Name: data.fname,
          Email: data.email,
          Password: data.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        console.log(res);
        if (res.status !== 200) {
          console.log("error");
        } else {
          console.log("success");
          window.location.href = "/";
          return res.json();
        }
      })
        .then((data) => {
          console.log(data);
          setData(data)
        })
        .catch((err) => {
          console.log(err, "error");
        })
      }else{
        console.log("check your fields")
      }
  }
  return (
    <div>
      <Header />
      <div className="auth-wrapper">
          <div className="auth-inner">
      <form>
      <h3>Sign In</h3>
        <input type="text" name="fname" placeholder='name' onChange={handleChange} />
        <label style={{ color: "red" }} >{errors.fname}</label>
        {/* <input type="text" name="lname" placeholder='lastname' onChange={handleChange} />
        <label style={{ color: "red" }} >{errors.lname}</label> */}
        <input type="email" name="email" placeholder='email' onChange={handleChange} />
        <label style={{ color: "red" }} >{errors.Ename}</label>
        <input type="password" name="password" placeholder='password' onChange={handleChange} />
        <label style={{ color: "red" }}>{errors.Pname}</label>
        <Button variant="primary" onClick={handleSubmit} > Submit </Button>
      </form>

      </div>
      </div>
    </div>
  )
}



export default About