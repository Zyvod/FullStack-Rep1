import express from 'express';
import pg from 'pg';
const { Pool } = pg;
import fs from 'fs'
import cors from 'cors'
import morgan from 'morgan'

const APIPORT = 3000;

const app = express();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database:"energy",
  password: process.env.DB_PASSWORD,
  port: process.env.PORT
})

app.use(express.static('public'))

app.use(cors())

app.use(morgan('tiny'))

app.use(express.json())

app.get('/api/brands', async(req,res) => {
  console.log('working')
  try {
    const result = await pool.query(`SELECT * FROM brands;`)
    res.status(200).send(result.rows)
  } catch(err) {
    console.error(err)
      res.status(400).send('Bad Request')
  }
})

app.get('/api/flavors' , async (req,res) =>{
  console.log("flavlorful!")
  try {
    const result = await pool.query(`SELECT * FROM flavors;`)
    res.status(200).send(result.rows)
  } catch(err) {
    console.error(err)
      res.status(400).send('Bad Request')
  }
})

app.get('/api/flavors/:id', async (req,res,next) => {
  let brandId = req.params.id;
  let brandName = await parseId(brandId);

  if (brandName === undefined) {
    next();
  } else {
    try {
      const result = await pool.query(`SELECT * FROM flavors WHERE brandname = $1;`, [brandName])
      res.status(200).json(result.rows);
    } catch(err) {
      console.error(err);
      res.status(400).send('Bad Request');
    }
  }
});

app.use((req,res, next) => {
  next({message: 'The path you are looking for does not exist',status:400})
})

app.use((err,req,res,next) => {
  console.log('Unknown Route Hit')
  res.status(err.status).json({error:err})
})


app.listen(APIPORT, (req,res) =>{
  console.log("Server Listening On PORT 3000")
})

async function parseId(brandId) {
  let brandName =
    brandId === '1' ? 'Monster' :
    brandId === '2' ? 'Reign' :
    brandId === '3' ? 'Rip It' :
    undefined;

  return brandName;
}