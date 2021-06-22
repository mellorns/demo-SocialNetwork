import styles from './formsControls.module.css'
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import {FieldValidatorType} from "../../../utils/validators/validators";
import React from "react";

type FormControlParamsType = {
    meta: WrappedFieldMetaProps
}
export const FormControl: React.FC<FormControlParamsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            <div>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    )
}

export const TextArea: React.FC<WrappedFieldProps> = (props) => {
    // const {input,meta,child, ...restProps} = props
    const {input, meta, ...restProps} = props
    return <FormControl {...props} > <textarea {...input} {...restProps}/></FormControl>

}
export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props} > <input {...input} {...restProps}/></FormControl>
}

export function createField<FormKeysType extends string>(placeholder: string | undefined,
                                                         name: FormKeysType,
                                                         component: React.FC<WrappedFieldProps>,
                                                         validators: Array<FieldValidatorType>,
                                                         props = {},
                                                         text = '') {
    return <div>
        <Field placeholder={placeholder}
               name={name}
               component={component}
               validate={validators}
               {...props}
        /> {text}
    </div>
}
