import type { Blocker, Transition } from 'history';
import * as React from 'react';
import { HistoryService } from '../services';

const useBlocker = (blocker: Blocker, when = true) => {
  React.useEffect(() => {
    if (!when) return;

    const unblock = HistoryService.block((tx: Transition) => {
      const autoUnblockingTx = {
        ...tx,
        retry() {
          unblock();
          tx.retry();
        },
      };

      blocker(autoUnblockingTx);
    });

    return unblock;
  }, [blocker, when]);
};

export default useBlocker;
