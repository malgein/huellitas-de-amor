import React from "react";
import { Field, ErrorMessage } from "formik";
import { Input } from "@nextui-org/react";
import styles from "./FormInput.module.css";

function FormInput({ label, error, name, placeholder, type }) {
  return (
    <div className={styles.FormInput}>
      <Field
        as={Input}
        label={label}
        variant="bordered"
        placeholder={`${placeholder}...`}
        type={type}
        id={name}
        name={name}
        errorMessage={<ErrorMessage name={name} component="div" />}
        color={error ? "danger" : "success"}
      />
    </div>
  );
}

export default FormInput;
