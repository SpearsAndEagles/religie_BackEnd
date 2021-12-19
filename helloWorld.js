const http = require("http");
require("dotenv").config();
try {
  if (Number(process.env.PORT) <= 0 || isNaN(Number(process.env.PORT))) {
    throw "ma-ta";
  }
  const port = Number(process.env.PORT);
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    const msg = "Hello Node!\n";
    res.end(msg);
  });

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
} catch (e) {
  console.log(
    'Missing environment variable for port. Check "config.env". Terminating process'
  );
}
