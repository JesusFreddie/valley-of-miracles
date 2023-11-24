import { ModalDismissButton, PopoutWrapper, useAdaptivityConditionalRender } from "@vkontakte/vkui";
import "./About.css"

import "@vkontakte/vkui/dist/vkui.css";

const About = ({ onClose }) => {
  const { sizeX } = useAdaptivityConditionalRender();
  return (
    <PopoutWrapper onClick={onClose}>
      <div
        style={{
          backgroundColor: "var(--vkui--color_background_content)",
          borderRadius: 8,
          position: "relative",
          padding: "12px",
        }}
      >
        
        <div className="rulesPop">
          <h4>Правила</h4>
          <div className="subRule">
            Правила игры тут<br/> будут, ну так чисто<br/> дял вида, что здесь<br /> много текста для<br /> вида конечно же<br /> только.
          </div>
        </div>
        {sizeX.regular && (
          <ModalDismissButton
            className={sizeX.regular.className}
            onClick={onClose}
          />
        )}
      </div>
    </PopoutWrapper>
  );
};

export default About;
