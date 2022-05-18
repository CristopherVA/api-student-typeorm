# API estudiante

_Aplicacion del lado del backend para llevar las gestiones de estudiante_

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

## Pre-requisitos 📋

_Herramientas utilizadas para el desarrollo del proyecto_

```
TYPESCRIPT
NODE JS
EXPRESS JS
MYSQL
TYPEORM
```

## Instalación 🔧

_Para poder correr del proyecto debemos de hacer lo siguiente:_

_Clonar el proyecto_

```
git clone 
```

## Instalar las dependencias

```
npm install o npm i
```


## Insertar los valores para poder conectar con la base de datos 🔧

```
Configuracion para la conexion de la base de datos!

---- Ruta --> src/config/db.ts ----
const AppDataSource = new DataSource ({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "YOUR PASSWORD",
    database: "YOUR DATABASE",
    entities: [Student],
    logging: true,
    synchronize: true
})

```

## Correr el servidor desde la terminal con el siguiente comando 🔧

```
Este comando corre la api en modo local
npm start

Este comando corre la api en modo desarrollo
npm run dev

```


## Rutas utilizadas 🛠️

```
    Ejecutar todos los endpoint en posman u otra opcion
```
 
# Obtener todos los estudiantes

```
    http://localhost:8080/student/
```

# Obtener estudiante por ID

```
    http://localhost:8080/student/1
```

# Obtener todos los estudiante eliminados

```
    http://localhost:8080/student/delete
```

# Obtener todos los estudiante eliminiado por id

```
    http://localhost:8080/student/delete/3
```



# Agregar nuevo estudiante
```
    http://localhost:8080/student/

    En el body colocar los siguientes datos para poder agregar
    {
        "name":              NOMBRE DE ESTUDIANTE
        "dateBirth":         FECHA DE NACIMIENTO
        "course":            CURSO
    }   
```

# Actualizar estudiante

```
    http://localhost:8080/student/ + id

    En el body colocar los siguientes datos para poder actualizar
    {
        "name":              string -  NOMBRE DEL estudiante
        "dateBirth":         string -  FECHA DE NACIMIENTO
        "course":            string -  CURSO
    }
```

# Elimianr estudiante
```
     http://localhost:8080/student/ + id
```

### Construido con 🛠️

_Los siguientes paquete son los utilizados para el desarrollo_

* [TypeScript](https://expressjs.com/es/) - El framework backend usado para hacer las request y response
* [Express JS](https://expressjs.com/es/) - El framework backend usado para hacer las request y response
* [Cors](https://www.npmjs.com/package/cors) - Paquete para poder utilizar solicitar recursos restringidos
* [Dotenv](https://www.npmjs.com/package/dotenv) - Paquete para poder utilizar leer variables de entornos
* [TypeORM](https://www.npmjs.com/package/typeorm) - Paquete para crear la base de datos y hacer las migraciones
* [MySql](https://www.npmjs.com/package/mysql) - Paquete usado para la conexion a la base de datos

### Autor ✒️

* **Cristopher Valentin ALmonte** - *Trabajo Inicial* - [cristopherva](https://github.com/cristopherva)

### Expresiones de Gratitud 🎁

* Gracias por la oportunidad espero que llene sus expectativas y trabajar juntos .

---
⌨️ con ❤️ por [CristopherVA](https://github.com/cristopherva) 😊