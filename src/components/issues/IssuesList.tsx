import { useLocation } from 'react-router-dom';

export default function IssuesList() {
  const location = useLocation();
  console.log(location.state);
  return <div>IssuesList</div>;
}
