// const express = require('express');
// const router = express.Router();
// const redis = require('./redis');

// const PORT = 3001; 

// router.get('/search', async (req, res) => {
//   const ticketCode = req.query.ticketCode;

//   if (!ticketCode) {
//     return res.status(400).json({ error: 'Invalid request: Ticket code is required' });
//   }

//   const key = `ticket:${ticketCode}`;
//   const ticketData = await redis.get(key);

//   if (!ticketData) {
//     return res.status(404).json({ error: 'Ticket not found' });
//   }

//   const ticket = JSON.parse(ticketData);
//   res.json([ticket]);
// });

// router.get('/show', async (req, res) => {
//   try {
//     const tickets = await redis.keys('ticket:*');
//     const ticketData = await redis.mget(tickets);
//     const parsedTickets = ticketData.map(JSON.parse);
//     res.json(parsedTickets);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // module.exports = { router, PORT };