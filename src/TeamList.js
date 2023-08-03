import React, {useEffect, useState} from "react";
import axios from "axios";
import Reactstrap from 'reactstrap';
import styled from 'styled-components';
import { keyframes } from "styled-components";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import {Styled} from './StyledDivs';

export default function Team(props) {

    return (
        <Styled>
            <div>
            <h1>Team Members</h1>
            </div>
        </Styled>
    )
}