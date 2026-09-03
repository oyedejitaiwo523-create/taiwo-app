import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Settings = () => {
  const { user, updateProfile, updatePassword } = useAuth();

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [profileMessage, setProfileMessage] = useState("");
  const [profileError, setProfileError] = useState(" ");
  const [profileLoading, setProfileLoading] = useState(false)
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
const [passwordMessage, setPasswordMessage] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [passwordLoading, setPasswordLoading] = useState(false)

  const handleProfileSubmit = async(e) => {
    e.preventDefault();
    setProfileError("");
    setProfileLoading(true);

    try {
      await updateProfile(name, email);
      setProfileMessage("Profile updated successfully!");
    } catch (err) {
      setProfileError(err.message);
    }finally{
      setProfileLoading(false);
    }
  };
  const handlePasswordSubmit = async(e) => {
    e.preventDefault();
    setPasswordMessage("");
    setPasswordError("");
    setPasswordLoading(false);

    if (newPassword !== confirmPassword){
      setPasswordError("passwords do not match");
    return;
    }

    setPasswordLoading(true);

    try{
      await updatePassword (currentPassword, newPassword);
      setPasswordMessage("password updated sucessfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch(err) {
      setPasswordError(err.message)
    }finally{
      setPasswordLoading(false);
    }
  }

  return (
    <>
      {profileError && <div>{profileError}</div>}
       {profileMessage && <p>{profileMessage}</p>}
      <h1>Settings</h1>
     
      <form onSubmit={handleProfileSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" disabled={profileLoading}>
              {profileLoading? "profile loading..." : "Save Changes"}
        </button>
      </form>

     
       
        {passwordError && <div>{passwordError}</div>}
        {passwordMessage && <div>{passwordMessage}</div>}
        <form onSubmit={handlePasswordSubmit}>
          <input
          type = "password"
          value = {currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          />
            <input
          type = "password"
          value = {newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          />
            <input
          type = "password"
          value = {confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          />
           <button type="submit" disabled={passwordLoading}>
          {passwordLoading? "password loading..." : "Save Changes"}
        </button>
        </form> 
      </>
  );
}

export default Settings;