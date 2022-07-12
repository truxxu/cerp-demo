import {useState, useCallback, useRef, useEffect} from 'react';
import {AbortController} from 'native-abort-controller';

const useResource = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (resource, headers, method = 'GET', body = null) => {
      setIsLoading(true);
      const httpAbortCtrl = new AbortController();

      try {
        const response = await fetch(resource, {
          method,
          body,
          headers,
        });
        const responseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          reqCtrl => reqCtrl !== httpAbortCtrl,
        );

        if (!response.ok) {
          throw new Error(responseData.error);
        }
        return responseData;
      } catch (err) {
        setError(err);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abort());
    };
  }, []);

  return [sendRequest, isLoading, error, clearError];
};

export default useResource;
