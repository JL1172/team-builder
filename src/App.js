import React, { useEffect, useState } from "react";
import axios from "axios";
import Reactstrap from 'reactstrap';
import styled from 'styled-components';
import { keyframes } from "styled-components";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { StyledDiv, Div } from './StyledDivs';
import TeamList from "./TeamList";
import Home from './Home'
import TeamForm from "./TeamForm";


const teamURL = "https://www.svgrepo.com/show/332577/team.svg";
const addToTeam = "https://www.svgrepo.com/show/347812/person-add.svg";

function App() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    role: '',
    email: '',
  });

  const change = event => {
    if (event.target.name == "fname" 
      || event.target.name == "role" 
      || event.target.name == "lname" ) {
    if (/^[A-Za-z]*$/.test(event.target.value)) {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      })
    }
  } else {
    setFormData({
      ...formData, 
      [event.target.name] : event.target.value 
    })
  }
}

  const submit = event => {
    event.preventDefault();

  }
  return (
    <div>
      <Div>
        <Link to="/"> <img src="https://static.thenounproject.com/png/2199043-200.png" />Home</Link>
        <Link to="team"><img src={teamURL} />Team</Link>
        <Link to="teambuilder"><img src={addToTeam} />Add to Team</Link>
      </Div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='team' element={<TeamList />} />
        <Route path="teambuilder" element={<TeamForm
          change={change}
          submit={submit}
          formData={formData} />} />
      </Routes>
    </div>
  );
}

export default App;
