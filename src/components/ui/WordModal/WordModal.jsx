import {
  Button,
  ModalDismissButton,
  PopoutWrapper,
  useAdaptivityConditionalRender,
} from "@vkontakte/vkui";
import "./WordModal.css";

import "@vkontakte/vkui/dist/vkui.css";

import { LetterList } from "../../../helpers/LetterAlphabeticalList";
import { useState } from "react";
let valueWord;

const useLetter = [];

const WordModal = ({ onClose, setValueWord, setUseLetter }) => {
  const { sizeX } = useAdaptivityConditionalRender();

  const [isWord, setWord] = useState(true);

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
        <form action="">
          <label
            htmlFor=""
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              alignItems: "center",
              columnGap: "8px",
              rowGap: "9px",
            }}
          >
            {LetterList.map((word) => {
              return (
                <input
                  key={word}
                  type="radio"
                  name="contact"
                  value={word}
                  data-word={word}
                  onClick={(e) => {
                    valueWord = e.target.value;
                    if (useLetter.includes(valueWord)) {
											setWord(true);
                    } else {
                      setWord(false);
                    }
                  }}
                />
              );
            })}
          </label>

          <Button
            disabled={isWord}
            onClick={() => {
              useLetter.push(valueWord);
							setUseLetter(useLetter)
              setValueWord(valueWord);
              onClose();
            }}
            size="l"
            style={{
              marginTop: "20px",
              marginLeft: "50%",
              transform: "translateX(-50%)",
            }}
          >
            Выбрать
          </Button>
        </form>
      </div>
    </PopoutWrapper>
  );
};

export default WordModal;
