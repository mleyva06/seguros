-- Script SQL para agregar la columna first_name a la tabla contact
-- Ejecuta este script en el SQL Editor de tu proyecto Supabase

-- Agregar la columna first_name a la tabla contact
ALTER TABLE contact 
ADD COLUMN IF NOT EXISTS first_name TEXT;

-- Opcional: Si quieres que sea NOT NULL para registros nuevos (descomenta la siguiente línea)
-- ALTER TABLE contact ALTER COLUMN first_name SET NOT NULL;

