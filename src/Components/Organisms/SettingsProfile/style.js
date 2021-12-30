import styled from "styled-components";

export const SettingsWrapper = styled.div`
  display: flex;
  flex-flow: column;

  height: 100%;

  form {
    display: flex;
    flex-flow: column;
    gap: 32px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  place-content: space-between;

  padding-top: 16px;
`;

export const ButtonsSave = styled.div`
  display: flex;
  place-content: flex-end;
  gap: 16px;
`;

export const Row2Items = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`;

export const Row3Items = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`;
