import React, { useState } from 'react';

const ProfileContext = React.createContext();

const initialState = {
    id: '',
    nickname: ''
  };

const ProfileProvider = ({children})=>{
    const [profile, setProfile]= useState(initialState);
    return (
        <ProfileContext.Provider value={{profile, setProfile}}>
            {children}
        </ProfileContext.Provider>

    )
}

export { ProfileContext , ProfileProvider} 