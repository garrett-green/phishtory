import { Show } from '@local';
import axios from 'axios';
import { useEffect, useState } from 'preact/hooks';

interface FetchPhishtory {
  day?: string;
  month?: string;
}

const url = process.env.PHISHTORY_ENDPOINT!;

const date = new Date();
const today = date.getDate();
const thisMonth = date.getMonth() + 1;

export function useFetchPhishtory({
  day = today.toString(),
  month = thisMonth.toString(),
}: FetchPhishtory) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Show[]>([]);
  const [error, setError] = useState<Error | undefined>(undefined);

  const storageKey = `${month}-${day}`;

  useEffect(() => {
    const getPhishtory = async () => {
      setLoading(true);
      const phishtoryFromStorage = window.sessionStorage.getItem(storageKey);
      if (phishtoryFromStorage) {
        setData(JSON.parse(phishtoryFromStorage) as Show[]);
        setLoading(false);
      } else {
        try {
          const { data } = await axios.post<Show[]>(url, { day, month });
          setLoading(false);
          window.sessionStorage.setItem(storageKey, JSON.stringify(data));
          setData(data);
        } catch (e) {
          setError(e as Error);
        }
      }
    };

    getPhishtory();
  }, [storageKey]);

  return { loading, data, error };
}
