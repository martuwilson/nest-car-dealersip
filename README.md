
# 🚗 Car Dealership API

#### 🏷️ Marcas
- **Nombre**: Debe ser string con mínimo 3 caracteres
- **UUID**: Debe ser un UUID ## 🚀 Próximas Funcionalidades

- 🔗 **Relaciones entre entidades** (Cars ↔ Brands)
- 🔐 **Autenticación y autorización** (JWT)
- 💾 **Integración con base de datos** (PostgreSQL/MongoDB)
- 📸 **Carga de imágenes** de vehículos
- 🔍 **Filtros avanzados** de búsqueda y paginación
- 📊 **Dashboard de estadísticas** y reportes
- 🌱 **Seed automático** en primera ejecución
- 🔄 **Versionado de API** (v1, v2)
- 📚 **Documentación con Swagger/OpenAPI**
- 🧪 **Testing más completo** (unit + e2e)
- 🌐 **Internacionalización** (i18n)
- 📱 **API Rate Limiting** y throttling parámetros

#### 🌱 Seed
- **Nombre**: No aplica (endpoint de utilidad)
- **Endpoint**: Ejecuta automáticamente el poblado de datosET | `/brands` | Obtener todas las marcas |
| GET | `/brands/:uuid` | Obtener marca por UUID |
| POST | `/brands` | Crear nueva marca (con validación) |
| PATCH | `/brands/:uuid` | Actualizar parcialmente marca |
| DELETE | `/brands/:uuid` | Eliminar marca |

### 🌱 Seed (Datos Iniciales)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/seed` | Poblar base de datos con datos iniciales |cluye:
- **ID UUID** único y seguro
- **Nombre** de la marca - mínimo 3 caracteres
- **Fecha de creación** (timestamp)
- **Fecha de actualización** (timestamp, opcional)

### 🌱 Sistema de Seed

El sistema incluye:
- **Datos iniciales** de marcas (Toyota, Honda, Ford, Chevrolet, Nissan)
- **Datos iniciales** de vehículos con diferentes marcas y modelos
- **Reinicio completo** de datos para desarrollo
- **Configuración automática** con UUIDs y timestampssarrollada con **NestJS** para la gestión completa de un concesionario de automóviles, incluyendo inventario de vehículos y administración de marcas.

## 📋 Descripción

Esta aplicación proporciona una API completa para gestionar tanto el inventario de vehículos como el catálogo de marcas de un concesionario. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre vehículos y marcas de manera independiente.

### ✨ Características

#### 🚙 Gestión de Vehículos
- 🔍 **Consultar todos los vehículos** del inventario
- 🎯 **Buscar vehículo específico** por UUID
- ➕ **Agregar nuevos vehículos** con validación de datos
- ✏️ **Actualizar parcialmente** información de vehículos existentes
- 🗑️ **Eliminar vehículos** del inventario

#### 🏷️ Gestión de Marcas
- 📋 **Consultar todas las marcas** disponibles
- 🎯 **Buscar marca específica** por UUID
- ➕ **Crear nuevas marcas** con validación
- ✏️ **Actualizar información** de marcas existentes
- �️ **Eliminar marcas** del sistema

#### 🌱 Sistema de Seed
- 🎯 **Poblar base de datos** con datos iniciales
- 🔄 **Reiniciar datos** de desarrollo
- 🚀 **Configuración rápida** del entorno

#### 🛡️ Características Técnicas
- �🔒 **Validación robusta** con DTOs y class-validator
- 🆔 **Identificadores UUID** para mayor seguridad
- 🛡️ **Manejo de errores** con excepciones HTTP apropiadas
- 📝 **Documentación de tipos** con TypeScript interfaces
- ⏰ **Timestamps** de creación y actualización

### 🚙 Datos del Vehículo

Cada vehículo incluye:
- **ID UUID** único y seguro
- **Marca** (Toyota, Honda, Ford, etc.) - mínimo 3 caracteres
- **Modelo** (Corolla, Civic, Focus, etc.) - mínimo 3 caracteres
- **Año** de fabricación - debe ser un número válido

### � Sistema de Seed

El sistema incluye:
- **Datos iniciales** de marcas (Toyota, Honda, Ford, Chevrolet, Nissan)
- **Datos iniciales** de vehículos con diferentes marcas y modelos
- **Reinicio completo** de datos para desarrollo
- **Configuración automática** con UUIDs y timestamps

## 🚀 API Endpoints

### 🚙 Vehículos

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/cars` | Obtener todos los vehículos |
| GET | `/cars/:uuid` | Obtener vehículo por UUID |
| POST | `/cars` | Crear nuevo vehículo (con validación) |
| PATCH | `/cars/:uuid` | Actualizar parcialmente vehículo |
| DELETE | `/cars/:uuid` | Eliminar vehículo |

### � Seed (Datos Iniciales)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/seed` | Poblar base de datos con datos iniciales |

### 📝 Ejemplos de Uso

#### 🚙 Operaciones con Vehículos

```bash
# Obtener todos los autos
curl http://localhost:3000/cars

# Obtener auto específico por UUID
curl http://localhost:3000/cars/550e8400-e29b-41d4-a716-446655440000

# Crear nuevo auto (con validación)
curl -X POST http://localhost:3000/cars \
  -H "Content-Type: application/json" \
  -d '{"brand":"BMW","model":"X3","year":2023}'

# Actualizar parcialmente un auto
curl -X PATCH http://localhost:3000/cars/550e8400-e29b-41d4-a716-446655440000 \
  -H "Content-Type: application/json" \
  -d '{"year":2024}'

# Eliminar un auto
curl -X DELETE http://localhost:3000/cars/550e8400-e29b-41d4-a716-446655440000
```

