import React, { useEffect, useState } from "react";
import axios from "axios";
import Reactstrap from 'reactstrap';
import styled from 'styled-components';
import { keyframes } from "styled-components";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Styled } from './StyledDivs';


export default function TeamForm(props) {
    const { change, submit, formData } = props;
    return (
        <Styled>
            <div>
                <h1>Add Team Members</h1>
                <form onSubmit={submit}>
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
                </form>
            </div>
        </Styled>
    )
}