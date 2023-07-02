const remainingTimeInMinutes = 30;

export const getEllapsedTimeStatus = (created_date) => {
  const currentDate = Date.now();
  const createdDate = created_date;
  const elapsedTime = currentDate - createdDate;
  const elapsedMinutes = elapsedTime / (1000 * 60); // translate to minutes;

  return elapsedMinutes >= remainingTimeInMinutes;
};
