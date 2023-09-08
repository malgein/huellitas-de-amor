// in MessageParser.js
import React from 'react';

const MessageParser = ({ children, actions }) => {

  const parse = (message) => {
    message=message.toLowerCase();
    
    switch (true) {
      case message.includes('hola'):
        actions.saludar();
        break;
        case message.includes('info'):
        actions.info();
        break;
      case message.includes('adios'):
        actions.despedirse();
        break;
      case message.includes('casa de adopcion'):
        actions.textoCasaDeAdopcion();
        break;
        case message.includes('adoptante'):
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
