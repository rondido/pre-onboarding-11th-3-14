import { useIssue } from '../context/IssueContext';
import { useNavigate } from 'react-router-dom';
import wantedbanner from '../assets/wantedbanner.webp';
import { styled } from 'styled-components';
import Loading from '../components/loading/Loading';

interface Issue {
  number: string;
  title: string;
  user: { login: string; avatar_url: string };
  comments: number;
  created_at: Date;
  id?: string;
  body: string;
}

export default function Issuepage() {
  const navigate = useNavigate();
  const { issue, observers, isLoading }: any = useIssue();
  return (
    <Container>
      {issue.map((v: Issue, i: number) => (
        <>
          <div
            key={v.id}
            id={v.id}
            style={{ borderBottom: '1px solid black', padding: '5px' }}
            onClick={() => {
              navigate(`/detail/${v.number}`, {
                state: {
                  id: v.id,
                  number: v.number,
                  user: { login: v.user.login, avatar_url: v.user.avatar_url },
                  comments: v.comments,
                  title: v.title,
                  body: v.body,
                  created_at: v.created_at,
                },
              });
            }}>
            {i > 0 && i % 4 === 0 && (
              <li>
                <a href='https://www.wanted.co.kr/'>
                  <img src={wantedbanner} alt='원티드' />
                </a>
              </li>
            )}
            <p>#{v.number}</p>
            <p>작성자: {v.user.login}</p>
            <p>코멘트: {v.comments}</p>
            <p>{v.title}</p>
            <p>
              작성일 :{' '}
              {new Date(v.created_at).toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </>
      ))}
      {isLoading ? (
        <Loading />
      ) : (
        <div style={{ height: '200px' }} ref={observers} id='target'></div>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ul {
    display: flex;
    justify-content: space-between;
  }
  li {
    border-bottom: 1px solid black;
    margin-bottom: 10px;
    list-style: none;
  }
  img {
    display: block;
    height: 100px;
    margin: 10px auto 10px;
  }
`;
