import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const HeaderSiteName = styled.p`
  width: 60%;
  margin-left: 30px;
  margin-right: 30px;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: var(--accent-color);
`;

export const HeaderTelephoneBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const HeaderTelephone = styled.a`
  font-size: 20px;
  font-weight: 500;
`;
