const seededRandom = (seed) => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;

    return () => (s = (s * a) % m) / m;
};

const fetchAPI = (date) => {
    const daySeed = date.getDate();
    const monthSeed = date.getMonth() + 1;
    const yearSeed = date.getFullYear();
    const combinedSeed = daySeed + monthSeed * 31 + yearSeed * 12 * 31;
    const random = seededRandom(combinedSeed);
    console.log("fetchAPI called with date:", date);

    let result = [];
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) result.push(i + ":00");
      if (random() < 0.5) result.push(i + ":30");
    }

    return result;
  };

const submitAPI = (formData) => true;

export { fetchAPI, submitAPI };
