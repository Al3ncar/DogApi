import React, { useEffect, useState } from "react";
import Logo from "./img/dog-api-logo.svg"
import GlobStyle from "./styled"
import * as S from "./styled"
import axios from "axios";


export default function App() {
  const [dog, setdog] = useState([]);
  const dogApi = () => {
    axios.get(`https://dog.ceo/api/breeds/image/random`).
      then((response) => {setdog(response.data.message)});
  };
  return (
    <S.ContDog>
      <GlobStyle/>
      <S.Dog>
        <S.TiltDog>Dog Api</S.TiltDog>
        <S.Parg>
          Está daqui é uma Api de doguinhos, se caso você tenha um compartilhe conosco,
          Precisa de mais cachorro em sua vida? Obtenha a edição 1 do Dog CEO Zine - uma revista trimestral de negócios e estilo de vida para o cão moderno. 
        </S.Parg>
        <S.BoxLog><S.Log src={Logo} alt=""/></S.BoxLog>
        <S.Parg> 
          Apresentando uma entrevista exclusiva com Scottie, o cão Monopoly. Encomende sua cópia da Side Orders Publishing. Navios em todo o mundo.
        </S.Parg>
        <S.BtnDog>
          <S.BtnTroc>
            <S.Btn onClick={() => dogApi()}>Trocar</S.Btn>
          </S.BtnTroc>
          <S.Anc href="https://dog.ceo/dog-api/" target="_blank">
            <S.Btn>Api dog</S.Btn>
          </S.Anc>
        </S.BtnDog>
      </S.Dog>
      <S.BoxDog>
        <S.DogImg src={dog} alt="" />
      </S.BoxDog>
    </S.ContDog>
  );
}

