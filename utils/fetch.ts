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
  body?: Record<string, any>,
  headers?: HeadersInit
) => {
  //  const bodyContent = Object.keys(body).length > 0 ? body : {};
  try {
    console.log(body);
    const options: any = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...headers,
      },
      cache: "no-store",
      body: body ? JSON.stringify(body) : undefined,
    };
    const response = await fetch(`${baseUrl}${url}`, options);
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Fail to Fetch , error is : ${error}`);
    //error={message:"Fail to Fetch..."}
  }
};
export { getFetch, postFetch };
