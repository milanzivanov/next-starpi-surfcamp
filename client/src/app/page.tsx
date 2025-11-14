async function loader() {
  const path = "/api/home-page";
  const BASE_URL = "http://localhost:1337";
  const url = new URL(path, BASE_URL);

  const response = await fetch(url.href);
  const data = await response.json();
  return { ...data.data };
}

export default async function HomeRoute() {
  const data = await loader();
  const { title, description } = data;

  // console.log("////////// data", data);

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
