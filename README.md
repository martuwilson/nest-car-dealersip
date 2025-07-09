
# 🚗 Car Dealership API

Una API REST moderna desarrollada con **NestJS** para la gestión de inventario de un concesionario de automóviles.

## 📋 Descripción

Esta aplicación proporciona una API completa para gestionar el inventario de vehículos de un concesionario. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre el catálogo de automóviles disponibles.

### ✨ Características

- 🔍 **Consultar todos los vehículos** del inventario
- 🎯 **Buscar vehículo específico** por UUID
- ➕ **Agregar nuevos vehículos** con validación de datos
- ✏️ **Actualizar parcialmente** información de vehículos existentes
- 🗑️ **Eliminar vehículos** del inventario
- 🔒 **Validación robusta** con DTOs y class-validator
- 🆔 **Identificadores UUID** para mayor seguridad
- 🛡️ **Manejo de errores** con excepciones HTTP apropiadas
- 📝 **Documentación de tipos** con TypeScript interfaces

### 🚙 Datos del Vehículo

Cada vehículo incluye:
- **ID UUID** único y seguro
- **Marca** (Toyota, Honda, Ford, etc.) - mínimo 3 caracteres
- **Modelo** (Corolla, Civic, Focus, etc.) - mínimo 3 caracteres
- **Año** de fabricación - debe ser un número válido

## 🚀 API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/cars` | Obtener todos los vehículos |
| GET | `/cars/:uuid` | Obtener vehículo por UUID |
| POST | `/cars` | Crear nuevo vehículo (con validación) |
| PATCH | `/cars/:uuid` | Actualizar parcialmente vehículo |
| DELETE | `/cars/:uuid` | Eliminar vehículo |

### 📝 Ejemplos de Uso

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

### ⚠️ Validaciones Automáticas

La API valida automáticamente:
- **Marca**: Debe ser string con mínimo 3 caracteres
- **Modelo**: Debe ser string con mínimo 3 caracteres  
- **Año**: Debe ser un número válido
- **UUID**: Debe ser un UUID válido en los parámetros

**Ejemplo de error de validación:**
```json
{
  "statusCode": 400,
  "message": [
    "Brand must be at least 3 characters long",
    "Model must be a string"
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

- 🔐 Autenticación y autorización
- 💾 Integración con base de datos (PostgreSQL/MongoDB)
- 📸 Carga de imágenes de vehículos
- 🔍 Filtros avanzados de búsqueda y paginación
- 📊 Dashboard de estadísticas
- 🔄 Versionado de API (v1, v2)
- 📚 Documentación con Swagger/OpenAPI
- 🧪 Testing más completo (unit + e2e)

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
