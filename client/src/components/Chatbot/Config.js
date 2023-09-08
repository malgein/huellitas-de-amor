// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';



const config = {
  initialMessages: [createChatBotMessage(`Hola soy el chatbot de "Huellitas de Amor, tipea la palabra "Casa de adopcion" o "Adoptante" segun tu perfil`),],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#C5A48A',
    },
    chatButton: {
      backgroundColor: '#C5A48A',
    },
  },
};

export default config;