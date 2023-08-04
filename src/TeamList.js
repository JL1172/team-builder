import React, { useEffect, useState } from "react";
import axios from "axios";
import Reactstrap from 'reactstrap';
import styled from 'styled-components';
import { keyframes } from "styled-components";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Styled } from './StyledDivs';
import { useParams } from "react-router-dom";
import { Alert, Button } from "reactstrap";
import Extra from "./Extra";


const NewStyle = styled.div`
background-image : linear-gradient(to right, white 0%, lightblue 100%);
display : flex;
flex-direction : column;

div {
    display : flex;
    margin-top : 2rem;
    margin-left : 2rem;
    margin-right : 2rem;
    padding : 1rem;
    background-color : white;
    box-shadow : 2px 2px 2px gray;
    font-size : 15px;
    opacity : .8;
    font-weight : lighter;
    justify-content: space-between;
}
`

export default function Team(props) {
    const navigate = useNavigate();
    const { fname, lname, email, role, id, team, setTeam, deleted, setDeleted, finalDecision, setFinalDecision, formData } = props;
    const nav = () => {
        navigate(`${id}`)
    }

    const deleter = () => {
        setDeleted(deleted => deleted = true)
        //? navigate(`${id}`)
        //?if (deleted) { make this so we have option of overwriting 
        let index;
        let number = Math.random()*1500;
        let result = Object.values(team).map(t => t.id);
        if (result.includes(id) || result.includes(fname)) {
            index = result.indexOf(id);
            const [...reference] = team;
            delete reference[index];
            
            setTeam(team => team = reference)
            setTeam(team => team.filter(f => f))
            console.log(reference)
            
            // const [...newT] = reference; 
            // setTeam({reference})
    
            // console.log(team)
            
        }
    }


    return (
        <>
            <NewStyle>
                <div>
                    <p onClick={deleter}>Delete</p>
                    <h4 >First name : {fname}</h4>
                    <h4>Last name : {lname}</h4>
                    <h4>Role : {role}</h4>
                    <h4>Email : {email}</h4>
                </div>
            </NewStyle>
        </>
    )
}
