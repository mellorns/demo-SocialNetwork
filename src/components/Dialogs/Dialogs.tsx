import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Massage from "./Message/Message";
import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input, TextArea} from "../Common/formsControls/formsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {DialogType, MessageType} from "../../types/types";

const maxLength50 = maxLengthCreator(50)

type AddMessageFormOwnProps = {}
type AddMessageFormValuesTypesKeys = Extract<keyof NewMessageFormValuesType, string>


const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, AddMessageFormOwnProps> & AddMessageFormOwnProps> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<AddMessageFormValuesTypesKeys>('Please write your message...', "newMessageBody", Input, [required, maxLength50])}
            </div>
            <div>
                <button>add</button>
            </div>
        </form>
    )
}
type PropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    isAuth: boolean
    sendMessage: (newMessage: string) => void
}

const AddMessageReduxForm = reduxForm<NewMessageFormValuesType, AddMessageFormOwnProps>({form: 'dialogsAddMessageForm'})(AddMessageForm)

export type NewMessageFormValuesType = {
    newMessageBody: string
}


const Dialogs: React.FC<PropsType> = (props) => {


    let dialogsElements = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>)

    let massagesElements = props.messages.map((m) => <Massage massage={m.message}/>)

    let addMessage = (values: NewMessageFormValuesType) => {
        props.sendMessage(values.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.massages}>
                <div>{massagesElements}</div>
                <AddMessageReduxForm onSubmit={addMessage}/>
            </div>
        </div>

    )
}
export default Dialogs

