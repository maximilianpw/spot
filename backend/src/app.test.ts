import { createServer } from "node:http";
import { afterAll, beforeAll, describe, expect, it } from "vite-plus/test";
import { handleApiRequest } from "./app.ts";

const server = createServer(handleApiRequest);
let baseUrl: string;

beforeAll(async () => {
  await new Promise<void>((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });
  const address = server.address();
  if (!address || typeof address === "string") throw new Error("Expected a TCP server address");
  baseUrl = `http://127.0.0.1:${address.port}`;
});

afterAll(async () => {
  await new Promise<void>((resolve, reject) => {
    server.close((error) => (error ? reject(error) : resolve()));
  });
});

describe("backend API", () => {
  it("returns health as JSON, including when a query string is supplied", async () => {
    const response = await fetch(`${baseUrl}/api/health?probe=1`);
    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toContain("application/json");
    expect(await response.json()).toEqual({ status: "ok" });
  });

  it("supports HEAD without a response body", async () => {
    const response = await fetch(`${baseUrl}/api/health`, { method: "HEAD" });
    expect(response.status).toBe(200);
    expect(await response.text()).toBe("");
  });

  it("rejects unsupported methods", async () => {
    const response = await fetch(`${baseUrl}/api/health`, { method: "POST" });
    expect(response.status).toBe(405);
    expect(response.headers.get("allow")).toBe("GET, HEAD");
    expect(await response.json()).toEqual({ error: "Method not allowed" });
  });

  it("returns JSON 404s rather than frontend HTML", async () => {
    const response = await fetch(`${baseUrl}/api/missing`);
    expect(response.status).toBe(404);
    expect(await response.json()).toEqual({ error: "Not found" });
  });
});
