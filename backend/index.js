import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'AI Agency Backend is running' });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ status: 'Error', message: 'Lütfen tüm alanları doldurun.' });
  }

  console.log(`New Inquiry: ${name} (${email}) - ${message}`);
  
  // In a real app, this would save to a database or send an email
  res.json({ status: 'Success', message: 'Mesajınız başarıyla iletildi! En kısa sürede size döneceğiz.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
