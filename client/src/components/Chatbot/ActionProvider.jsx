// in ActionProvider.jsx
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  
  const saludar = () => {
    const botMessage = createChatBotMessage('¡Hola! ¿Cómo estás?');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const textoCasaDeAdopcion = () => {
    const botMessage = createChatBotMessage('Aqui podras registrar de manera segura y confiable tu casa de adopcion, los perfiles de los adoptantes son validados para evitar conflictos posteriores');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const textoAdoptante = () => {
    const botMessage = createChatBotMessage('Como adoptante podras acceder a los perfiles de las casa de adopcion que ofrecen mascotas');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const noEntiendo = () => {
    const botMessage = createChatBotMessage('no entiendo lo que dices por favor escribelo de nuevo ');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const despedirse = () => {
    const botMessage = createChatBotMessage('¡Hasta luego!');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            saludar,
            despedirse, 
            noEntiendo,
            textoAdoptante,
            textoCasaDeAdopcion       
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
