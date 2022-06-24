import React from 'react'
import Header from "./Header";
import { Button } from 'react-bootstrap';


function About() {
  function sendHandler() {
    let value = {
      "firstname": "Aditya",
      "lastname": "Digant",
      "phonenumber": "9999999999",
      "email": "asd@zxc.com"
    }

    fetch("https://react-training-mobcoder-default-rtdb.firebaseio.com/userdata.json", {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json",
      },

    }).then((res) => {
      console.log(res);
    });
  }
  return (
    <div>
      <Header />
      <p>Contact</p>
      <Button onClick={sendHandler}>Send Data</Button>
    </div>
  )
}

export default About