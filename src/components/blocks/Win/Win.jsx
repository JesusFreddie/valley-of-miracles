import React from "react";
import PropTypes from "prop-types";

import {
  Button,
  Group,
  Panel,
  Text,
  Card,
  ButtonGroup,
  PanelHeader,
  PanelHeaderBack,
} from "@vkontakte/vkui";

const Home = ({ id, go }) => (
  <Panel id={id}>
    <div className="win-section">
      <div className="container">
        <Group>
          <Text className="win-section__title">Выигрыш</Text>
        </Group>
        <Group className="win-section__cards">
          <Card className="win-section__card">
            <Text>NoName_1</Text>
            <Text>2 {/* <- объект */}</Text>
          </Card>
          <Card className="win-section__card">
            <Text>NoName_2</Text>
            <Text>2</Text>
          </Card>
          <Card className="win-section__card">
            <Text>NoName_3</Text>
            <Text>8 </Text>
          </Card>
        </Group>
        <Group>
          <ButtonGroup
            className="win-section__btns"
            stretched={true}
            mode="vertical"
          >
            <Button className="win-section__btn" stretched={true} size="l">
              Еще
            </Button>
            <Button
              className="win-section__btn"
              stretched={true}
              size="l"
              onClick={go}
              data-to="home"
            >
              Главное меню
            </Button>
          </ButtonGroup>
        </Group>
      </div>

      <div className="win-section__wrapper"></div>
    </div>
  </Panel>
);
export default Home;
