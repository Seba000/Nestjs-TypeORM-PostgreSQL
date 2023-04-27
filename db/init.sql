

SELECT 'CREATE DATABASE sebadb'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'sebadb')\gexec