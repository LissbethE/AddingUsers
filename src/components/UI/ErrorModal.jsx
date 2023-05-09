import React from 'react';
import Card from './Card';
import Button from './Button';

const ErrorModal = function ({ title, message, backdrop, onConfirm }) {
  return (
    <>
      <div className="backdrop" onClick={onConfirm}></div>

      <Card classes="modal">
        <header className="modal__header">
          <h1 className="heading-1">{title}</h1>
        </header>

        <main className="modal__main">
          <p className="paragraph paragraph--big-p">{message}</p>
        </main>

        <footer className="modal__footer">
          <Button classes="btn--blue" onClick={onConfirm}>
            OKAY👍
          </Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
