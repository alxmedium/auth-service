const Configuration: Configuration = {
  dbHost: process.env.DB_HOST || '127.0.0.1',
  dbName: process.env.DB_NAME || 'alxmedium-auth',
  dbPassword: process.env.DB_PASSWORD || 'alxmedium-auth-service-password',
  dbPort: Number(process.env.DB_PORT) || 5432,
  dbUsername: process.env.DB_USERNAME || 'alxmedium-auth-service',
  privateKey:
    process.env.PRIVATE_KEY ||
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9qZWN0TmFtZSI6ImFseHNtZWRpdW0iLCJ1c2VybmFtZSI6IkFsZXhpcyBOYXZhIn0.RK8hOqcN4Dz7jzGDpuMhORcPdqgEoY4Bj1pra-8pz1U',
  serviceHost: process.env.HOST || '0.0.0.0',
  servicePort: Number(process.env.PORT) || 3000,
};

export default Configuration;