#### 🏷️ Operaciones con Marcas

```bash
# Obtener todas las marcas
curl http://localhost:3000/brands

# Obtener marca específica por UUID
curl http://localhost:3000/brands/550e8400-e29b-41d4-a716-446655440000

# Crear nueva marca
curl -X POST http://localhost:3000/brands \
  -H "Content-Type: application/json" \
  -d '{"name":"Audi"}'

# Actualizar marca
curl -X PATCH http://localhost:3000/brands/550e8400-e29b-41d4-a716-446655440000 \
  -H "Content-Type: application/json" \
  -d '{"name":"Audi AG"}'

# Eliminar marca
curl -X DELETE http://localhost:3000/brands/550e8400-e29b-41d4-a716-446655440000
```

#### 🌱 Operaciones con Seed

```bash
# Poblar base de datos con datos iniciales
curl http://localhost:3000/seed

# Respuesta exitosa
{
  "message": "Seed executed successfully"
}
```

> **💡 Tip:** Ejecuta el seed después de iniciar la aplicación para tener datos de prueba listos.

### ⚠️ Validaciones Automáticas

La API valida automáticamente:

#### 🚙 Vehículos
- **Marca**: Debe ser string con mínimo 3 caracteres
- **Modelo**: Debe ser string con mínimo 3 caracteres  
- **Año**: Debe ser un número válido
- **UUID**: Debe ser un UUID válido en los parámetros

#### � Seed
- **Nombre**: No aplica (endpoint de utilidad)
- **Endpoint**: Ejecuta automáticamente el poblado de datos

**Ejemplo de error de validación:**
```json
{
  "statusCode": 400,
  "message": [
    "Name must be at least 3 characters long"
  ],
  "error": "Bad Request"
}
```

## ⚙️ Configuración del Proyecto

```bash
$ npm install
```

## 🔧 Compilar y Ejecutar el Proyecto

```bash
# Modo desarrollo (recomendado para desarrollo)
$ npm run start:dev

# Modo desarrollo estándar
$ npm run start

# Modo producción
$ npm run start:prod
```

🌐 **La API estará disponible en:** `http://localhost:3000`

> **🌱 Recomendación:** Ejecuta `http://localhost:3000/seed` después de iniciar la aplicación para poblar con datos iniciales.

## 🧪 Ejecutar Pruebas

```bash
# Pruebas unitarias
$ npm run test

# Pruebas end-to-end
$ npm run test:e2e

# Cobertura de pruebas
$ npm run test:cov
```

## 🏗️ Arquitectura del Proyecto

```
src/
├── cars/                     # Módulo de vehículos
│   ├── dto/                  # Data Transfer Objects
│   │   ├── create-car.dto.ts     # DTO para crear vehículo
│   │   ├── update-car.dto.ts     # DTO para actualizar vehículo
│   │   └── index.ts              # Barrel exports
│   ├── interfaces/           # Interfaces TypeScript
│   │   └── car.interface.ts      # Interface Car
│   ├── cars.controller.ts        # Controlador REST
│   ├── cars.service.ts           # Lógica de negocio
│   └── cars.module.ts            # Módulo de NestJS
├── brands/                   # Módulo de marcas
│   ├── dto/                  # Data Transfer Objects
│   │   ├── create-brand.dto.ts   # DTO para crear marca
│   │   └── update-brand.dto.ts   # DTO para actualizar marca
│   ├── entities/             # Entidades
│   │   └── brand.entity.ts       # Entidad Brand
│   ├── brands.controller.ts      # Controlador REST
│   ├── brands.service.ts         # Lógica de negocio
│   └── brands.module.ts          # Módulo de NestJS
├── seed/                     # Módulo de seed
│   ├── data/                 # Datos iniciales
│   │   ├── cars.seed.ts          # Datos seed para vehículos
│   │   └── brands.seed.ts        # Datos seed para marcas
│   ├── seed.controller.ts        # Controlador de seed
│   ├── seed.service.ts           # Servicio de seed
│   └── seed.module.ts            # Módulo de seed
├── app.module.ts             # Módulo principal
└── main.ts                   # Punto de entrada
```

## 🛠️ Tecnologías Utilizadas

- **[NestJS](https://nestjs.com/)** - Framework de Node.js
- **[TypeScript](https://www.typescriptlang.org/)** - Lenguaje tipado
- **[Class-validator](https://github.com/typestack/class-validator)** - Validación de DTOs
- **[Class-transformer](https://github.com/typestack/class-transformer)** - Transformación de objetos
- **[UUID](https://github.com/uuidjs/uuid)** - Generación de identificadores únicos
- **[Jest](https://jestjs.io/)** - Framework de testing
- **[ESLint](https://eslint.org/)** - Linter de código

## 🚀 Próximas Funcionalidades

- � **Relaciones entre entidades** (Cars ↔ Brands)
- �🔐 **Autenticación y autorización** (JWT)
- 💾 **Integración con base de datos** (PostgreSQL/MongoDB)
- 📸 **Carga de imágenes** de vehículos
- 🔍 **Filtros avanzados** de búsqueda y paginación
- 📊 **Dashboard de estadísticas** y reportes
- 🔄 **Versionado de API** (v1, v2)
- 📚 **Documentación con Swagger/OpenAPI**
- 🧪 **Testing más completo** (unit + e2e)
- 🌐 **Internacionalización** (i18n)
- 📱 **API Rate Limiting** y throttling

## 🤝 Contribuir

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'feat: agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.

---

⭐ **¡No olvides dar una estrella al proyecto si te resultó útil!**
