import { execSync } from 'child_process';
try {
  const res = execSync('npx prisma migrate dev --name add_github_stats_updated_at --config server/src/database/prisma.config.ts', { 
    input: 'y\ny\ny\n',
    stdio: ['pipe', 'pipe', 'pipe']
  });
  console.log(res.toString());
} catch (err) {
  console.error('STDOUT:', err.stdout?.toString());
  console.error('STDERR:', err.stderr?.toString());
}
