
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import React from "react";
import {ProfileType} from "../../types/types";

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status:string) => void
    savePhoto: (file:File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
    isOwner: boolean
}

const Profile: React.FC<PropsType> = (props) => {


    return <div>
        <ProfileInfo savePhoto={props.savePhoto}
                     isOwner={props.isOwner}
                     profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatus}
                     saveProfile={props.saveProfile}
        />
        <MyPostsContainer  />
    </div>;
}
export default Profile;