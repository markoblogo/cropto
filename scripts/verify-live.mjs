const baseUrl = (process.env.LIVE_BASE_URL || "https://cr0pto.com").replace(/\/$/, "");

async function get(path) {
  const response = await fetch(`${baseUrl}${path}`, { redirect: "follow" });
  const body = await response.text();
  if (!response.ok) throw new Error(`${path} returned HTTP ${response.status}`);
  return { response, body };
}

function requireMatch(value, pattern, label) {
  if (!pattern.test(value)) throw new Error(`${label} check failed`);
}

const home = await get("/");
requireMatch(home.body, /<link rel="canonical" href="https:\/\/cr0pto\.com\/"/i, "canonical URL");
requireMatch(home.body, /Cropto · Indexed Trading/i, "page title");
if (/trade on mock balances/i.test(home.body)) throw new Error("stale trading claim is still present");

const health = await get("/api/health");
requireMatch(health.body, /"ok"\s*:\s*true/i, "health endpoint");

const robots = await get("/robots.txt");
requireMatch(robots.body, /^User-agent:\s*\*/i, "robots.txt");
requireMatch(robots.body, /Sitemap:\s*https:\/\/cr0pto\.com\/sitemap\.xml/i, "robots sitemap reference");

const sitemap = await get("/sitemap.xml");
requireMatch(sitemap.body, /<urlset\b/i, "sitemap.xml");

if (home.response.headers.has("x-powered-by")) throw new Error("x-powered-by is exposed");
requireMatch(home.response.headers.get("strict-transport-security") || "", /max-age=/i, "HSTS header");
requireMatch(home.response.headers.get("x-content-type-options") || "", /nosniff/i, "content type header");

console.log(`Live verification passed: ${baseUrl}`);
