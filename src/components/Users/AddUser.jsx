import React, { useState } from 'react';
import Button from './../UI/Button';
import ErrorModal from './../UI/ErrorModal';

const AddUser = function ({ onGetUser }) {
  const [entered, setEntered] = useState({
    username: '',
    age: '',
    country: '',
  });

  const [error, setError] = useState();

  /////////////////////////////////
  const errorMessage = message =>
    setError({ title: '💥Invalid Input', message: message });

  const errorHandler = () => setError(null);

  const addUserHandler = function (e) {
    e.preventDefault();

    if (
      entered.username.trim().length === 0 ||
      entered.country.trim().length === 0 ||
      entered.age === ''
    ) {
      errorMessage(
        '👉 Please entera valid name, age and country. (non-empty values)'
      );

      return;
    }
    if (entered.age < 1) {
      errorMessage('👉 Please enter a valid age, (> 0)');

      return;
    }

    // Father Function
    onGetUser(entered);

    setEntered({ username: '', age: '', country: '' });
  };

  const usernameChangeHandler = function (e) {
    setEntered(prev => {
      return { ...prev, username: e.target.value };
    });
  };

  const ageChangeHandler = function (e) {
    setEntered(prev => {
      return { ...prev, age: e.target.value * 1 };
    });
  };

  const countryChangeHandler = function (e) {
    setEntered(prev => {
      return { ...prev, country: e.target.value };
    });
  };

  /////////////////////////////////
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <div className="bg-gradient borderRadius">
        <form onSubmit={addUserHandler} className="form">
          <div className="form__group">
            <label htmlFor="username" className="form__label">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="form__input"
              onChange={usernameChangeHandler}
              value={entered.username}
            />
          </div>

          <div className="form__group">
            <label htmlFor="age" className="form__label">
              Age (Years)
            </label>
            <input
              id="age"
              type="number"
              placeholder="Age"
              className="form__input"
              onChange={ageChangeHandler}
              value={entered.age}
            />
          </div>

          <div className="form__group ">
            <label htmlFor="country" className="form__label">
              Country
            </label>
            <input
              id="country"
              type="text"
              placeholder="Country"
              className="form__input"
              onChange={countryChangeHandler}
              value={entered.country}
            />
          </div>

          <Button classes="btn--white u-margin-top-medium" type="submit">
            👤Add User
          </Button>
        </form>
      </div>
    </>
  );
};

export default AddUser;
