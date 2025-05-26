import styled from "styled-components";

export const IconsWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  padding: 20px 0;
  background-color: var(--accent-color);
`;

export const IconLink = styled.a`
  color: var(--main-text-color);
  font-size: 24px;
  transition: color 0.3s;

  &:hover {
    color: var(--main-background-color);
  }
`;
