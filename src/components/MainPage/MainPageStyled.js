import styled from "styled-components";

export const MainPageStyle = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const MainPageParagraph = styled.p`
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 18px;
`;

export const MainPageUnorderedList = styled.ul`
  margin-left: 30px;
  padding-top: 5px;
  padding-bottom: 5px;
`;
export const MainPageListItem = styled.li`
  list-style-type: disc;
  font-size: 18px;
`;

export const MainPageParagraphHeader = styled.p`
  margin-top: 20px;
  /* padding-bottom: 20px; */
  font-weight: 700;
  font-size: 22px;
  text-align: center;
`;

export const SecondPageParagraphHeader = styled.p`
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
`;

export const TableStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: left;
`;

export const ColumnStyled = styled.div``;

export const ItemListStyled = styled.ul`
  list-style: none;
  padding-left: 0;

  li::before {
    content: "-";
    margin-right: 0.5em;
  }

  li {
    margin-bottom: 0.5em;
  }
`;
