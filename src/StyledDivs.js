import React, { useEffect, useState } from "react";
import axios from "axios";
import Reactstrap from 'reactstrap';
import styled from 'styled-components';
import { keyframes } from "styled-components";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

const kf = keyframes`
15% {
  opacity : .2;
}
30% {
  opacity : .5;
}
45% {
  opacity : .9;
  transform : translateX(10px);
}
100% {
  opacity : .7;
}

`
const kf1 = keyframes`
15% {
  opacity : 0;
}
30% {
  opacity : 0;
}
45% {
  opacity : 0;
  transform : translateX(-10px);
}
100% {
  opacity : .7;
}
`
const kf2 = keyframes`
15% {
  opacity : 0;
  background-image : linear-gradient(to right, white 0%, lightblue 100%)
}
30% {
  opacity : .5;
}
45% {
  opacity : .8;
}
100% {
  opacity : 1;
  background-image : linear-gradient(to right, white 0%, lightblue 100%)
}
`
const hoverKf = keyframes`
15% {
 width : 0;
}
30% {
  
}
45% {
  
}
100% {
    opacity : 1;
  width : 15rem;
}
`

const StyledDiv = styled.div`
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color : lightblue;
  width : 100%;
  height : 100vh;
  font-family : system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-image : 0;
  animation : ${kf2} 3s ease-in-out forwards; 
//!
//!
  h1 {
    opacity : 0;
    animation: ${kf} 2s ease-in-out forwards;
    position : relative;
    opacity : .8;
    &::before{
        content : '';
        position : absolute;
        opacity : 0;
        left : 0;
        bottom : 0;
        width : 0;
        border-bottom : 3px solid lightblue;
        border-radius : 5px;
        animation : ${hoverKf} 2s linear forwards;
    }
  }
  h5 {
    margin-top : 1rem;
    opacity : 0;
    animation : ${kf1} 2.5s ease-in-out forwards; 
  }
`


const Div = styled.div`
padding: 1rem;
background-image : inherit;
display : flex;
justify-content : space-around;
font-family : inherit;
font-size : 20px;
a {
    color : black;
    text-decoration : none;
    opacity : .8;
    transition: .3s;
    img {
        width : 35px;
        height : 35px;
        padding-bottom : 5px;
        transition : .3s;
        background-color : transparent;
        &:active {
            transform : rotateZ(45deg);
            transition : .3s;
        }
    }
}
a:hover {
    transition: .3s;
    border-bottom : 1px solid lightskyblue;
    text-decoration : none;
    opacity : 1;
    transform : scaleX(1.1);
} 


`
const Styled = styled.div`
background-image : linear-gradient(to right, white 0%, lightblue 100%);
height : 100vh;
display : flex;
flex-direction : column ;
justify-content : center;
align-items : center;
div {
    width : 75%;
    height : 75%;
    text-align : center;
    padding-top : 1rem;
    margin-top : 1rem;
    background-color : white;
    border-radius : 10px;
    box-shadow : 2px 2px 2px 2px whitesmoke;
    h1 {
        border-bottom : 2px solid lightblue;
        opacity : .8;
    }
    form {
        display : flex;
        flex-direction : column; 
        align-items : flex-start; 
        margin : 2rem;
    }
     input{
        margin-bottom : 2rem;
        display : flex;
        width : 20%;
        margin-left : 2rem; 
        &:focus {
          border : none;
          outline: ${props => props.select ? "3px solid rgb(224, 153, 153)" : "2px solid lightblue"};
          
        }
      }
      label {
        margin-left : 2rem; 
      }
      select {
        margin-bottom : 2rem; 
        margin-left : 2rem; 
      }
}
`

export { StyledDiv };
export { Div };
export {Styled}
;

