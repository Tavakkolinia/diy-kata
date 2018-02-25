const humanCatDogYears = (number) => {
  let catYears = 24 + ((number - 2) * 4);
  let dogYears = 24 + ((number - 2) * 5);
  if (number > 2) {
    return [number, catYears, dogYears];
  }

};

export default humanCatDogYears
