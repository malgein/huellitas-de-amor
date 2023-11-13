//Archivo de validaciones para logearse como casa de adopcion

import * as Yup from "yup";

const validationSchemaLogin = Yup.object({
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("Por favor, introduce tu dirección de correo electrónico."),

  password: Yup.string()
    .required("Por favor, crea una contraseña")
    .matches(
      /[a-z]/,
      "La contraseña debe contener al menos una letra minúscula"
    )
    .matches(
      /[A-Z]/,
      "La contraseña debe contener al menos una letra mayúscula"
    )
    .matches(/[0-9]/, "La contraseña debe contener al menos un número")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "La contraseña debe contener al menos un carácter especial"
    )
    .min(8, "El password debe tener al menos 8 caracteres")
    .max(12, "El password no puede tener más de 12 caracteres"),
});

export default validationSchemaLogin;
