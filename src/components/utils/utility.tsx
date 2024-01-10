import { redirect } from "react-router-dom";

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

export async function getVanDetail(id: string) {
  const response = await fetch(`/api/vans/${id}`);

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

// export const loader = (queryClient) => async () => {
//   const query = getVans();
//   return (
//     queryClient.getQueryData(query.queryKey) ??
//     (await queryClient.fetchQuery(query))
//   );
// };

export async function requireAuth() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    throw redirect("/login");
  }
}
