import { createGlobalStyle } from 'styled-components';
import styled from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Roboto', sans-serif;
  }
  body{
    width:100%;
  }
`

export const ContDog = styled.section`
  width:100%;
  height: 100vh;
  background-color:black;
  display:flex;
  @media(max-width: 500px){
    flex-direction: column-reverse;
  }
`
export const Dog = styled.div`
  width:40%;
  height: 100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  position:relative;
  padding-left: 4%;
  color:white;
  @media(max-width:500px){
    width:100%;
    height:50%;
    padding:0 3%;
    text-align: center;
    justify-content: flex-start;
  }

`
export const TiltDog = styled.h1`
  font-size:2.9vw;
  padding-bottom: 5%;
  @media(max-width:500px){
    font-size: 4vw;
    text-align: center;
    padding:3% 0 ;
  }
`
export const Parg = styled.p`
  width:100%;
  line-height:3vh;
  font-size: 1.4vw;
  padding: 3% 0 4% 0;
  @media(max-width:500px){
    padding: 0 3% 2% 3%;
    line-height:1;
    font-size:2.8vw;
  }
`
export const BoxLog = styled.div`
  width:100%;
  text-align: center;
`
export const Log = styled.img`
  width:50%;

  @media(max-width:500px){
    width:10%;
    text-align: center;
  }

`
export const BtnDog = styled.div`
  width:100%;
  display: flex;
  @media(max-width:500px){
    width:100%;
    margin:3% 0;
  }

`
export const BtnTroc = styled.div`
  width: 90%;
  margin: 0 1% 0 0;
 @media(max-width:500px){
    width:100%;
    margin:0 2%;
  }

`
export const Btn = styled.button`
  width:100%;
  padding: 4%;
  margin: 0 4% 0 0;
  font-size:1.1vw;
  border:none;
  border-radius: 2vw;
  cursor:pointer;
  &:hover{
    transform: scale(1.1);
  }
  &:active{
    background-color: rgba(0,0,0, 0.8);
  }
  @media(max-width:500px){
    width:100%;
    font-size: 3vw;
    
  }

`
export const Anc = styled.a`
  width:90%;
  margin:0 0 0 1%;
  text-decoration: none;
  color:black;
  @media(max-width:500px){
    width:100%;
    margin: 0;
  }

`
export const BoxDog = styled.div`
  width:60%;
  clip-path:polygon(10% 0, 100% 0, 100% 100%, 0 100%);
  @media(max-width: 500px){
    width:100%;
    height:70%;
    clip-path:none;
  }
`
export const DogImg = styled.img`
  width:100%;
  height: 99.6%;
  object-position:left;
`

export default GlobalStyle 