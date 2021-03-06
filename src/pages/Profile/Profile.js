import React from "react"
import Spinner from "../../shared/Spinner/Spinner"
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../../firebase.init"
import './Profile.css'

const Profile = () => {
	const [user, loading] = useAuthState(auth)
    console.log(user)
	if (loading) {
		return <Spinner></Spinner>
	}
	console.log(user)
	return (
		<div className="profile">
			<img
				width="200px"
				src={
					user?.photoURL ||
					"https://thumbs.dreamstime.com/b/person-gray-photo-placeholder-man-costume-white-background-person-gray-photo-placeholder-man-136701248.jpg"
				}
				alt=""
			/>
			<h2>{user.displayName}</h2>
		</div>
	)
}

export default Profile
