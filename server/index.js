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
import mailRoutes from './routes/mail.js'
import careerRoutes from './routes/careerRoutes.js'

dotenv.config();
const app = express();  

app.use(cors({
  origin: [
    'https://eversure.vercel.app',  
    'http://eversure.vercel.app',
    'http://localhost:3000',          
    'http://localhost:5173',          
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

const PORT = process.env.PORT || 8000;
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
    res.json({ 
        message: 'Server is running!', 
        port: PORT,
        timestamp: new Date().toISOString()
    });
});

app.get('/health', (req, res) => {
    res.json({ status: 'OK', port: PORT });
});

app.use('/api', mailRoutes);
app.use('/api/career', careerRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).json({ error: 'Internal server error' });
});

// Handle 404
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Fixed listener - no parameters in callback, explicit host binding
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});