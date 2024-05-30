"use client";
import { signOut } from "next-auth/react";
import React from "react";

export const Logout = () => {
  return (
    <button
      onClick={() =>
        signOut({ redirect: true, callbackUrl: `${window.location.origin}` })
      }
    >
      singout
    </button>
  );
};
