import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
  SetStateAction,
} from 'react';
import { issueService } from '../services/IssueService';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

type IssueProviderProps = {
  children?: React.ReactNode;
};

interface IssueProps {
  number: string;
  title: string;
  user: { login: string; avatar_url: string };
  comments: number;
  created_at: Date;
  id?: string;
  body: string;
}

interface IssueContextProps {
  issue: IssueProps[];
  observers: React.Dispatch<SetStateAction<null>>;
  isLoading: boolean;
}

export const IssueContext = createContext<IssueContextProps | null>(null);

export const useIssue = () => useContext(IssueContext);

export function IssueProvider({ children }: IssueProviderProps) {
  const [pageList, setPageList] = useState(1);
  const [issue, setIssue] = useState<IssueProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const fetchMoreIssue = useCallback(() => {
    setPageList(prev => prev + 1);
  }, [issue]);

  const observers = useIntersectionObserver(fetchMoreIssue);
  const getIssueList = async () => {
    setIsLoading(true);

    try {
      const issueData = await issueService.get({
        sort: 'comments',
        state: 'open',
        per_page: 5,
        page: `${pageList}`,
      });
      if (typeof issue === 'object') {
        setIsLoading(false);
        setIssue(prev => [...prev, ...issueData.data]);
      }
    } catch (e) {
      throw new Error();
    }
  };
  useEffect(() => {
    getIssueList();
  }, [pageList]);

  return (
    <IssueContext.Provider value={{ issue, observers, isLoading }}>
      {children}
    </IssueContext.Provider>
  );
}
