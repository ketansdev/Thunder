import dns from "node:dns";

// Google DNS
dns.setServers(["8.8.8.8"]);

// Uncomment if Google doesn't work
// dns.setServers(["1.1.1.1"]);
// dns.setServers(["9.9.9.9"]);