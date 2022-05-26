import React from "react";

const StateList = ({ stateList }) => {
  return (
    <div className="stateList">
      <div className="stateList-discription">
        <h2>Список:</h2>
      </div>
      <ul className="stateList_list">
        {[
          ...stateList.sort(
            (itemFirst, itemSecond) => itemFirst.id - itemSecond.id
          ),
        ].map((item) => (
          <li
            className="stateList_item"
            key={item.id}
          >{`${item.id}) ${item.note}`}</li>
        ))}
      </ul>
      {/* <ul className="stateList_list">
        {stateList.map((item, index) => (
          item ? <li
            className="stateList_item"
            key={index}
          >{`${index}) ${item}`}</li> : <></>
        ))}
      </ul> */}
    </div>
  );
};

export default StateList;
