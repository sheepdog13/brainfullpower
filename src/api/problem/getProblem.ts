export const getProblems = async () => {
  const promises = Array.from({ length: 5 }, (_, index) =>
    fetch(`http://27.96.135.58:8080/v1/api/problems/${index + 1}`).then(
      (response) => response.json()
    )
  );
  return Promise.all(promises);
};
