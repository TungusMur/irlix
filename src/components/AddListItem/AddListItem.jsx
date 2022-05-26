import React, { useRef, useState } from "react";

const AddListItem = ({ setStateList }) => {
  const inputNumber = useRef(null);
  const inputName = useRef(null);

  const [stateErrorNumber, setStateErrorNumber] = useState("");
  const [stateErrorName, setStateErrorName] = useState("");

  return (
    <div className="addListItem">
      <div className="addListItem-form">
        <div className="addListItem-number">
          <p>Номер записи</p>
          <input
            type="text"
            ref={inputNumber}
            className="addListItem-input"
            placeholder="Введите номер записи"
            onFocus={() => {
              if (stateErrorNumber) {
                setStateErrorNumber("");
              }
            }}
          />
        </div>
        <div className="addListItem-name">
          <p>Название записи</p>
          <input
            type="text"
            ref={inputName}
            className="addListItem-input"
            placeholder="Введите название записи"
            onFocus={() => {
              if (stateErrorName) {
                setStateErrorName("");
              }
            }}
          />
        </div>
        <button
          className="addListItem-button"
          onClick={() => {
            if (
              inputNumber.current.value.replace(/ /g, "") &&
              inputName.current.value.replace(/ /g, "")
            ) {
              setStateList((data) => {
                return {
                  ...data,
                  [inputNumber.current.value]: inputName.current.value,
                };
              });
              inputNumber.current.value = "";
              inputName.current.value = "";
            }
            if (!inputNumber.current.value.replace(/ /g, "")) {
              setStateErrorNumber("actice");
            }
            if (!inputName.current.value.replace(/ /g, "")) {
              setStateErrorName("active");
            }
          }}
        >
          <p>Добавить в список</p>
        </button>
      </div>
    </div>
  );
};

export default AddListItem;
