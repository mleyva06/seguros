-- Script SQL para crear la tabla contacts en Supabase
-- Ejecuta este script en el SQL Editor de tu proyecto Supabase

-- Crear la tabla contacts
CREATE TABLE contacts (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  phonenumber VARCHAR(50) NOT NULL,
  zipcode VARCHAR(20) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Habilitar Row Level Security (RLS)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Crear una política que permita a cualquier usuario insertar datos
CREATE POLICY "Permitir inserción pública"
ON contacts
FOR INSERT
TO public
WITH CHECK (true);

-- Opcional: Crear un índice para mejorar las búsquedas por código postal
CREATE INDEX idx_contacts_zipcode ON contacts(zipcode);

-- Opcional: Crear un índice para mejorar las búsquedas por fecha
CREATE INDEX idx_contacts_created_at ON contacts(created_at);

