/**
 * Welcome to the Junior Backend Development Course Playground! 🎉
 *
 * This is where the magic of backend development begins.
 * Think of this file as your canvas for experimenting with code.
 *
 * 👉 What you'll find here:
 * - A simple HTTP server written in TypeScript
 * - The starting point for creating your own backend logic
 *
 * 🛠️ Feel free to tweak the code, break things (and fix them),
 * and explore how everything works. Backend development is all
 * about learning through experimentation!
 *
 * 🚀 Let's build something awesome together!
 *
 * ~ Ismael Kedir
 */

import { createServer } from 'http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, backend world!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
