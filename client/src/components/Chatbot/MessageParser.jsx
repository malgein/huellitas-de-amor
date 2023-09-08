// in MessageParser.js
import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    switch (true) {
      case message.includes('hola'):
        actions.saludar();
        break;
      case message.includes('adios'):
        actions.despedirse();
        break;
      case message.includes('Casa de adopcion'):
        actions.textoCasaDeAdopcion();
        break;
        case message.includes('Adoptante'):
        actions.textoAdoptante();
        break;
      default:
        actions.noEntiendo(); 
        break;
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
