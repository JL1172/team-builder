import React, {useEffect, useState} from "react";
import axios from "axios";
import Reactstrap from 'reactstrap';
import styled from 'styled-components';
import { keyframes } from "styled-components";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import {StyledDiv, Div} from './StyledDivs';
import TeamList from "./TeamList";
import Home from './Home'


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
      <Routes>
        <Route path = '/' element = {<Home />}/>
        <Route path = 'team' element = {<TeamList />}/>
      </Routes>
    </div>
  );
}

export default App;
