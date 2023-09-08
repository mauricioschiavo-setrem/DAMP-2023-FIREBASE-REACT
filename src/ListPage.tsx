import { useGlobalContext } from './context/UserContext';

export function ListPage() {
  const { userId } = useGlobalContext();

  return (
    <>
      <h1>Lista</h1>
      UserId: {userId}
    </>
  );
}
