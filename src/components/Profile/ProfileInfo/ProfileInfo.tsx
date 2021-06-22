import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import ProfileInfoWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.jpg";
import React, {ChangeEvent, useState} from "react";
import ProfileDataFormReduxForm from "./ProfileDataForm";
import {ContactsType, ProfileType} from "../../../types/types";

type ProfileInfoType = {
    profile: ProfileType | null
    status: string
    updateStatus:(status:string)=> void
    isOwner:boolean
    savePhoto:(file:File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}


const ProfileInfo: React.FC<ProfileInfoType>= ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoChange = (e:ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit =  (formData:ProfileType) => {
         saveProfile(formData).then(() => {
             setEditMode(false)
         })
    }

    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-_mIfmXfxZydIr5sSyiVu6p_LMiG6L8ZDw&usqp=CAU"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoChange}/>}

                {editMode
                    ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    : <ProfileData goToEditMode={() => {setEditMode(true)}}  profile={profile} isOwner={isOwner}/>}

                <ProfileInfoWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>)
}

type ContactsPropType = {
    contactTitle: string
    contactValue: string
}
const Contact: React.FC<ContactsPropType> = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>
        <b>{contactTitle}</b><b>: {contactValue}</b>
    </div>
}
type ProfileData = {
    profile: ProfileType
    isOwner:boolean
    goToEditMode: () => void

}

const ProfileData: React.FC<ProfileData> = ({profile,isOwner,goToEditMode}) =>{
    return <div>
        {isOwner &&  <div><button onClick={goToEditMode}>edit</button></div>}
        <div>
            <b>Full Name : </b>{profile.fullName}
        </div>
        <div>
            <b>Looking for a job :</b>{profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>{profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me :</b>{profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>{Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
        })}
        </div>
    </div>
}



export default ProfileInfo;