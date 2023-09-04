import * as Yup from "yup";

const validationSchema = Yup.object({
  // nombre: Yup.string()
  //   .required("Por favor, introduce tu nombre")
  //   .min(4, "El nombre debe tener al menos 4 caracteres")
  //   .max(15, "El nombre no puede tener más de 15 caracteres"),

  // apellido: Yup.string()
  //   .required("Por favor, introduce tu apellido.")
  //   .min(5, "El apellido debe tener al menos 5 caracteres")
  //   .max(15, "El aellido no puede tener más de 15 caracteres"),

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

export default validationSchema;
