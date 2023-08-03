import React, { useEffect, useState } from "react";
import axios from "axios";
import Reactstrap from 'reactstrap';
import styled from 'styled-components';
import { keyframes } from "styled-components";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { StyledDiv, Div } from './StyledDivs';



export default function Home(props) {
    return (
        <div>
          <StyledDiv>
            <h1>Team Builder</h1>
            <h5>A new team solution</h5>
        </StyledDiv>  
        </div>
    )
}
