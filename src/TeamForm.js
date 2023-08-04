import React, { useEffect, useState } from "react";
import axios from "axios";
import Reactstrap from 'reactstrap';
import styled from 'styled-components';
import { keyframes } from "styled-components";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Styled } from './StyledDivs';
import { Alert } from 'reactstrap'; 
 
const Button = styled.input`
 justify-content: space-around;
  margin-top: 3rem;
  height: 4vh;
  border-radius: 7px;
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


export default function TeamForm(props) {
    const { change, submit, formData, select, formError } = props;
    return (
        <Styled select = {select}>
            <div>
                <h1>Add Team Members</h1>
                <form id = "form" onSubmit={submit}>
                    <label htmlFor="fname">First Name :</label>
                    <input name="fname"
                        id="fname"
                        placeholder="first name"
                        type="text"
                        maxLength="30"
                        onChange={change}
                        value={formData.fname} />

                    <label htmlFor="fname">Last Name :</label>
                    <input name="lname"
                        id="lname"
                        placeholder="last name"
                        type="text"
                        maxLength="30"
                        onChange={change}
                        value={formData.lname} />

                    <label htmlFor="role">Role:</label>
                    <select onChange={change} value = {formData.role} id = "role" name = "role">
                        <option value = "Select">Select</option>
                        <option value = "Sales">Sales</option>
                        <option value = "Manager">Manager</option>
                        <option value = "SoftwareEngineer">Software Engineer</option>
                        <option value = "ProjectManager">Project Manager</option>
                    </select>

                    <label htmlFor="email">email:</label>
                    <input name="email"
                        id="email"
                        placeholder="email"
                        type="email"
                        maxLength="30"
                        onChange={change}
                        value={formData.email} />
                    {select && <Alert color = "danger" 
                    style = {{backgroundColor : "rgb(226, 153, 153)", marginLeft : "2rem"}}>{formError}</Alert>}
                    <Button disabled = {select} select = {select} type="submit" value = "Submit" id = "submit" />
                </form>
            </div>
        </Styled>
    )
}