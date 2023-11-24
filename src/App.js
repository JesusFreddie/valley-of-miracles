import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import {
  View,
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitLayout,
  SplitCol,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import About from "./components/ui/About/About";

import "./App.css";
import "./win-section.css";
import Home from "./components/blocks/Home/Home";
import Win from "./components/blocks/Win/Win";
import Game from "./components/blocks/Game/Game";

const App = () => {
  const [activePanel, setActivePanel] = useState("home");
	const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(null);

  const onClick = () =>
    setPopout(<About onClose={() => setPopout(null)} />);

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
			setUser(user)
      setPopout(null);
    }
    fetchData();
  }, []);

  const go = (e) => {
    setActivePanel(e.currentTarget.dataset.to);
  };

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout className="lol" popout={popout}>
            <SplitCol>
              <View activePanel={activePanel}>
                <Home id="home" go={go} />
                <Win id="win" go={go} />
                <Game id='game' go={go} fetchedUser={fetchedUser}/>
              </View>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;