const baseUrl = "https://api.mv-team.ir/api";

const getFetch = async (url: string, headers?: HeadersInit) => {
  try {
    const response = await fetch(`${baseUrl}${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...headers,
      },
      cache: "no-store",
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Fail to Fetch , error is : ${error}`);
    //error={message:"Fail to Fetch..."}
  }
};

const postFetch = async (
  url: string,
  body: Record<string, any>,
  headers?: HeadersInit
) => {
  const bodyContent = Object.keys(body).length > 0 ? body : {};
  try {
    const response = await fetch(`${baseUrl}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...headers,
      },
      cache: "no-store",
      body: JSON.stringify(bodyContent),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Fail to Fetch , error is : ${error}`);
    //error={message:"Fail to Fetch..."}
  }
};
export { getFetch, postFetch };
