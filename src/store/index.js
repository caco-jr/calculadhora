import { writable } from 'svelte/store';

import { formatTimeObject } from '@lib/date';

function createTime(hoursValue, minutesValue) {
  const { subscribe, set, update } = writable(
    formatTimeObject(hoursValue, minutesValue)
  );

  return {
    subscribe,
    set,
    update: ({ hours, minutes }) =>
      update((value) => formatTimeObject(hours, minutes)),
  };
}

export const workload = createTime(8, 48);
export const initTime = createTime(8, 30);
export const lunchStart = createTime(13, 0);
export const lunchFinish = createTime(14, 0);
export const finishTime = createTime(19, 12);
