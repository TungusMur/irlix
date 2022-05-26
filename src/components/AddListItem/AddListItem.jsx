import React, { useState } from "react";

const AddListItem = ({ setStateList }) => {
  const [inputNumber, setInputNumber] = useState("");
  const [inputName, setInputName] = useState("");
  const [stateErrorNumber, setStateErrorNumber] = useState(false);
  const [stateErrorNumberTypeOf, setStateErrorNumberTypeOf] = useState(false);
  const [stateErrorName, setStateErrorName] = useState(false);

  return (
    <div className="addListItem">
      <div className="addListItem-form">
        <div className="addListItem-number">
          <p>Номер записи</p>
          <input
            type="text"
            className="addListItem-input"
            placeholder="Введите номер записи"
            onFocus={() => {
              if (stateErrorNumber) {
                setStateErrorNumber(false);
              }
              if (stateErrorNumberTypeOf) {
                setStateErrorNumberTypeOf(false);
              }
            }}
            value={inputNumber}
            onChange={(e) => {
              setInputNumber(e.target.value);
            }}
          />
          {stateErrorNumber && (
            <div className={`addListItem-error`}>
              <p>Введите номер записи</p>
            </div>
          )}
          {stateErrorNumberTypeOf && (
            <div className={`addListItem-error`}>
              <p>
                Некорректный номер записи, он должен состоять только из цифр
              </p>
            </div>
          )}
        </div>
        <div className="addListItem-name">
          <p>Название записи</p>
          <input
            type="text"
            className="addListItem-input"
            placeholder="Введите название записи"
            onFocus={() => {
              if (stateErrorName) {
                setStateErrorName("");
              }
            }}
            value={inputName}
            onChange={(e) => {
              setInputName(e.target.value);
            }}
          />
          {stateErrorName && (
            <div className={`addListItem-error`}>
              <p>Введите название записи</p>
            </div>
          )}
        </div>
        <button
          className="addListItem-button"
          onClick={() => {
            if (inputNumber.replace(/ /g, "") && inputName.replace(/ /g, "")) {
              if (Number(inputNumber)) {
                setStateList((data) => {
                  let check = false;
                  data.forEach((item) => {
                    if (item.id === Number(inputNumber)) {
                      item.note = inputName;
                      check = true;
                      return;
                    }
                  });
                  if (!check) {
                    data.push({ id: Number(inputNumber), note: inputName });
                  }
                  return [...data];
                });
                // setStateList((data) => {
                //   data[Number(inputNumber)] = inputName;
                //   return [...data];
                // });
                setInputNumber("");
                setInputName("");
              } else {
                setStateErrorNumberTypeOf(true);
                setInputNumber("");
              }
            }
            if (!inputNumber.replace(/ /g, "")) {
              setStateErrorNumber(true);
            }
            if (!inputName.replace(/ /g, "")) {
              setStateErrorName(true);
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
