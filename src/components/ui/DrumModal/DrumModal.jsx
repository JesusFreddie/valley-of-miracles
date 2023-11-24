import {
  Button,
  ModalDismissButton,
  PopoutWrapper,
  useAdaptivityConditionalRender,
} from "@vkontakte/vkui";

import "@vkontakte/vkui/dist/vkui.css";

import { useState } from "react";

const DrumModal = ({ onClose, setUserGlasses, isUserGlasses }) => {

	const allGlasses = [100, 150, 200, 250, 300]

	const isGlasses = () => {
		let rand = Math.floor(Math.random() * (allGlasses.length))
		console.log(allGlasses[rand])
		setUserGlasses(isUserGlasses + allGlasses[rand])
		onClose()
	}

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
				<h1>Hello</h1>
				<Button onClick={isGlasses}>Крутить Барабан</Button>
      </div>
    </PopoutWrapper>
  );
};

export default DrumModal;
