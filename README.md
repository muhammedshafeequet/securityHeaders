# securityHeaders
# securityHeaders
# 🛡️ Interactive Web Security Headers Learning Lab

An interactive, high-fidelity security laboratory designed to demonstrate the impact of HTTP response headers on browser security mechanisms. This platform allows developers and security researchers to toggle between **Vulnerable** and **Secure** states in real time to witness browser-level exploitation and mitigation natively.

**Author/Maintainer:** cyberxavi  

---

## 🧪 Laboratory Modules Covered

This platform provides dedicated sandbox environments for 7 critical header security concepts:
1. **CORS (Cross-Origin Resource Sharing):** Exploiting wildcard `*` origins to exfiltrate private API payloads.
2. **X-Frame-Options / CSP frame-ancestors:** Simulating a cross-origin transparent clickjacking overlay.
3. **Content-Security-Policy (CSP):** Executing Reflected XSS payloads vs enforcing strict layout execution constraints.
4. **HttpOnly Cookies:** Exfiltrating sensitive session tokens via JavaScript `document.cookie` scraping.
5. **X-Content-Type-Options:** Forcing browser MIME-sniffing execution loops via rogue text files.
6. **Referer-Policy:** Inspecting confidential token leakage across external outbound destinations.
7. **HTTP Strict Transport Security (HSTS):** Understanding protocol upgrade enforcements.

---

## 🚀 Installation & Local Setup

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your operating system.

### 1. Clone the Repository
```bash
git clone https://github.com/muhammedshafeequet/securityHeaders.git
	cd securityHeaders
	npm install

#then
	node server1.js     //to run webserver

#open on >> browser 
	http://localhost:3000
