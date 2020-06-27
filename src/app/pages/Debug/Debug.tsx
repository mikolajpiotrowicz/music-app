import React from 'react';
import { getDebug, debugResponseTransformer } from '../../services/API/debug';

export const Debug = () => {
  const [logs, setLogs] = React.useState<any>([]);
  const fetchDebug = React.useCallback(async () => {
    try {
      const response = await getDebug();
      setLogs(debugResponseTransformer(response.data));
    } catch (e) {
      console.log(e);
    }
  }, []);

  React.useEffect(() => {
    fetchDebug();
  }, []);

  return (<div>Debug
    <div>{logs.map((log:any) => (<div>{log.message}</div>))}</div>
    </div>);
};
