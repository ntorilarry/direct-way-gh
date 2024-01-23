import axios from "axios";
import React, {
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

interface ProfileContextType {
  userId: string | undefined;
  setUserId: Dispatch<SetStateAction<string | undefined>>;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

interface ProfileProviderProps {
  children: ReactNode;
}

export const useProfileContext = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfileContext must be used within a ProfileProvider");
  }
  return context;
};

export const ProfileProvider: React.FC<ProfileProviderProps> = ({
  children,
}: ProfileProviderProps) => {
  const [userId, setUserId] = React.useState<string | undefined>(undefined);
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const access_token = localStorage.getItem("token");
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/users/profile`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
        setUserId(response.data.data.id);
        console.log("ppc", response.data.data.id);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <ProfileContext.Provider value={{ userId, setUserId }}>
      {children}
    </ProfileContext.Provider>
  );
};
