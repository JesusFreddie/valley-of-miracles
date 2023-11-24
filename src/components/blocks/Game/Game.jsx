import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Cell,
  Group,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Text,
  Avatar,
  Button,
  SplitLayout,
  SplitCol,
  View,
} from "@vkontakte/vkui";

import "./Game.css";
import WordItem from "../../ui/wordItem/WordItem";
import WordModal from "../../ui/WordModal/WordModal";
import WinModal from "../../ui/WinModal/WinModal";

import { WordList } from "../../../helpers/WordList";
import DrumModal from "../../ui/DrumModal/DrumModal";

const Game = ({ id, go, fetchedUser }) => {
  const [popout, setPopout] = useState(null);

  const [isValueWord, setValueWord] = useState();
  const [isUserGlasses, setUserGlasses] = useState(0);

  const [useLetter, setUseLetter] = useState([]);

  const openWordModal = () =>
    setPopout(
      <WordModal
        setUseLetter={setUseLetter}
        setValueWord={setValueWord}
        onClose={() => setPopout(null)}
      />
    );
		const openDrumModal = () => {
			setPopout(
				<DrumModal
					isUserGlasses={isUserGlasses}
					setUserGlasses={setUserGlasses}
					onClose={() => setPopout(null)}
				/>
			)
		}
		// const open = () =>{
		// 	setPopout(
		// 		<WinModal
		// 			go={go}
		// 			onClose={() => setPopout(null)}
		// 		/>
		// 	)
		// }

  let LetterArray = Array.from(WordList[0].word);

	// if (useLetter.length >= LetterArray.length) {
	// 	let countTrue = 0
	// 	useLetter.forEach(useCount=>{
	// 		LetterArray.forEach(letterCount=>{
	// 			if (useCount == letterCount) {
	// 				countTrue++
	// 			}
	// 		})
	// 	})
	// 	if (countTrue == LetterArray.length) {
	// 		open()
	// 	}
	// 	console.log(countTrue)
	// }

	
  LetterArray.forEach((item) => {
		let a = 0
    if (item == isValueWord) {
      setValueWord("");
      openDrumModal()
    }
  });
  const l = (letter) => {
    if (useLetter.includes(letter)) {
      return letter;
    }
  };

  return (
    <SplitLayout popout={popout}>
      <SplitCol>
        <View activePanel="popout">
          <Panel id="popout">
            <Panel id={id}>
              <Group>
                <div className="question">
                  <Text className="question__title">Вопрос</Text>
                  <Text>{WordList[0].question}</Text>
                </div>
              </Group>

              <Group>
                <div className="word">
                  {LetterArray.map((letter) => {
                    return (
                      <WordItem
                        key={Math.random() * (10000000000000 - 1) + 1}
                        word={l(letter)}
                      />
                    );
                  })}
                </div>
              </Group>

              <Group>
                <Cell
                  className="userProfile"
                  before={
                    fetchedUser.photo_200 ? (
                      <Avatar src={fetchedUser.photo_200} />
                    ) : null
                  }
                  subtitle={`${fetchedUser.first_name} ${fetchedUser.last_name}`}
                >
                  {isUserGlasses} очков
                </Cell>
                <Button onClick={openWordModal}>Выбрать букву</Button>
                <Button onClick={()=>{
									setPopout(
										<WinModal
											go={go}
											onClose={() => setPopout(null)}
										/>
									)
								}}>Перейти к финалу</Button>
              </Group>
            </Panel>
          </Panel>
        </View>
      </SplitCol>
    </SplitLayout>
  );
};

export default Game;