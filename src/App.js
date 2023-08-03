import React, {useEffect, useState} from "react";
import axios from "axios";
import Reactstrap from 'reactstrap';
import styled from 'styled-components';
import { keyframes } from "styled-components";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import {StyledDiv, Div} from './StyledDivs';

const teamURL = "https://www.svgrepo.com/show/332577/team.svg";
const addToTeam = "https://www.svgrepo.com/show/347812/person-add.svg";

function App() {
  return (
    <div>
      <Div>
        <Link to = "/"> <img src = "https://static.thenounproject.com/png/2199043-200.png"/>Home</Link>
        <Link to = "team"><img src = {teamURL}/>Team</Link>
        <Link to = "teambuilder"><img src = {addToTeam}/>Add to Team</Link>
      </Div>
    <StyledDiv>
      <h1>Team Builder</h1>
      <h5>A new team solution</h5>
    </StyledDiv>
    </div>
  );
}

export default App;
