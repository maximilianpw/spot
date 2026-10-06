import type { IncomingMessage, ServerResponse } from "node:http";

export function handleApiRequest(request: IncomingMessage, response: ServerResponse): void {
  const pathname = request.url?.split("?")[0];
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", "no-store");

  if (pathname === "/api/health") {
    if (request.method !== "GET" && request.method !== "HEAD") {
      response.writeHead(405, { Allow: "GET, HEAD" });
      response.end(JSON.stringify({ error: "Method not allowed" }));
      return;
    }
    response.writeHead(200);
    response.end(JSON.stringify({ status: "ok" }));
    return;
  }

  response.writeHead(404);
  response.end(JSON.stringify({ error: "Not found" }));
}
