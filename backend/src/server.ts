import { createServer } from "node:http";
import { handleApiRequest } from "./app.ts";

const port = Number(process.env.PORT ?? "3001");

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("Invalid PORT: expected an integer from 1 to 65535");
}

const host = process.env.HOST ?? "0.0.0.0";

const server = createServer(handleApiRequest);

server.listen(port, host, () => {
  console.log(`Backend listening on http://${host}:${port}`);
});

function shutdown() {
  server.close((error) => {
    if (error) console.error("Backend shutdown failed", error);
    process.exit(error ? 1 : 0);
  });
  setTimeout(() => process.exit(1), 10_000).unref();
}

process.once("SIGTERM", shutdown);

process.once("SIGINT", shutdown);
