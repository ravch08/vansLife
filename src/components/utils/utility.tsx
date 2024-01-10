export async function getVans() {
  const response = await fetch("/api/vans");

  if (!response.ok) {
    throw {
      message: "Failed to fetch Vans!",
      statusText: response.statusText,
      status: response.status,
    };
  }

  const data = await response.json();
  return data.vans;
}

export const loader = () => {
  return getVans();
};

// export const loader = (queryClient) => async () => {
//   const query = getVans();
//   return (
//     queryClient.getQueryData(query.queryKey) ??
//     (await queryClient.fetchQuery(query))
//   );
// };
