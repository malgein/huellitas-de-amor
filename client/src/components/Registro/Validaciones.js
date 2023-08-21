import * as Yup from "yup";



const validationSchema = Yup.object({
    nombre: Yup.string().required("El nombre es requerido")
      .min(5, "El nombre debe tener al menos 5 caracteres")
      .max(15, "El nombre no puede tener más de 15 caracteres"),

    apellido: Yup.string().required("El nombre es requerido")
      .min(5, "El nombre debe tener al menos 5 caracteres")
      .max(15, "El nombre no puede tener más de 15 caracteres"),

    nacionalidad: Yup.string().required("El nombre es requerido")
      .min(5, "El nombre debe tener al menos 5 caracteres")
      .max(15, "El nombre no puede tener más de 15 caracteres"),

    localizacion: Yup.string().required("El nombre es requerido")
      .min(5, "El nombre debe tener al menos 5 caracteres")
      .max(15, "El nombre no puede tener más de 15 caracteres"),

    direccion: Yup.string().required("El nombre es requerido")
      .min(5, "El nombre debe tener al menos 5 caracteres")
      .max(15, "El nombre no puede tener más de 15 caracteres"),

    telefono: Yup.string().required("El nombre es requerido")
      .matches(/^[0-9]+$/, "El teléfono debe contener solo números")
      .min(5, "El nombre debe tener al menos 5 caracteres")
      .max(20, "El nombre no puede tener más de 20 caracteres"),

    acerca: Yup.string().required("El nombre es requerido")
      .min(5, "El nombre debe tener al menos 5 caracteres")
      .max(15, "El nombre no puede tener más de 15 caracteres"),

    email: Yup.string()
      .email("Correo electrónico inválido")
      .required("El correo electrónico es requerido"),

    password: Yup.string().required("El password es requerido")
      .matches(/[a-z]/, "La contraseña debe contener al menos una letra minúscula")
      .matches(/[A-Z]/, "La contraseña debe contener al menos una letra mayúscula")
      .matches(/[0-9]/, "La contraseña debe contener al menos un número")
      .matches(/[!@#$%^&*(),.?":{}|<>]/, "La contraseña debe contener al menos un carácter especial")
      .min(8, "El password debe tener al menos 8 caracteres")
      .max(12, "El password no puede tener más de 12 caracteres"),
  });




  export default validationSchema;

