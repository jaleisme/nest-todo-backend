exports.config = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "",
    "database": "nest-todo",
    "entities": ["src/**/**.entity{.ts,.js}"],
    "synchronize": true
  }