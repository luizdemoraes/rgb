import React, { useState, useEffect } from "react";
import copy from 'clipboard-copy';

import Control from "../Control";
import RGBInputs from "../RGBInputs";
import IconButton from "../Button";
import * as S from "./styled";
import { 
  Magic as MagicIcon, 
  Clipboard as ClipboardIcon 
} from "../../assets/icons";

export default function Card({ onColorChange, onCopy }) {
  const [r, setR] = useState(0);
  const [g, setG] = useState(191);
  const [b, setB] = useState(255);
  const currentCssRgbColor = `rgb(${r}, ${g}, ${b})`;

  useEffect(() => {
    onColorChange(`rgb(${r}, ${g}, ${b})`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [r, g, b]);

  function copyToClipboard() {
    copy(currentCssRgbColor)
    .then(() => {
      onCopy(currentCssRgbColor);
      console.info(`'${currentCssRgbColor}' copied to cliboard.`)
    })
    .catch(reason => {
      console.error(reason);
    })
  }

  function randomInt(min = 0, max = 255) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function randomRGB() {
    return {
      r: randomInt(),
      g: randomInt(),
      b: randomInt()
    };
  }

  function updateParameters({ r, g, b }) {
    setR(r);
    setG(g);
    setB(b);
  }

  return (
    <S.Wrapper>
      <S.Header>
        <IconButton
          icon={MagicIcon}
          iconAlt="Magic Icon"
          onClick={() => updateParameters(randomRGB())}
          title="Random color"
        >
          <MagicIcon/>
        </IconButton>

        <RGBInputs
          rgb={{ r, g, b }}
          onRChange={value => setR(value)}
          onGChange={value => setG(value)}
          onBChange={value => setB(value)}
        />

        <IconButton
          icon={ClipboardIcon}
          iconAlt="Clipboard Icon"
          onClick={() => copyToClipboard()}
          title="Copy RGB"
        >
          <ClipboardIcon />
        </IconButton>
      </S.Header>
      <S.Controls>
        <Control label="R" value={r} onChange={setR} />
        <Control label="G" value={g} onChange={setG} />
        <Control label="B" value={b} onChange={setB} />
      </S.Controls>
    </S.Wrapper>
  );
}
