const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Global State Mock DB
let db = { balance: 5000, flag: "FLAG{HE4D3R_S3CUR1TY_M4ST3R_BY_CYBERXAVI}" };

// ==========================================
// 🏠 MAIN DASHBOARD
// ==========================================
app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Security Header Learning Lab</title>
            <style>
                body { font-family: 'Segoe UI', Arial, sans-serif; margin: 0; padding: 0; background: #f4f6f9; color: #333; }
                .navbar { background: #2c3e50; padding: 15px 30px; color: white; display: flex; justify-content: space-between; align-items: center; }
                .navbar h1 { margin: 0; font-size: 24px; }
                .nav-links a { color: #fff; text-decoration: none; margin-left: 20px; font-weight: bold; }
                .container { max-width: 1100px; margin: 40px auto; padding: 0 20px; }
                .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; margin-top: 30px; }
                .card { background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); transition: transform 0.2s; border-top: 5px solid #3498db; }
                .card:hover { transform: translateY(-5px); }
                .card h3 { margin-top: 0; color: #2c3e50; }
                .btn { display: inline-block; padding: 10px 15px; background: #3498db; color: white; text-decoration: none; border-radius: 4px; margin-top: 15px; font-weight: bold; }
                .hero { background: white; padding: 40px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); text-align: center;}
                footer { text-align: center; margin-top: 50px; padding: 20px; color: #7f8c8d; font-weight: bold; border-top: 1px solid #dcdde1; }
            </style>
        </head>
        <body>
            <div class="navbar">
                <h1>🛡️ Security Header Lab Platform</h1>
                <div class="nav-links">
                    <a href="/">Home</a>
                    <a href="/learn">Theory Hub</a>
                </div>
            </div>
            <div class="container">
                <div class="hero">
                    <h2>Welcome to the Interactive Browser Security Lab</h2>
                    <p>Select a module below to launch individual security header simulations. Toggle defenses on and off to observe exact browser security warning outputs natively.</p>
                </div>
                <div class="grid">
                    <div class="card"><h3>1. CORS (Cross-Origin)</h3><p>Test misconfigured Access-Control-Allow-Origin parameters.</p><a href="/lab/cors" class="btn">Launch Lab</a></div>
                    <div class="card"><h3>2. X-Frame-Options</h3><p>Simulate a genuine cross-origin transparent clickjacking overlay.</p><a href="/lab/xframe" class="btn">Launch Lab</a></div>
                    <div class="card"><h3>3. Content-Security-Policy</h3><p>Inject scripts and witness XSS execution vs CSP mitigation.</p><a href="/lab/csp" class="btn">Launch Lab</a></div>
                    <div class="card"><h3>4. HttpOnly Cookies</h3><p>Exfiltrate cookies via JavaScript vs protected HTTP storage structures.</p><a href="/lab/httponly" class="btn">Launch Lab</a></div>
                    <div class="card"><h3>5. X-Content-Type-Options</h3><p>Force browser MIME-sniffing exploits using rogue text files.</p><a href="/lab/nosniff" class="btn">Launch Lab</a></div>
                    <div class="card"><h3>6. Referer-Policy</h3><p>Inspect credential leakage via cross-origin referrer URL parameters.</p><a href="/lab/referer" class="btn">Launch Lab</a></div>
                    <div class="card"><h3>7. HSTS (Strict-Transport)</h3><p>Understand how browsers prevent cleartext connection downgrades.</p><a href="/lab/hsts" class="btn">Launch Lab</a></div>
                </div>
                <footer>Developed & Maintained by: cyberxavi</footer>
            </div>
        </body>
        </html>
    `);
});


// ==========================================
// 📚 THEORY HUB & REFERENCE CENTER
// ==========================================
app.get('/learn', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Theory Hub - Security Headers Explained</title>
            <style>
                body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background: #fafafa; color: #333; }
                .navbar { background: #2c3e50; padding: 15px 30px; color: white; display: flex; justify-content: space-between; align-items: center; }
                .navbar a { color: white; text-decoration: none; font-weight: bold; }
                .container { max-width: 900px; margin: 40px auto; padding: 30px; background: white; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
                h1 { color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 10px; }
                h2 { color: #2980b9; margin-top: 40px; border-bottom: 1px solid #ddd; padding-bottom: 5px; }
                code { background: #f8f9fa; padding: 2px 6px; border-radius: 4px; font-family: monospace; color: #e74c3c; font-size: 15px; }
                pre { background: #2c3e50; color: #fff; padding: 15px; border-radius: 5px; overflow-x: auto; }
                .meta-box { background: #e8f4f8; border-left: 5px solid #3498db; padding: 15px; margin: 20px 0; border-radius: 0 4px 4px 0; }
                footer { text-align: center; margin-top: 50px; padding: 20px; color: #7f8c8d; font-weight: bold; }
            </style>
        </head>
        <body>
            <div class="navbar"><h2>📚 Knowledge Hub</h2><div><a href="/">← Back to Dashboard</a></div></div>
            <div class="container">
                <h1>Comprehensive Web Security Headers Reference</h1>
                
                <h2>1. Cross-Origin Resource Sharing (CORS)</h2>
                <p>The <b>Same-Origin Policy (SOP)</b> naturally blocks JavaScript from reading raw API responses from other origins. CORS safely relaxes this rule.</p>
                <div class="meta-box"><b>Vulnerability:</b> Setting <code>Access-Control-Allow-Origin: *</code> maps your data as readable to all sites globally.</div>
                <pre># Secure Target Implementation\nAccess-Control-Allow-Origin: https://trusted.domain.com\nAccess-Control-Allow-Credentials: true</pre>

                <h2>2. X-Frame-Options & CSP frame-ancestors</h2>
                <p>Prevents <b>Clickjacking</b> attacks where malicious UI patterns overlay an invisible iframe of your application to steal interaction clicks.</p>
                <pre>X-Frame-Options: DENY\nContent-Security-Policy: frame-ancestors 'none';</pre>

                <h2>3. Content-Security-Policy (CSP)</h2>
                <p>Mitigates <b>Cross-Site Scripting (XSS)</b> by establishing a strict allowlist of where script assets can execute from.</p>
                <pre>Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted-cdn.com;</pre>

                <h2>4. HttpOnly & Secure Cookie Flags</h2>
                <p>Ensures that runtime applications inside the browser cannot scrape authentication tokens or identity context data via raw <code>document.cookie</code> endpoints.</p>
                <pre>Set-Cookie: session=token123; Secure; HttpOnly; SameSite=Strict</pre>

                <h2>5. X-Content-Type-Options</h2>
                <p>Forces layout engines to bypass legacy <b>MIME-sniffing</b> behaviors, preventing a text string or user file from being masqueraded and parsed as an active script block.</p>
                <pre>X-Content-Type-Options: nosniff</pre>

                <h2>6. Referer-Policy</h2>
                <p>Governs how much sensitive path routing context metadata information is exposed outward inside your <code>Referer</code> request headers when navigating away.</p>
                <pre>Referer-Policy: strict-origin-when-cross-origin</pre>

                <h2>7. HTTP Strict Transport Security (HSTS)</h2>
                <p>Forces modern client engines to natively enforce encrypted TLS network exchanges before data transmits onto raw local relay grids.</p>
                <pre>Strict-Transport-Security: max-age=63072000; includeSubDomains; preload</pre>
                
                <footer>Curated for excellence by cyberxavi</footer>
            </div>
        </body>
        </html>
    `);
});

// ==========================================
// 🧪 1. CORS LAB MODULE
// ==========================================
app.get('/lab/cors', (req, res) => {
    const secure = req.query.mode === 'secure';
    if (secure) {
        res.setHeader('Access-Control-Allow-Origin', 'https://safe-domain.example.com');
    } else {
        res.setHeader('Access-Control-Allow-Origin', '*'); 
    }
    
    if (req.query.api === 'true') {
        return res.json({ balance: db.balance, secret: db.flag });
    }

    res.send(renderLabTemplate("CORS Exploit Suite", secure, `
        <p>The simulated target endpoint yields sensitive account payloads. Toggle states to watch the origin validation system drop or accept cross-domain extraction commands.</p>
        <button class="btn" style="background:#e74c3c; border:none; padding:10px 15px; color:#fff; font-weight:bold; cursor:pointer; border-radius:4px;" onclick="triggerExfiltration()">Launch Cross-Origin Request</button>
        <h4 style="margin-top:20px;">Intercepted Output Stream:</h4>
        <pre id="cors-log" style="background:#222; color:#0f0; padding:15px; border-radius:4px;">Awaiting user evaluation input loops...</pre>
        <script>
            function triggerExfiltration() {
                fetch('/lab/cors?api=true')
                    .then(r => r.json())
                    .then(data => { document.getElementById('cors-log').innerText = JSON.stringify(data, null, 2); })
                    .catch(e => { document.getElementById('cors-log').innerText = "Blocked securely by browser CORS Single-Origin Policy rules!"; });
            }
        </script>
    `));
});

// ==========================================
// 🧪 2. X-FRAME-OPTIONS LAB MODULE (High Fidelity Cross-Origin)
// ==========================================
app.get('/lab/xframe-target', (req, res) => {
    const secure = req.query.mode === 'secure';
    if (secure) res.setHeader('X-Frame-Options', 'DENY');
    
    res.send(`
        <html>
        <body style="background:#fff; font-family:sans-serif; text-align:center; margin:0; padding:20px; border:2px solid #c0392b;">
            <h4 style="color:#c0392b; margin:0 0 10px 0;">Victim App Profile</h4>
            <form action="/lab/xframe/action" method="POST">
                <button type="submit" style="background:#e74c3c; color:white; padding:10px; border:none; border-radius:4px; font-weight:bold; width:100%; cursor:pointer;">
                    TRANSFER FUNDS ($5,000)
                </button>
            </form>
        </body>
        </html>
    `);
});

app.get('/lab/xframe', (req, res) => {
    const secure = req.query.mode === 'secure';
    const currentHost = req.headers.host || "localhost:3000";
    
    // Simulate real cross-origin swapping localhost and loopback interfaces
    const targetOrigin = currentHost.includes('localhost') ? 'http://127.0.0.1:3000' : 'http://localhost:3000';
    const iframeUrl = `${targetOrigin}/lab/xframe-target?mode=${secure ? 'secure' : 'vulnerable'}`;

    res.send(renderLabTemplate("Clickjacking (X-Frame-Options)", secure, `
        <p>Ensure you handle evaluation strictly via <code>http://localhost:3000/lab/xframe</code> to trigger the browser's isolation parameters correctly.</p>
        <div style="position: relative; width: 340px; height: 160px; background: #f39c12; color:white; border-radius:6px; text-align:center; box-shadow:0 4px 6px rgba(0,0,0,0.1);">
            <div style="padding-top: 55px;"><button style="background:#2ecc71; color:white; border:none; padding:12px 24px; font-weight:bold; border-radius:4px;">🎁 CLAIM FREE REWARD 🎁</button></div>
            <iframe src="${iframeUrl}" style="position: absolute; top:0; left:0; width:100%; height:100%; border:none; opacity:${secure ? '1.0' : '0.25'}; z-index:2;"></iframe>
        </div>
        <p style="font-size:14px; margin-top:20px; color:#555;"><b>Testing Parameters:</b> In Secure Mode, open your browser Console (F12). You will see a structural refusal error generated directly by the engine blocking instantiation.</p>
    `));
});

app.post('/lab/xframe/action', (req, res) => {
    res.send("<h3>Exploit Triggered: Account balance altered successfully!</h3><a href='/lab/xframe'>Return to Lab Module</a>");
});

// ==========================================
// 🧪 3. CONTENT-SECURITY-POLICY (CSP) LAB MODULE
// ==========================================
app.get('/lab/csp', (req, res) => {
    const secure = req.query.mode === 'secure';
    let payload = req.query.xss || "";
    
    if (secure) res.setHeader('Content-Security-Policy', "default-src 'self';");

    res.send(renderLabTemplate("CSP Cross-Site Scripting Lab", secure, `
        <p>Submit payload parameters to test execution tracking strings.</p>
        <form action="/lab/csp" method="GET">
            <input type="hidden" name="mode" value="${secure ? 'secure' : 'vulnerable'}">
            <input type="text" name="xss" value='<script>alert("XSS Successful! Stole cookies: " + (document.cookie || "None"))</script>' style="width:75%; padding:8px;">
            <button type="submit" style="padding:8px 12px; background:#3498db; color:#fff; border:none; font-weight:bold; border-radius:4px; cursor:pointer;">Submit Payload</button>
        </form>
        <div style="background:#eee; padding:15px; margin-top:20px; border-radius:4px;">
            <strong>Reflected Content Injection:</strong>
            <div>${payload}</div>
        </div>
    `));
});

// ==========================================
// 🧪 4. HTTPONLY COOKIE LAB MODULE
// ==========================================
app.get('/lab/httponly', (req, res) => {
    const secure = req.query.mode === 'secure';
    
    if (secure) {
        res.cookie('SessionToken', 'SECRET_TOKEN_PROTECTED_BY_CYBERXAVI', { httpOnly: true, path: '/lab/httponly' });
    } else {
        res.cookie('SessionToken', 'EXPOSED_TOKEN_VULNERABLE_TO_SCRAPING', { httpOnly: false, path: '/lab/httponly' });
    }

    res.send(renderLabTemplate("HttpOnly Cookie Isolation Lab", secure, `
        <p>Cookies missing protection structures remain entirely exposed to client-side XSS collection processes.</p>
        <button class="btn" style="background:#3498db; border:none; padding:10px 15px; color:#fff; font-weight:bold; cursor:pointer; border-radius:4px;" onclick="readCookies()">Execute document.cookie Scraping</button>
        <h4 style="margin-top:20px;">Active Session Memory Context Output:</h4>
        <pre id="cookie-dump" style="background:#222; color:#0f0; padding:15px; border-radius:4px;">Awaiting runtime validation commands...</pre>
        <script>
            function readCookies() {
                document.getElementById('cookie-dump').innerText = document.cookie || "Zero matching accessible parameters detected via client runtime context structures.";
            }
        </script>
    `));
});

// ==========================================
// 🧪 5. X-CONTENT-TYPE-OPTIONS LAB MODULE
// ==========================================
app.get('/lab/nosniff', (req, res) => {
    const secure = req.query.mode === 'secure';
    
    if (req.query.trigger === 'file') {
        res.setHeader('Content-Type', 'text/plain'); 
        if (secure) res.setHeader('X-Content-Type-Options', 'nosniff');
        return res.send('alert("Malicious code executed natively from raw text layout stream configurations!");');
    }

    res.send(renderLabTemplate("X-Content-Type-Options Sniffer Lab", secure, `
        <p>Without standard validation parameters, layout frameworks run non-matching media payloads as raw execution scripts.</p>
        <div id="sniff-status" style="padding:15px; background:#ddd; border-radius:4px; font-weight:bold;">Monitoring runtime script injection...</div>
        <script src="/lab/nosniff?trigger=file" onerror="document.getElementById('sniff-status').innerText='MIME Injection Blocked Successfully via nosniff baseline configurations!'"></script>
    `));
});

// ==========================================
// 🧪 6. REFERER-POLICY LAB MODULE
// ==========================================
app.get('/lab/referer', (req, res) => {
    const secure = req.query.mode === 'secure';
    if (secure) res.setHeader('Referer-Policy', 'no-referrer');
    else res.setHeader('Referer-Policy', 'unsafe-url');

    if (req.query.target === 'outbound') {
        const receivedReferer = req.headers.referer || "None (Referer header dropped securely)";
        return res.send(`
            <body style="font-family:sans-serif; padding:30px; background:#f4f6f9;">
                <h2>Third-Party System Landing Dashboard</h2>
                <p>The destination endpoint scraped the following mapping context from your transmission logs:</p>
                <pre style="background:#222; color:#ff0; padding:15px; font-size:16px; border-radius:4px;">${receivedReferer}</pre>
                <a href="/lab/referer?mode=${secure ? 'secure' : 'vulnerable'}">Return to Challenge Room</a>
            </body>
        `);
    }

    res.send(renderLabTemplate("Referer-Policy Metadata Leakage", secure, `
        <div style="background:#fff3cd; padding:12px; border-left:4px solid #ffc107; margin-bottom:15px;">
            <strong>Sensitive Sandbox Route Trace Context:</strong> <br>
            <code>http://localhost:3000/lab/referer?session_credential=cyberxavi_admin_token_string_abc123</code>
        </div>
        <a href="/lab/referer?target=outbound" class="btn" style="background:#8e44ad; text-decoration:none; padding:10px 15px; color:#fff; font-weight:bold; border-radius:4px; display:inline-block;">Simulate Cross-Origin Outbound Navigation Link</a>
    `));
});

// ==========================================
// 🧪 7. HTTP STRICT TRANSPORT SECURITY (HSTS)
// ==========================================
app.get('/lab/hsts', (req, res) => {
    const secure = req.query.mode === 'secure';
    if (secure) res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');

    res.send(renderLabTemplate("HTTP Strict Transport Security (HSTS)", secure, `
        <p>HSTS drops downstream interception protocols natively inside local client route indices before data enters local transfer pipelines.</p>
        <div style="background:#e8f4f8; padding:15px; border-left:5px solid #3498db; border-radius:4px; margin-top:15px;">
            <strong>Generated Response Header Value:</strong> <br>
            <code>${secure ? "Strict-Transport-Security: max-age=31536000" : "None Set (Transport channel susceptible to routing downgrade manipulations)"}</code>
        </div>
    `));
});

// ==========================================
// 🎛️ UNIVERSAL UI GENERATION TEMPLATE UTILITY
// ==========================================
function renderLabTemplate(title, isSecure, labBodyContent) {
    return `
        <html>
        <head>
            <title>${title} - Sandbox Environment</title>
            <style>
                body { font-family: 'Segoe UI', Arial, sans-serif; margin: 0; padding: 0; background: #f4f6f9; color: #333; }
                .navbar { background: #2c3e50; padding: 15px 30px; color: white; display: flex; justify-content: space-between; align-items: center; }
                .navbar a { color: white; text-decoration: none; font-weight: bold; margin-left:15px; }
                .container { max-width: 800px; margin: 40px auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
                .toggle-zone { display: flex; background: #eee; padding: 10px; border-radius: 6px; margin-bottom: 25px; gap:10px; }
                .toggle-btn { flex: 1; text-align: center; padding: 12px; font-weight: bold; text-decoration: none; border-radius: 4px; color:#333; background:#ddd; }
                .toggle-btn.active.vuln { background: #e74c3c; color: white; }
                .toggle-btn.active.secure { background: #2ecc71; color: white; }
                .badge { display: inline-block; padding: 4px 8px; font-size:12px; font-weight:bold; border-radius:4px; color:white; }
                .bg-red { background:#e74c3c; } .bg-green { background:#2ecc71; }
                footer { text-align: center; margin-top: 50px; padding: 20px; color: #7f8c8d; font-weight: bold; border-top:1px solid #eee; }
            </style>
        </head>
        <body>
            <div class="navbar">
                <h2>🧪 Sandbox: ${title}</h2>
                <div><a href="/learn">📚 Read Theory</a> | <a href="/">🏠 Home Dashboard</a></div>
            </div>
            <div class="container">
                <div class="toggle-zone">
                    <a href="?mode=vulnerable" class="toggle-btn ${!isSecure ? 'active vuln' : ''}">⚠️ Vulnerable Mode</a>
                    <a href="?mode=secure" class="toggle-btn ${isSecure ? 'active secure' : ''}">🛡️ Secure Mode</a>
                </div>
                <div>
                    <h3>Active Execution Simulation Layer 
                        ${isSecure ? '<span class="badge bg-green">Defenses Applied</span>' : '<span class="badge bg-red">Vulnerable Configuration</span>'}
                    </h3>
                    <hr style="border:0; border-top:1px solid #ddd; margin-bottom:20px;">
                    ${labBodyContent}
                </div>
                <footer>Lab Module Author: cyberxavi</footer>
            </div>
        </body>
        </html>
    `;
}

app.listen(3000, () => console.log('🚀 Security Lab Platform running securely at: http://localhost:3000'));
