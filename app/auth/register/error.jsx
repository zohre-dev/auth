"use client";
export default function Error({ error, reset }) {
  //{error} = props;
  //error={message:"Fail to Fetch..."}
  return (
    <div>
      <h2>{error.message}</h2>
      <button onClick={() => reset()}>تلاش دوباره</button>
    </div>
  );
}
