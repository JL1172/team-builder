import React, {useEffect, useState} from "react";
import axios from "axios";
import Reactstrap from 'reactstrap';
import styled from 'styled-components';
import { keyframes } from "styled-components";
import { Routes, Route, Link } from 'react-router-dom';
import {Styled} from './StyledDivs';
import { useParams } from "react-router-dom";
import { Alert } from 'reactstrap';
import { useNavigate } from "react-router-dom";

const Button = styled.button`
 justify-content: space-around;
  margin-top: 3rem;
  height: 4vh;
  border-radius: 7px;
  width : 4vw;
  margin : 4rem;
  border: none;
  background-color: ${props => props.select ? "rgb(224, 153, 153)" : "lightskyblue"};
  color : rgb(255, 255, 255);
  transition: .1s ease-in-out;
  &:hover {
    outline: ${props => props.select ? "none" : "2px solid rgb(133, 152, 211)"};
  transition: .1s ease-in-out;
  }
  &:active {
    outline-offset:  3px;
  background-color: ${props => props.select ? "none" : "rgb(183, 224, 250)"};
  transform: ${props => props.select ? "none" : "scale(1.1)"};
  }
`

export default function Extra(props) {
    const {deleted,setDeleted} = props;
    const navigate = useNavigate();
    const yes = () => {
        setDeleted(deleted => deleted = true)
        navigate("/team")
      }
      const no = () => {
        setDeleted(deleted => deleted = false)
        navigate("/team")
      }
    return (
        <Styled>
            <div>
                <h1>Are you sure you want to delete this team member?</h1>
                <Button onClick={yes}>Yes</Button>
                <Button onClick={no}>No</Button>
            </div>
        </Styled>
    )
}