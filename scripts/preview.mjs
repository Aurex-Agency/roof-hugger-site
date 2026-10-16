// Local-only static route preview. No SPA fallback; mirrors clean HTML URLs.
import {createServer} from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve('dist');
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.json':'application/json','.xml':'application/xml','.svg':'image/svg+xml','.jpg':'image/jpeg','.png':'image/png','.webp':'image/webp','.woff2':'font/woff2','.ttf':'font/ttf'};
createServer((req,res)=>{
 let pathname;
 try { pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname); } catch {res.writeHead(400);res.end();return;}
 const redirects={'/services/metal-roofing':'/services/commercial-roofing'};
 const redirect=redirects[pathname] || (pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0,-1) : pathname.endsWith('.html') && pathname !== '/404.html' ? pathname.slice(0,-5) : null);
 if (redirect) {res.writeHead(308,{Location:redirect});res.end();return;}
 let file=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
 if (!file.startsWith(root+path.sep)) {res.writeHead(403);res.end();return;}
 if (!path.extname(file)) file += '.html';
 let status=200;
 if (!fs.existsSync(file)||!fs.statSync(file).isFile()){file=path.join(root,'404.html');status=404;}
 res.writeHead(status,{'Content-Type':types[path.extname(file)]||'application/octet-stream','X-Robots-Tag':'noindex, nofollow'});fs.createReadStream(file).pipe(res);
}).listen(8775,'127.0.0.1',()=>console.log('Shurden review: http://127.0.0.1:8775'));
