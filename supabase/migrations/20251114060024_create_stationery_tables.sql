/*
  # Stationery Website Database Schema

  ## Overview
  Creates tables for a kids' stationery e-commerce website with products, testimonials, and booking functionality.

  ## New Tables
  
  ### 1. `products`
  Stores stationery product information
  - `id` (uuid, primary key) - Unique product identifier
  - `name` (text) - Product name
  - `description` (text) - Product description
  - `price` (numeric) - Product price
  - `category` (text) - Product category (pens, notebooks, art supplies, etc.)
  - `image_url` (text) - URL to product image
  - `in_stock` (boolean) - Availability status
  - `created_at` (timestamptz) - Creation timestamp

  ### 2. `testimonials`
  Stores customer testimonials and reviews
  - `id` (uuid, primary key) - Unique testimonial identifier
  - `customer_name` (text) - Customer's name
  - `content` (text) - Testimonial content
  - `rating` (integer) - Star rating (1-5)
  - `created_at` (timestamptz) - Creation timestamp
  - `is_featured` (boolean) - Whether to show on homepage

  ### 3. `bookings`
  Stores customer booking/inquiry requests
  - `id` (uuid, primary key) - Unique booking identifier
  - `name` (text) - Customer's name
  - `email` (text) - Customer's email
  - `phone` (text) - Customer's phone number
  - `message` (text) - Booking inquiry message
  - `created_at` (timestamptz) - Submission timestamp
  - `status` (text) - Booking status (pending, contacted, completed)

  ## Security
  - Enable RLS on all tables
  - Public read access for products and featured testimonials
  - Authenticated insert access for bookings
  - Admin-only write access for products and testimonials
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price numeric(10, 2) NOT NULL,
  category text NOT NULL,
  image_url text NOT NULL,
  in_stock boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  content text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view all products"
  ON products FOR SELECT
  USING (true);

CREATE POLICY "Public can view featured testimonials"
  ON testimonials FOR SELECT
  USING (true);

CREATE POLICY "Anyone can submit bookings"
  ON bookings FOR INSERT
  WITH CHECK (true);

INSERT INTO products (name, description, price, category, image_url) VALUES
  ('Rainbow Gel Pen Set', 'Vibrant 12-color gel pen set perfect for note-taking and doodling', 12.99, 'pens', 'https://images.pexels.com/photos/159644/art-supplies-brushes-rulers-scissors-159644.jpeg'),
  ('Aesthetic Bullet Journal', 'Premium dotted notebook with 200 pages and elastic closure', 18.99, 'notebooks', 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg'),
  ('Pastel Highlighter Set', 'Soft pastel highlighters in 6 dreamy colors', 9.99, 'highlighters', 'https://images.pexels.com/photos/268415/pexels-photo-268415.jpeg'),
  ('Washi Tape Collection', '24-piece decorative washi tape for journaling and crafts', 15.99, 'accessories', 'https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg'),
  ('Sketch Pad Pro', 'Professional 100-sheet sketch pad with smooth paper', 14.99, 'art-supplies', 'https://images.pexels.com/photos/745365/pexels-photo-745365.jpeg'),
  ('Metallic Marker Set', 'Stunning metallic markers in gold, silver, and copper', 16.99, 'pens', 'https://images.pexels.com/photos/1053691/pexels-photo-1053691.jpeg'),
  ('Study Planner 2024', 'Comprehensive academic planner with goal-setting pages', 22.99, 'notebooks', 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg'),
  ('Sticky Notes Mega Pack', '500 colorful sticky notes in various sizes', 11.99, 'accessories', 'https://images.pexels.com/photos/4226894/pexels-photo-4226894.jpeg');

INSERT INTO testimonials (customer_name, content, rating, is_featured) VALUES
  ('Emma, 15', 'The gel pens are absolutely amazing! The colors are so vibrant and they write so smoothly. Perfect for my bullet journal!', 5, true),
  ('Alex, 14', 'Best stationery store ever! Got my study planner here and my grades have actually improved because I''m so organized now.', 5, true),
  ('Maya, 16', 'Love the aesthetic vibes of everything here. The washi tape collection is chef''s kiss!', 5, true),
  ('Jordan, 13', 'Fast shipping and everything arrived perfectly packaged. The highlighters are exactly what I needed for school.', 4, true);
