CREATE TABLE brands (
  brandname VARCHAR(255) PRIMARY KEY
  );

  CREATE TABLE flavors (
    id SERIAL PRIMARY KEY,
    brandname VARCHAR(255) REFERENCES brands(brandname),
    flavor VARCHAR(255)
  );