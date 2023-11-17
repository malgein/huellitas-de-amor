import React from "react";
import { Field, ErrorMessage } from "formik";
import styles from "./FormSelect.module.css";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
const FormSelect = ({label, name, placeholder, optionArray, error}) => {
	return (
		<div className={error ? styles.selectRed : styles.selectGreen}>
			
			<div className={styles.select}>
				<Field
					
					// className='relative w-full inline-flex shadow-sm px-3 border-medium border-default-200 data-[hover=true]:border-default-400 min-h-unit-10 rounded-medium flex-col items-start  justify-center gap-0 transition-background !duration-150 group-data-[focus=true]:border-danger transition-colors motion-reduce:transition-none h-14 py-2 is-filled text-medium'
					as={Select}
					label={label}
					variant='bordered'
					errorMessage={
						<ErrorMessage
							className='text-tiny text-danger'
							name={name}
							component='div'
						/>
					}
					color={error ? "danger" : "success"}
					id={name}
					name={name}>
					{/* {console.log(optionArray)} */}
					{/* <option value=''>{placeholder}</option> */}
					<SelectItem key='' value=''>
						{placeholder}
					</SelectItem>
					{optionArray.map((option) => (
						<SelectItem key={option} value={option}>
							{option}
						</SelectItem>
						// <option
						// 	// className='w-full h-full font-normal !bg-transparent outline-none placeholder:text-foreground-500 text-small'
						// 	key={option}
						// 	value={option}>
						// 	{option}
						// </option>
					))}
				</Field>
			</div>
			{/* <ErrorMessage
				className='text-tiny text-danger'
				name={name}
				component='div'
			/> */}
		</div>
	);
};

export default FormSelect;
