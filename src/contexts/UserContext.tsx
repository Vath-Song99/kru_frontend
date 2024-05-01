import { AuthForm, AuthModel, UserContextType } from "@/@types/users/users";
import { generateRandomString } from "@/utils/string";
import React, { useContext, useEffect, useMemo, useState } from "react";

export const UserContext = React.createContext<UserContextType>({
  auth: [],
  addNewAuth: () => {},
});

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [auth, setAuth] = useState<AuthModel[]>([]);

  const addNewAuth = (auth: AuthForm) => {
    // Generate 5 character random string
    const id = generateRandomString(5);
    const newAuth = { ...auth, id };
    setAuth((prev) => {
      const newAllUsers = [...prev, newAuth];
      // setLocalStorage("user", newAllUsers);

      return newAllUsers;
    });
  };

  const value = {
    auth,
    addNewAuth,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export function useUser() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
}

export default UserProvider;
