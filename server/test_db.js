import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
  connectionString: "postgresql://postgres:postgres@127.0.0.1:5433/internhack"
});

async function run() {
  try {
    await client.connect();
    console.log("Connected successfully!");
    const res = await client.query('SELECT NOW()');
    console.log("Result:", res.rows[0]);
    await client.end();
  } catch (err) {
    console.error("Connection failed:", err);
  }
}

run();
