export const getUser = async (memberId: number) => {
  const response = await fetch(
    `http://27.96.135.58:8080/v1/api/result/${memberId}`
  ).then((res) => res.json());

  return response;
};
