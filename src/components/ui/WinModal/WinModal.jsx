import {
  Button,
  ModalDismissButton,
  PopoutWrapper,
  useAdaptivityConditionalRender,
} from "@vkontakte/vkui";

import "@vkontakte/vkui/dist/vkui.css";

import { useState } from "react";

const DrumModal = ({ onClose, go }) => {


  return (
    <PopoutWrapper>
      <div
        style={{
          backgroundColor: "var(--vkui--color_background_content)",
          borderRadius: 8,
          position: "relative",
          padding: "12px",
          width: "300px",
        }}
      >
				<h1>Победа</h1>
				<Button onClick={go} data-to="win">Перейти к финалу</Button>
      </div>
    </PopoutWrapper>
  );
};

export default DrumModal;
