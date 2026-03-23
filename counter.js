import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const count = (await redis.get('count')) || 0;
    return res.status(200).json({ count });
  }

  if (req.method === 'POST') {
    const count = await redis.incr('count');
    return res.status(200).json({ count });
  }
}