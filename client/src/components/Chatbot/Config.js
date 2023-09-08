// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';



const config = {
  initialMessages: [createChatBotMessage(`Hola soy el chatbot de "Huellitas de Amor, tipea la frase "Casa de adopcion" o "Adoptante" segun tu perfil`),],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#C5A48A',
    },
    chatButton: {
      backgroundColor: '#F5C396',
    },
  },
};

export default config;