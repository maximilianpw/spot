import type { Config } from "@react-router/dev/config";

export default {
  // The API is hosted separately in backend/; deploy build/client as static assets.
  ssr: false,
} satisfies Config;
