import React, { useState } from "react";
import axios from "axios";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

export default function Donar() {
  const [preferenceId, setPreferenceId] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState("100"); // Establece un valor predeterminado
  const [customPrice, setCustomPrice] = useState("");
  const [showCustomInput, setShowCustomInput] = useState(false);

  initMercadoPago("TEST-9b229ee2-933f-489e-9105-b0b62d0f4a9a"); // Verifica que esta sea tu clave de prueba correcta

  const createPreference = async (price) => {
    try {
      // "https://huellitas-de-amor-production-6e81.up.railway.app";
      const basename = "http://localhost:3001";
      const ENDPOINT = `${basename}/create_preference`;

      const response = await axios.post(ENDPOINT, {
        description: "Prueba",
        price: price,
        quantity: 1,
        //currency_id: "ARS"
      });

      const { id } = response.data;
      console.log(response);
      console.log(response.data);
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleDonar = async () => {
    let priceToSend = selectedPrice;
    if (showCustomInput && customPrice !== "") {
      priceToSend = parseFloat(customPrice);
    }

    const id = await createPreference(priceToSend);
    if (id) {
      setPreferenceId(id);
    }
  };

  const handlePriceChange = (event) => {
    const value = event.target.value;
    setSelectedPrice(value);
    setShowCustomInput(value === "otros");
  };

  const handleCustomPriceChange = (event) => {
    const value = event.target.value;
    setCustomPrice(value);
  };

  return (
    <>
      <select value={selectedPrice} onChange={handlePriceChange}>
        <option value="100">$100</option>
        <option value="200">$200</option>
        <option value="300">$300</option>
        <option value="400">$400</option>
        <option value="otros">Otros</option>
        <option value="">Ingresa un monto</option>
      </select>
      {showCustomInput && (
        <input
          type="number"
          placeholder="Monto personalizado"
          value={customPrice}
          onChange={handleCustomPriceChange}
        />
      )}
      <button onClick={handleDonar}>Donar</button>
      {preferenceId && (
        <Wallet initialization={{ preferenceId: preferenceId }} />
      )}
    </>
  );
}
