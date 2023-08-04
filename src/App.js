import React, { useEffect, useState } from "react";
import axios from './axios';
import Reactstrap from 'reactstrap';
import styled from 'styled-components';
import { keyframes } from "styled-components";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { StyledDiv, Div } from './StyledDivs';
import TeamList from "./TeamList";
import Home from './Home'
import TeamForm from "./TeamForm";
import Extra from './Extra';
import {Alert, Button} from 'reactstrap';

const teamURL = "https://www.svgrepo.com/show/332577/team.svg";
const addToTeam = "https://www.svgrepo.com/show/347812/person-add.svg";
function App() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    role: '',
    email: '',
  });
  const [team, setTeam] = useState([]);
  const [select, setSelect] = useState(false);
  const [formError, setFormError] = useState('');
  const [deleted,setDeleted] = useState(false); 
  const [finalDecision,setFinalDecision] = useState(false);
  const [filtered,setFiltered] = useState([]);
  
  useEffect(()=> {
    setFiltered(filtered => [...filtered] = team)
  },[])

  const change = event => {
    if (event.target.name == "fname"
      || event.target.name == "role"
      || event.target.name == "lname") {
      if (/^[A-Za-z]*$/.test(event.target.value)) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        })
        setSelect(select => select = false)
      }
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      })
      setSelect(select => select = false)
    }
  }
  const submit = event => {
    event.preventDefault();
    const newMember = {
      fname: formData.fname,
      lname: formData.lname,
      email: formData.email,
      role: formData.role,
    }
    if (!newMember.fname || !newMember.email || !newMember.lname || !newMember.role) {
      setSelect(select => select = true)
      setFormError("Please fill all inputs")
    } else {
      axios.post('www.api.com', newMember)
        .then(res => {
          setFiltered(filtered => [...filtered]=team)
          let values = Object.values(filtered).map(r => r.email)
          if (values.includes(res.data.email)) {
            setFormError("Cannot be a duplicate entry")
            setSelect(select => select = true)
          } else {
          setTeam(team.concat(res.data))
          setTeam([res.data,...team])
          setSelect(select => select = false)
          setFormData({
            fname: '',
            lname: '',
            email: '',
            role: '',
          })
        }})
    }
  }
  useEffect(() => {
    axios.get('www.api.com')
      .then((res) =>
        setTeam(res.data))
  }, [])
  // const deleter = (id) => {
  //   let index;
  //   let result = Object.values(team).map(t=> t.id); 
  //   if (result.includes(id)) {
  //       index = result.indexOf(id);
  //       setTeam(team=> team.splice(index - 1,1))
  //   }
  // }
    //! const yes = () => { for deletintg but they wipe out entire field 
  // !  setDeleted(deleted => deleted = true);
  // !  setFinalDecision(finalDecision=> finalDecision = true)
  // !}
  // !const no = () => {
  // !  setDeleted(deleted => deleted = false)
  // !}
  const style = {marginLeft : "5rem", paddingLeft : "2rem",paddingRight : "2rem", textAlign : "center"};
  const alertStyle = {backgroundColor : 'rgb(201, 132, 144)'};
  return (
    <div>
      <Div>
        <Link to="/"> <img src="https://static.thenounproject.com/png/2199043-200.png" />Home</Link>
        <Link to="team"><img src={teamURL} />Team</Link>
        <Link to="teambuilder"><img src={addToTeam} />Add to Team</Link>
      </Div>
      {deleted && <Alert style={alertStyle}>Are you sure  <Button  style = {style}>Yes</Button> 
      <Button  style = {style}>No</Button> </Alert>
      }
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='team' element={Object.values(team).map(t => {
          return <TeamList
          style = {{backgroundImage : "linear-gradient(to right, white 0%, lightblue 100%"}} key = {t.id} fname = {t.fname}
          lname = {t.lname} email = {t.email} 
          role = {t.role} 
          id = {t.id}
          team = {team}
          setTeam = {setTeam}
          deleted = {deleted}
          setDeleted = {setDeleted}
          finalDecision = {finalDecision}
          setFinalDecision = {setFinalDecision}
           />
        })
        } />
        <Route path="teambuilder" element={<TeamForm
          change={change}
          submit={submit}
          formData={formData}
          select={select}
          formError={formError} />}
        />
             <Route path="team/:id" element = {<Extra deleted = {deleted}
        setDeleted = {setDeleted}/>}/>
      </Routes>
    </div>
  );
}
export default App;