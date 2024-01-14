export async function getVans() {
  const response = await fetch("/api/vans");

  const data = await handleResponse(response);
  return data.vans;
}

export async function getVanDetail(id: string) {
  const response = await fetch(`/api/vans/${id}`);

  const data = await handleResponse(response);
  return data.vans;
}

async function handleResponse(response) {
  if (!response.ok) {
    throw {
      message: "Failed to fetch Vans!",
      statusText: response.statusText,
      status: response.status,
    };
  }

  return await response.json();
}
