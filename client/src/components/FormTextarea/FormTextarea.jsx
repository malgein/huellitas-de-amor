import React from "react";
import { Field, ErrorMessage } from "formik";
import { Textarea } from "@nextui-org/react";
import styles from "./FormTextarea.module.css";
/*necesario para actualizar repo*/
const FormTextarea = ({ label, error, name, placeholder }) => {
  return (
    <div className={styles.FormTextarea}>
      <Field
        as={Textarea}
        label={label}
        variant="bordered"
        placeholder={`${placeholder}`}
        id={name}
        name={name}
        errorMessage={<ErrorMessage name={name} component="div" />}
        color={error ? "danger" : "success"}
      />
    </div>
  );
};

export default FormTextarea;
