import fs from 'node:fs';
import { pathToFileURL } from 'node:url';
export const HOST = 'shurdensroofing.com';
export function validateUrls(values, sitemap) {
 const allowed = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]));
 const urls = [...new Set(values.map(s=>s.trim()).filter(Boolean))];
 if (!urls.length || urls.length > 10000) throw new Error('Provide 1 to 10000 changed canonical URLs.');
 for (const value of urls) {
  const u = new URL(value);
  if (u.origin !== `https://${HOST}` || u.username || u.password || u.search || u.hash || !allowed.has(value)) throw new Error('URL must be a published canonical URL in the current sitemap.');
 }
 return urls;
}
export async function main(args = process.argv.slice(2)) {
 const send = args.includes('--send');
 const file = args.find(v=>!v.startsWith('--'));
 if (!file) throw new Error('Usage: node scripts/indexnow.mjs changed-urls.txt [--send]');
 const urls = validateUrls(fs.readFileSync(file,'utf8').split(/\r?\n/),fs.readFileSync('dist/sitemap.xml','utf8'));
 if (!send) { console.log(JSON.stringify({mode:'dry-run',host:HOST,urlList:urls},null,2)); return; }
 if (process.env.INDEXNOW_PRODUCTION !== 'true') throw new Error('Explicit INDEXNOW_PRODUCTION=true required after an approved deployment.');
 const config = JSON.parse(fs.readFileSync('indexnow.config.json','utf8'));
 const key = process.env.INDEXNOW_KEY || config.key || '';
 if (!/^[a-zA-Z0-9-]{8,128}$/.test(key)) throw new Error('Configure a valid host verification key.');
 const keyLocation = `https://${HOST}/${key}.txt`;
 const verification = await fetch(keyLocation, {redirect:'error',signal:AbortSignal.timeout(10000)});
 if (!verification.ok || (await verification.text()).trim() !== key) throw new Error('Production host verification file is not available or mismatches.');
 const response = await fetch('https://api.indexnow.org/indexnow',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({host:HOST,key,keyLocation,urlList:urls}),signal:AbortSignal.timeout(15000)});
 fs.mkdirSync('.indexnow',{recursive:true});
 fs.appendFileSync('.indexnow/submissions.jsonl',JSON.stringify({at:new Date().toISOString(),host:HOST,status:response.status,count:urls.length})+'\n');
 if (![200,202].includes(response.status)) throw new Error(`IndexNow returned ${response.status}. Inspect response/rate limits before a manual retry.`);
 console.log(`IndexNow received ${urls.length} URLs (${response.status}); receipt does not confirm indexing.`);
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main().catch(error=>{console.error(error.message);process.exitCode=1;});
