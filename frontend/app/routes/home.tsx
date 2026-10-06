import type { Route } from "./+types/home";

export function meta() {
  return [{ title: "Spot" }];
}

export async function clientLoader() {
  try {
    const response = await fetch("/api/health");

    return { apiStatus: response.ok ? "online" : "offline" };
  } catch {
    return { apiStatus: "offline" };
  }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <main className="container mx-auto p-4 pt-16">
      <h1 className="text-2xl font-semibold">Spot</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">API: {loaderData.apiStatus}</p>
    </main>
  );
}
