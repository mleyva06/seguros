# Configuración de Supabase

## Pasos para configurar Supabase

### 1. Instalar el paquete de Supabase

Si aún no lo has instalado, ejecuta:

```bash
npm install @supabase/supabase-js
```

### 2. Crear un proyecto en Supabase

1. Ve a [https://app.supabase.com](https://app.supabase.com)
2. Crea una cuenta o inicia sesión
3. Crea un nuevo proyecto
4. Espera a que se complete la configuración (esto puede tomar unos minutos)

### 3. Obtener las credenciales de API

1. En tu proyecto de Supabase, ve a **Settings** > **API**
2. Copia los siguientes valores:
   - **Project URL** (URL del proyecto)
   - **anon/public key** (clave pública anónima)

### 4. Configurar las variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto con el siguiente contenido:

**Nota importante:** Si tienes el Project ID (como `xqjlccjlwaxdkakgzjda`), la URL será:
`https://xqjlccjlwaxdkakgzjda.supabase.co`

```env
NEXT_PUBLIC_SUPABASE_URL=https://xqjlccjlwaxdkakgzjda.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key-aqui
```

**Pasos para obtener la anon key:**
1. En tu proyecto de Supabase, ve a **Settings** > **API**
2. Busca la sección "Project API keys"
3. Copia el valor de **anon/public** (es una clave larga que comienza con `eyJ...`)

Reemplaza `tu-anon-key-aqui` con la clave anon que copiaste.

### 5. Crear la tabla en Supabase

1. En tu proyecto de Supabase, ve a **SQL Editor**
2. Ejecuta el siguiente SQL para crear la tabla `contacts`:

```sql
CREATE TABLE contacts (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  phonenumber VARCHAR(50) NOT NULL,
  zipcode VARCHAR(20) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Opcional: Habilitar Row Level Security (RLS) para permitir inserción pública
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Crear una política que permita a cualquier usuario insertar datos
CREATE POLICY "Permitir inserción pública"
ON contacts
FOR INSERT
TO public
WITH CHECK (true);
```

### 6. Reiniciar el servidor de desarrollo

Después de crear el archivo `.env.local`, reinicia tu servidor de desarrollo:

```bash
npm run dev
```

¡Listo! Ahora el formulario guardará los datos en tu tabla de Supabase.

## Verificar que funciona

1. Completa y envía el formulario de contacto
2. Ve a tu proyecto de Supabase > **Table Editor** > **contacts**
3. Deberías ver los datos que ingresaste

