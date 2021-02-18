import styled from "styled-components";

export const ContentContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, ${(props) => props.alpha || 0.6});
`;
