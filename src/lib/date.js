export const formatTimeObject = (hours, minutes) => ({
  hours: `${hours}`.padStart(2, 0),
  minutes: `${minutes}`.padStart(2, 0),
});

export function convertTime({ hours, minutes }) {
  return new Date().setHours(hours, minutes);
}

export function difference(start, end) {
  const dateDiff = new Date(convertTime(end) - convertTime(start));

  return {
    hours: dateDiff.getUTCHours(),
    minutes: dateDiff.getUTCMinutes(),
  };
}

Date.prototype.addHours = function (hours, minutes) {
  this.setTime(this.getTime() + hours * 60 * 60 * 1000);

  if (minutes) {
    this.setMinutes(this.getMinutes() + minutes);
  }
  return this;
};

Date.prototype.subtractHours = function (hours, minutes = 0) {
  const hoursTimestamp = hours * 60 * 60 * 1000;
  const minutesTimestamp = minutes ? minutes * 60 * 1000 : 0;

  this.setTime(this.getTime() - hoursTimestamp - minutesTimestamp);

  return this;
};
