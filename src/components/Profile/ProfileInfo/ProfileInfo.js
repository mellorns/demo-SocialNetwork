import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import ProfileInfoWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.jpg";
import {useState} from "react";
import ProfileDataFormReduxForm from "./ProfileDataForm";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false)


    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoChange = (e) => {
        if (e.currentTarget.files[0]) {
            savePhoto(e.currentTarget.files[0])
        }
    }

    const onSubmit =  (formData) => {
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

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>
        <b>{contactTitle}</b><b>: {contactValue}</b>
    </div>
}

const ProfileData = ({profile,isOwner,goToEditMode}) =>{
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
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}



export default ProfileInfo;