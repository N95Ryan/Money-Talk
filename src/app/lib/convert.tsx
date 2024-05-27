import { Request, Response } from 'express';

export default async function handler(req: Request, res: Response) {
    const { from, to } = req.query;
  
    try {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
      const data = await response.json();
      const rate = data.rates[to];
  
      if (!rate) {
        return res.status(400).json({ error: 'Conversion rate not found' });
      }
  
      res.status(200).json({ rate });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  