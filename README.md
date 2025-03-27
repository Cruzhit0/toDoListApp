
# To Do List APP
##backend

Este es el backend de Un organizador de tiempo lista de tares que permite gestionar tareas y sub tareas. Implementa autenticación básica y sigue las mejores prácticas de desarrollo con Node.js, Express y TypeScript.

## 📌 Tecnologías Utilizadas

- Node.js + TypeScript  
- Express.js  
- Sequelize (ORM para la base de datos)  
- JWT para autenticación  
- PostgreSQL/MySQL (según configuración)  

## 🚀 Instalación y Configuración

1️⃣ Clonar el repositorio  

```sh
git clone  https://github.com/Cruzhit0/toDoListApp.git
cd toDoListAPP
```
2️⃣ Instalar dependencias  
```console
npm install  
```
3️⃣ Configurar variables de entorno  
Crea un archivo .env en la raíz del proyecto y configura las variables necesarias:  
``` text
PORT=3000  
DB_HOST=localhost  
DB_USER=tu_usuario  
DB_PASSWORD=tu_contraseña  
DB_NAME=joyeria  
JWT_SECRET=clave_secreta  
```
4️⃣ Configurar la base de datos  
Si estás usando PostgreSQL o MySQL, asegúrate de que la base de datos esté creada y accesible. Luego, ejecuta las migraciones:  
```
npx sequelize-cli db:migrate  
npx sequelize-cli db:seed:all # Opcional, para datos iniciales  
```
## 📌 Scripts Disponibles

### 🔹 Modo Desarrollo  
Ejecuta el servidor en modo desarrollo con recarga automática:  
```
npm start  
```
### 🔹 Compilar TypeScript  
Compila el código TypeScript en JavaScript en la carpeta dist/:  
```
npm run build  
```
# Endpoints RESTful

## 🔹 Autenticación

| Método | Ruta                | Acción                     |
|--------|---------------------|----------------------------|
| POST   | `/api/auth/login`   | Iniciar sesión (JWT)       |
| POST   | `/api/auth/signup`  | Registrar nuevo usuario    |

## 🔹 Tareas (Recurso Padre)

| Método | Ruta               | Acción                     |
|--------|--------------------|----------------------------|
| GET    | `/api/tasks`       | Listar todas las tareas    |
| POST   | `/api/tasks`       | Crear nueva tarea          |
| GET    | `/api/tasks/:id`   | Obtener tarea por ID       |
| PUT    | `/api/tasks/:id`   | Actualizar tarea           |
| DELETE | `/api/tasks/:id`   | Eliminar tarea             |

## 🔹 Subtareas (Recurso Hijo)

| Método | Ruta                     | Acción                          |
|--------|--------------------------|---------------------------------|
| GET    | `/api/tasks/:id/subtasks`| Listar subtareas de una tarea   |
| POST   | `/api/subtasks`          | Crear subtarea                  |
| PATCH  | `/api/subtasks/:id`      | Marcar como completada          |
| DELETE | `/api/subtasks/:id`      | Eliminar subtarea               |

## 📌 Versionamiento

Este proyecto utiliza Git con las siguientes ramas:

- **main** → Código estable en producción  
- **develop** → Desarrollo activo  
- **feature/nombre-feature** → Funcionalidades nuevas  
=
## 📌 Contribuciones  
Si deseas contribuir, crea un fork del proyecto, trabaja en una rama separada y envía un Pull Request.
