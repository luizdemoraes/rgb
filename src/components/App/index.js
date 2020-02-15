import React, { useState } from "react";
import Card from "../Card";
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import '../../assets/react-toastify.css';

import GlobalStyles from "../../styled";

const Wrapper = styled.main`
  position: absolute;
  bottom: 10vh;
  left: 50%;
  min-width: 300px;
  max-width: 424px;
  width: 100%;
  transform: translateX(-50%);
  padding: var(--space-sm);
  display: flex;

  @media only screen and (max-width: 768px) {
    bottom: 0;
  }
`;

export default function App() {
  const [color, setColor] = useState("rgb(0, 190, 255)");

  function notify(content) {
    toast(`'${content}' copied to clipboard`);
  }

  return (
    <>
      <GlobalStyles color={color} />
      <ToastContainer position="top-center" className='toast-container' toastClassName="toast" progressClassName="toast-progress" />
      <Wrapper>
        <Card onColorChange={setColor} onCopy={(color) => notify(color)}/>
      </Wrapper>
    </>
  );
}
