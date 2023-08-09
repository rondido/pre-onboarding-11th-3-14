import { useLocation } from 'react-router-dom';

export default function IssueDetailpage() {
  const location = useLocation();
  const issue = location.state;
  return (
    <div>
      <img src={issue.user.avatar_url} />
      <p>#{issue.number}</p>
      <p>작성자: {issue.user.login}</p>
      <p>{issue.comments}</p>
      <p>{issue.title}</p>
      <p>
        작성일 :
        {new Date(issue.created_at).toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
      <p>{issue.body}</p>
    </div>
  );
}
