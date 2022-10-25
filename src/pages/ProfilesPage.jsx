import React from "react";
import { Header } from "../components/Header/Header";
import { UserFrame } from "../components/UserFrame/UserFrame";
import userStore from "../store/profilesStore";
import { HeaderPadding, Wrapper } from "./PagesStyle";

export const ProfilesPage = () => {
  return (
    <div>
      <Header />
      <HeaderPadding>
        <Wrapper>
          {userStore.profiles.map((user) => {
            return <UserFrame user={user} key={user.id} />;
          })}
        </Wrapper>
      </HeaderPadding>
    </div>
  );
};
