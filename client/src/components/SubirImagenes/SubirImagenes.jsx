import React, { useEffect, useState, useCallback } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
import { subirImagenes } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const API_KEY = 195477788668813;
const POST_URL = "https://api.cloudinary.com/v1_1/duzkzovtn/image/upload";

const SubirImagenes = ({setImagenes}) => {
  const [image, setImage] = useState({ array: [] });
  const [loading, setLoading] = useState("");
  const [mensajeError, setMensajeError] = useState("")

  const dispatch = useDispatch();

  const handleDrop = async (files) => {
    const maxImages = 5;

    /* if (image.array.length + files.length > maxImages) {
      setMensajeError("No puedes subir más de 5 imágenes");
      return;
    } */
    const validFiles = files.filter((file) => {
      // Realiza validaciones aquí, por ejemplo:
      const allowedTypes = ["image/jpeg", "image/png"];
      const maxSize = 5 * 1024 * 1024; // 5MB
  
      return allowedTypes.includes(file.type.toLowerCase()) && file.size <= maxSize;
    });

    if (validFiles.length !== files.length) {
      setMensajeError("El formato de algunas imágenes es incorrecto");
      return;
    }
    const uploaders = validFiles.map( async(file) => {
      const formData = new FormData();
      formData.append("file", file);

      formData.append("tags", `codeinfuse, medium, gist`);
      formData.append("upload_preset", "mascotas");
      formData.append("api_key", API_KEY);
      formData.append("timestamp", (Date.now() / 1000) | 0);
      setLoading(true);
      return axios
        .post(POST_URL, formData, {
          headers: { "X-Requested-With": "XMLHttpRequest" },
        })
        .then(({ data }) => {
          const fileURL = data.secure_url;
          let specificArrayInObject = image.array;
          specificArrayInObject.push(fileURL);
          const newobj = { ...image, specificArrayInObject };
          dispatch(subirImagenes(newobj.array));
        });
    });
    await axios.all(uploaders).then(() => {
      setLoading(false);
      setImagenes(image.array);
    });
    
  };
  const handleDelete =() => {
    
  }
  return (
    <div>
      <div
      className={`flex items-center justify-center h-[150px] bg-gray-100 bg-opacity-60 border-dashed mb-[10px] mt-[20px]`}
    >
      
      <Dropzone
        className={`w-64 p-8 border-dashed border-2 border-gray-500 rounded-lg  bg-opacity-70 text-center cursor-pointer z-10`}
        onDrop={handleDrop}
        onChange={(event) => setImage(event.target.value)}
      >
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />

              <p className="text-xs text-gray-600">
                Coloca tus imagenes aquí o click para seleccionar
              </p>
            </div>
          </section>
        )}
      </Dropzone>
    </div>
    <div className="text-xs text-red-700 justify-center mb-[10px] text-center">{mensajeError}</div>
    </div>
  );
};

export default SubirImagenes;
