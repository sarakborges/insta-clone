import styled from "styled-components";

export const SelectProfileWrapper = styled.div`
  position: relative;
`;

export const ActiveProfile = styled.div`
  display: flex;
  place-content: space-between;
  place-items: center;
  gap: 16px;

  width: 100%;
  padding: 0 16px;
  overflow: hidden;
`;

export const ActiveInfo = styled.div`
  flex: 1;
  padding: 16px 0;

  overflow: hidden;
`;

export const GoToProfile = styled.div`
  min-width: 80px;
`;

export const Settings = styled.div`
  display: flex;
  place-content: center;
  place-items: center;

  padding-bottom: 16px;

  > a {
    font-size: 12px;

    &:hover {
      text-decoration: underline;
    }
  }

  > span {
    width: 4px;
    height: 4px;
    margin: 0 12px;

    background-color: var(--bgInverted);
  }
`;

export const Logout = styled.div`
  cursor: pointer;

  &:hover > p {
    text-decoration: underline;
  }
`;

export const SelectProfile = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 3;

  width: 480px;
  overflow: hidden;

  background-color: var(--bgContrast);
  border-radius: 0 0 16px 16px;
  box-shadow: 0 3px 5px var(--bg);

  opacity: ${({ displayProfiles }) => (displayProfiles ? 1 : 0)};
  visibility: ${({ displayProfiles }) =>
    displayProfiles ? "visible" : "hidden"};

  transition: opacity 0.3s, visibility 0.3s;
`;

export const InfoAreaWrapper = styled.div`
  display: flex;

  padding: 16px;

  background-color: ${({ highlighted }) =>
    highlighted ? "var(--bgContrast)" : "transparent"};
  cursor: pointer;

  transition: background-color 0.3s;
`;
