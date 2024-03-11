
## Configuration

Create .env file and pass variables from .env.example into it then fill it

## Running the app

```bash
$ docker-compose up

```

## Done

API is available at http://localhost:3000/



## API
There are 2 endpoints:

GET  ```/api/fillData``` 
generates 10k rows in two tables for tests


POST ```/api/filter```
accepts json 

```
{
  "dateTime": "yyyy-mm-dd", (example: 2030-12-03)
  "table": "dataA" | "dataB"
}
```
