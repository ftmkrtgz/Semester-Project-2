function updateCounter(endDate, listingEndsAt, counterInterval) {
  const today = new Date();
  const timeDiff = endDate.getTime() - today.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000);

  listingEndsAt.innerHTML = `${daysLeft} days ${hoursLeft} h ${minutesLeft} m  ${secondsLeft} s left`;

  if (timeDiff <= 0) {
    clearInterval(counterInterval);
    listingEndsAt.innerHTML = `<span class="text-danger fw-bold"><i class="fa-regular fa-calendar-xmark"></i>  Time is up!</span>`;
  }
}

export function startCounter(endDate, listingEndsAt) {
  updateCounter(endDate, listingEndsAt);
  let counterInterval = setInterval(
    () => updateCounter(endDate, listingEndsAt),
    1000
  );

  return counterInterval;
}
