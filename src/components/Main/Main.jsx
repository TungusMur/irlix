import React, { useEffect, useState } from "react";
import AddListItem from "../AddListItem/AddListItem";
import StateList from "../StateList/StateList";

const Main = () => {
  const [stateList, setStateList] = useState({});

  useEffect(() => {
    console.log(stateList);
  }, [stateList]);

  return (
    <main>
      <div className="main-form">
        <div className="main-content">
          <div className="main-header">
            <div className="main-chapter">
              <h1>Приветствую 1</h1>
            </div>
            <div className="main-description">
              <h2>Давай обновим список и начем обучение</h2>
            </div>
          </div>
        </div>
        <StateList stateList={stateList} />
      </div>
      <AddListItem setStateList={setStateList} />
    </main>
  );
};

export default Main;
