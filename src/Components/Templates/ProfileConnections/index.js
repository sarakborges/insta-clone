// Dependencies
import { useCallback, useContext, useEffect, useState } from "react";

// Helpers
import { CONNECTIONS_TABS } from "Helpers/Constants";

// Contexts
import { UserContext } from "Contexts/User";
import { ProfileContext } from "Contexts/Profile";

// Molecules
import Tabs from "Components/Molecules/Tabs";

// Organisms
import FilteredList from "Components/Organisms/FilteredList";

// Templates
import ProfileTemplate from "Components/Templates/Profile";

// Styles
import * as S from "./style";

const ProfileConnectionsTemplate = () => {
  const { profileState } = useContext(ProfileContext);
  const { userState } = useContext(UserContext);
  const { profile } = userState;

  const [approvedConnections, setApprovedConnections] = useState([]);
  const [conditions, setConditions] = useState();

  const getApprovedConnections = useCallback(() => {
    if (!profileState?._id || !profile?._id) {
      return;
    }

    setConditions({
      isSelf: profileState?._id === profile?._id,
      isNotSelf: profileState?._id !== profile?._id,
    });

    const filteredConnections = profileState?.connections
      ?.filter?.((item) => {
        if (item.status === "connected") {
          return item;
        } else {
          return false;
        }
      })
      .map((item) => {
        return {
          ...item.user,
          connectedAt: item.connectedAt,
        };
      });

    setApprovedConnections(filteredConnections);
  }, [profileState, profile]);

  useEffect(() => {
    getApprovedConnections();
  }, [getApprovedConnections]);

  return (
    <ProfileTemplate>
      {profileState?._id && (
        <S.ProfileConnections>
          <S.Tabs>
            <Tabs
              tabs={CONNECTIONS_TABS.filter(
                (item) => !conditions?.[item.condition]
              ).map((item) => {
                return {
                  ...item,
                  link: item.link.replace(":id", profileState?.url),
                };
              })}
            />
          </S.Tabs>

          <FilteredList
            info={approvedConnections}
            id='profile-connections-filter'
            placeholder='Encontre pessoas'
            type='connection'
            title={`Conexões de ${profileState?.name}:`}
            noInfoText={`${profileState?.name} ainda não possui nenhuma conexão.`}
            parentInfo={profileState}
          />
        </S.ProfileConnections>
      )}
    </ProfileTemplate>
  );
};

export default ProfileConnectionsTemplate;
