import express from 'express';
import pg from 'pg';
const { Pool } = pg;
import fs from 'fs'

const APIPORT = 3000;
const app = express();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database:"energy",
  password: process.env.DB_PASSWORD,
  port: process.env.PORT
})