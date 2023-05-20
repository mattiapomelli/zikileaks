import React from "react";
import BackButton from "../components/BackButton";
import {
  SismoConnectButton,
  SismoConnectClientConfig,
  SismoConnectResponse,
  AuthType,
} from "@sismo-core/sismo-connect-react";
import axios from "axios";
import { useState } from "react";
import { devGroups } from "../../config";

import type { NextPage } from "next";

export const sismoConnectConfig: SismoConnectClientConfig = {
  // You can create a new Sismo Connect app at https://factory.sismo.io
  appId: "0x72c0abd705e4be124adc0b9fe1f67a11",
  devMode: {
    // Enable or disable dev mode here to create development groups and use the development vault.
    enabled: false,
    devGroups: [devGroups[0]],
  },
};

type UserType = {
  id: string;
  name: string;
};

export default function Level1RegisterUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userInput, setUserInput] = useState("");
  const [verifiedUser, setVerifiedUser] = useState<UserType | null>(null);

  async function verify(response: SismoConnectResponse) {
    // First we update the react state to show the loading state
    setLoading(true);

    try {
      // We send the response to our backend to verify the proof
      const res = await axios.post(`/api/level-1-verify-user`, {
        response,
      });

      const user = res.data;

      // If the proof is valid, we update the user react state to show the user profile
      setVerifiedUser({
        id: user.id,
        name: user.name,
      });
    } catch (e) {
      // Else if the proof is invalid, we show an error message
      setError("Invalid response");
      console.error(e);
    } finally {
      // We set the loading state to false to show the user profile
      setLoading(false);
    }
  }

  // On text input change, we update the userInput react state variable
  function onUserInput(e: any) {
    setUserInput(e.target.value);
  }

  return (
    <>
      <BackButton />
      <div className="container">
        {!verifiedUser && (
          <>
            <h1>Anonymous and Gated Registration</h1>
            <p className="subtitle-page">
              Level 1: request for an anonymous userId, a Nouns DAO NFT ownership, a signed message with
              the username and save it in a database.
            </p>

            <div className="input-group">
              <label htmlFor="userName">Fill in your name</label>
              <input
                id="userName"
                type="text"
                value={userInput}
                onChange={onUserInput}
                disabled={loading}
              />
            </div>

            <SismoConnectButton
              config={sismoConnectConfig}
              auths={[{ authType: AuthType.VAULT }]}
              claims={[{ groupId: "0x1ca383268ca46c64587dd4ef9bd1261d"}]}
              onResponse={(response: SismoConnectResponse) => verify(response)}
              loading={loading}
              text="Register with Sismo"
            />
            <>{error}</>
          </>
        )}
        {verifiedUser && (
          <>
            <h1>You have been registered</h1>
            <p className="subtitle-page">
              Your shared an anonymous userId, proved that you are a member of Nouns DAO NFT Holders
              group, signed a message with your username and saved it in a local database
            </p>
            <div className="profile-container">
              <h2 style={{ marginBottom: 10 }}>User Profile</h2>
              <div style={{ marginBottom: 10 }}>
                <b>UserId:</b>
                <p>{verifiedUser.id}</p>
              </div>
              <div style={{ marginBottom: 10 }}>
                <b>UserName:</b>
                <p>{verifiedUser.name}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}