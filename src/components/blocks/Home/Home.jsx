import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import {
  View,
  SplitLayout,
  SplitCol,
  Button,
  Panel,
  Text,
  FormItem,
  Checkbox,
  Radio,
} from "@vkontakte/vkui";

import "./Home.css";

import About from "../../ui/About/About";

const onClick = () =>
  setPopout(<About onClose={() => setPopout(null)} />);

const Home = ({ id, go }) => {
  const [popout, setPopout] = useState(null);

  const onClick = () =>
    setPopout(<About onClose={() => setPopout(null)} />);

  return (
    <SplitLayout popout={popout}>
      <SplitCol>
        <View activePanel="popout">
          <Panel id="popout">
            <Panel id={id}>
              <div className="mainMenu">
                <Text className="h1">Долина Чудес</Text>
                <div className="buttons">
                  <Button
                    className="playBtn"
                    appearance={"accent-invariable"}
                    size="I"
                    onClick={go}
                    data-to="game"
                  >
                    Играть
                  </Button>
                  <Button
                    onClick={onClick}
                    className="rulesBtn"
                    appearance={"neutral"}
                    size="I"
                  >
                    Правила
                  </Button>
                </div>
                
              </div>
            </Panel>
          </Panel>
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
export default Home;
