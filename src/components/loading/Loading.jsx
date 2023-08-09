import { styled } from 'styled-components';

export default function Loading() {
  return <LoadingContainer>로딩중...</LoadingContainer>;
}

const LoadingContainer = styled.div`
  position: sticky;
  width: 100vw;
  height: 100vh;
  bottom: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
