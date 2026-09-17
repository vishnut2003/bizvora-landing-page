/**
 * The site's own absolute origin, for metadataBase and JSON-LD ids. Kept
 * apart from lib/wp.ts so the root layout can import it without pulling in
 * the WordPress client and its WP_BASE_URL guard.
 */
export function siteOrigin(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/+$/, "");
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}

/**
 * The BizvoraOne app origin, for login links and the hero mock's address
 * bar. NEXT_PUBLIC_ so the client-side header can read it; the fallback is
 * production itself, so a missing var can never crash the bundle.
 */
export function appBaseUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_APP_BASE_URL?.trim();
  return (explicit || "https://app.bizvoraone.com").replace(/\/+$/, "");
}
