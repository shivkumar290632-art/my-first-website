import { drizzle } from "drizzle-orm/sqlite-proxy";
import * as schema from "./schema";

type D1Response = {
  success: boolean;
  result?: { success: boolean; results?: { rows: unknown[][] } }[];
};

export function getDb() {
  const {
    CLOUDFLARE_ACCOUNT_ID: accountId,
    CLOUDFLARE_D1_DATABASE_ID: databaseId,
    CLOUDFLARE_D1_API_TOKEN: token,
  } = process.env;

  if (!accountId || !databaseId || !token) {
    throw new Error("Cloudflare D1 credentials are missing from the Vercel environment.");
  }

  const endpoint = `https://api.cloudflare.com/client/v4/accounts/${encodeURIComponent(accountId)}/d1/database/${encodeURIComponent(databaseId)}/raw`;

  return drizzle(async (sql, params, method) => {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ sql, params }),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Cloudflare D1 API returned HTTP ${response.status}.`);
    }

    const payload: D1Response = await response.json();
    const result = payload.result?.[0];
    if (!payload.success || !result?.success) {
      throw new Error("Cloudflare D1 query failed.");
    }

    const rows = result.results?.rows ?? [];
    return { rows: method === "get" ? rows[0] : rows };
  }, { schema });
}
