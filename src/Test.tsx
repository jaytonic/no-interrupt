import { doc } from 'firebase/firestore';
import { useFirestore, useFirestoreDocData } from 'reactfire';
export const Test = () => {
  const burritoRef = doc(useFirestore(), 'test', 'id-de-malade');
  const { status, data } = useFirestoreDocData(burritoRef);

  if (status === 'loading') {
    return <p>Fetching data...</p>;
  }
  return <div>Hello {data.title}</div>;
};
