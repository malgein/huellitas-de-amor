
import { useState } from 'react';
import axios from 'axios';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

export default function Donar (){

  const [preferenceId, setPreferenceId] = useState(null);

  initMercadoPago('TEST-9b229ee2-933f-489e-9105-b0b62d0f4a9a');

  const createPreference = async () => {
    try {
        const response = await axios.post('http://localhost:3001/create_preference', {
          description: "Donacion para Mascotas",
          price: 100,
          quantity: 1,
          //currency_id: "ARS"
        });

        const {id} = response.data;
        return id;
    } catch (error) {
      console.log(error);
    }
  }
    const handleDonar = async () => {
        const id = await createPreference();
        if(id){
          setPreferenceId(id);
        }
      };

    return( 
        <>    
            <button onClick={handleDonar}>Donar</button>    
            {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} />}    
        </>
    )
}