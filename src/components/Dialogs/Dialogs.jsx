import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Massage from "./Message/Message";
import React from 'react'
import {Redirect} from 'react-router-dom'
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../Common/formsControls/formsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
  return  (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={TextArea} name={'newMessageBody'}
                   placeholder={'Please write your message...'}
                   validate={[required,maxLength50]}
            />
        </div>
        <div>
            <button >add </button>
        </div>
    </form>
  )
}

const AddMessageReduxForm = reduxForm({form: 'dialogsAddMessageForm'})(AddMessageForm)

const Dialogs = (props) => {


    let dialogsElements = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>)
    let massagesElements = props.messages.map((m) => <Massage massage={m.message}/>)

    let addMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.massages}>
                <div>{massagesElements}</div>
                <AddMessageReduxForm onSubmit={addMessage} />
            </div>
        </div>

    )
}
export default Dialogs

