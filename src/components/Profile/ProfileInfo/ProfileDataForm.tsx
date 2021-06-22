import {createField, Input, TextArea} from "../../Common/formsControls/formsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import s from './ProfileInfo.module.css'
import styles from "../../Common/formsControls/formsControls.module.css";
import React from "react";
import {ProfileType} from "../../../types/types";

type ProfileDataOwnProps = {
    profile: ProfileType
}

const ProfileDataForm:React.FC<InjectedFormProps<ProfileType,ProfileDataOwnProps>& ProfileDataOwnProps> = ({handleSubmit,profile,error}) =>{
    return <form onSubmit={handleSubmit}>
      <div><button>edit</button></div>
        {error && <div className={styles.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <b>Full Name : </b>{createField<ProfileDataFormKeys>("Full name", "fullName", Input, [])}
        </div>
        <div>
            <b>Looking for a job :</b>{createField<ProfileDataFormKeys>("", "lookingForAJob", Input, [],{type:'checkbox'})}
        </div>

        <div>
            <b>My professional skills</b>
            {createField<ProfileDataFormKeys>("My professional skills", "lookingForAJobDescription", TextArea, [])}
        </div>

        <div>
            <b>About me :</b>
            {createField<ProfileDataFormKeys>("About me", "aboutMe", TextArea, [])}
        </div>
        <div>
            <b>Contacts</b>{Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
            <b>{key}:{createField(key, "contacts." + key, Input, [])}</b>
            </div>
        })}
        </div>
    </form>
}

type ProfileDataFormKeys = Extract< keyof ProfileType, string>
const ProfileDataFormReduxForm =reduxForm<ProfileType, ProfileDataOwnProps>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm