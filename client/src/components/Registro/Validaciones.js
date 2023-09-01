import * as Yup from "yup";

const validationSchema = Yup.object({
  nombre: Yup.string()
    .required("Por favor, introduce tu nombre")
    .min(4, "El nombre debe tener al menos 4 caracteres")
    .max(15, "El nombre no puede tener más de 15 caracteres"),

  apellido: Yup.string()
    .required("Por favor, introduce tu apellido.")
    .min(5, "El apellido debe tener al menos 5 caracteres")
    .max(15, "El aellido no puede tener más de 15 caracteres"),

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

  // nacionalidad: Yup.string()
  //   .required("Por favor, introduce tu nacionalidad")
  //   .min(5, "El nacionalidad debe tener al menos 5 caracteres")
  //   .max(15, "El nacionalidad no puede tener más de 15 caracteres"),

  // ubicacion: Yup.string()
  //   .required("Por favor, proporciona tu ubicación")
  //   .min(4, "El localización debe tener al menos 4 caracteres")
  //   .max(15, "El localización no puede tener más de 15 caracteres"),

  // direccion: Yup.string()
  //   .required("Por favor, proporciona tu dirección.")
  //   .min(5, "La dirección debe tener al menos 5 caracteres")
  //   .max(15, "La dirección no puede tener más de 15 caracteres"),

  // telefono: Yup.string()
  //   .required("Por favor, ingresa tu número de teléfono.")
  //   .matches(/^[0-9]+$/, "El teléfono debe contener solo números")
  //   .min(5, "El telefono debe tener al menos 5 caracteres")
  //   .max(20, "El telefono no puede tener más de 20 caracteres"),

  // acerca: Yup.string()
  //   .required("Por favor, cuéntanos un poco acerca de ti.")
  //   .min(5, "Debe tener al menos 5 caracteres")
  //   .max(100, "No puede tener más de 100 caracteres"),
});

export default validationSchema;
