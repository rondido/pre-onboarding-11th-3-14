import styled from 'styled-components';
import { useIssue } from '../../context/IssueContext';
export default function Header() {
  const { issue }: any = useIssue();
  const data = (issue && issue[0]) || issue;
  const headerTilte =
    data.repository_url?.split('/').reverse()[1] +
    '/' +
    data.repository_url?.split('/').reverse()[0];
  return (
    <HeaderContainer>
      <div>{headerTilte}</div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  height: 50px;
  font-size: 30px;
  margin-bottom: 20px;
  margin-top: 10px;
  line-height: 50px;
  text-align: center;
  font-weight: bold;
`;
