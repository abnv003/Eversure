// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import mailRoutes from './routes/mail.js'
// import careerRoutes from './routes/careerRoutes.js'

// dotenv.config();
// const app = express();  
// app.use(cors({
//   origin: [
//     'https://eversure.vercel.app',  
//     'http://eversure.vercel.app',
//     'http://localhost:3000',          
//     'http://localhost:5173',          
//   ],
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));
// const PORT = process.env.PORT || 8000;
// app.use(express.json());

// app.use('/api', mailRoutes);
// app.use('/api/career', careerRoutes);

// app.listen(PORT, (request, response)=>{
//     console.log(`server running on ${PORT}`)
// });

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mailRoutes from './routes/mail.js';
import careerRoutes from './routes/careerRoutes.js';

dotenv.config();
const app = express();  
const PORT = process.env.PORT || 8000;

// CORS config
const corsOptions = {
  origin: [
    'https://eversure.vercel.app',
    'http://localhost:3000',
    'http://localhost:5173',
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // 👈 important for preflight

app.use(express.json());

app.use('/api', mailRoutes);
app.use('/api/career', careerRoutes);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
