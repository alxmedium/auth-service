import DotEnv from 'dotenv';

DotEnv.config();

const Configuration: Configuration = {
  host: process.env.HOST || '0.0.0.0',
  port: Number(process.env.PORT) || 3000,
  privateKey:
    process.env.PRIVATE_KEY ||
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9qZWN0TmFtZSI6ImFseHNtZWRpdW0iLCJ1c2VybmFtZSI6IkFsZXhpcyBOYXZhIn0.RK8hOqcN4Dz7jzGDpuMhORcPdqgEoY4Bj1pra-8pz1U',
};

export default Configuration;
