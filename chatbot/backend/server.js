// const express = require('express');
// const bodyParser = require('body-parser');
// const axios = require('axios');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const port = 5000;


// app.use(cors());

// app.use(bodyParser.json());

// app.post('/', async (req, res) => {
//   const userMessage = req.body.message;

//   // Call ChatGPT API
//   try {
//     const response = await axios.post(
//       'https://api.openai.com/v1/chat/completions',
//       {
//         model: 'gpt-4o-mini',
//         messages: [
//           { role: 'system', content: 'You are a helpful assistant.' },
//           { role: 'user', content: userMessage }
//         ],
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
//         },
//       }
//     );

//     const botResponse = response.data.choices[0].message.content;

//     // Here, you can add additional logic to fetch data from Walmart or another API if needed
//     // For example, use Walmart API or web scraping to fetch product details

//     // res.json({ response: botResponse });
//   } catch (error) {
//     console.error('Error communicating with ChatGPT API:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
