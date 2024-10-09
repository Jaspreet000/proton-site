// pages/api/blogs.js
import { connectToDatabase } from '@/lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, description, image, link, content, by, bydesc } = req.body;
    
    if (!title || !description || !content) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
      const { db } = await connectToDatabase();

      const newBlog = {
        title,
        description,
        image,
        link,
        content,
        by,
        bydesc,
        createdAt: new Date(),
      };

      await db.collection('blogs').insertOne(newBlog);

      res.status(200).json({ message: 'Blog added successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Something went wrong.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
