
# 🚗 Car Dealership API

Una API REST moderna desarrollada con **NestJS** para la gestión de inventario de un concesionario de automóviles.

## 📋 Descripción

Esta aplicación proporciona una API completa para gestionar el inventario de vehículos de un concesionario. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre el catálogo de automóviles disponibles.

### ✨ Características

- 🔍 **Consultar todos los vehículos** del inventario
- 🎯 **Buscar vehículo específico** por ID
- ➕ **Agregar nuevos vehículos** al inventario
- ✏️ **Actualizar información** de vehículos existentes
- 🗑️ **Eliminar vehículos** del inventario
- ✅ **Validación automática** de parámetros con pipes
- 🛡️ **Manejo de errores** con excepciones HTTP apropiadas

### 🚙 Datos del Vehículo

Cada vehículo incluye:
- **ID único** del vehículo
- **Marca** (Toyota, Honda, Ford, etc.)
- **Modelo** (Corolla, Civic, Focus, etc.)
- **Año** de fabricación

## 🚀 API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/cars` | Obtener todos los vehículos |
| GET | `/cars/:id` | Obtener vehículo por ID |
| POST | `/cars` | Crear nuevo vehículo |
| PUT | `/cars/:id` | Actualizar vehículo |
| DELETE | `/cars/:id` | Eliminar vehículo |

### 📝 Ejemplos de Uso

```bash
# Obtener todos los autos
curl http://localhost:3000/cars

# Obtener auto específico
curl http://localhost:3000/cars/1

# Crear nuevo auto
curl -X POST http://localhost:3000/cars \
  -H "Content-Type: application/json" \
  -d '{"make":"BMW","model":"X3","year":2023}'
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
├── cars/                 # Módulo de vehículos
│   ├── cars.controller.ts    # Controlador REST
│   ├── cars.service.ts       # Lógica de negocio
│   └── cars.module.ts        # Módulo de NestJS
├── app.module.ts         # Módulo principal
└── main.ts              # Punto de entrada
```

## 🛠️ Tecnologías Utilizadas

- **[NestJS](https://nestjs.com/)** - Framework de Node.js
- **[TypeScript](https://www.typescriptlang.org/)** - Lenguaje tipado
- **[Jest](https://jestjs.io/)** - Framework de testing
- **[ESLint](https://eslint.org/)** - Linter de código

## 🚀 Próximas Funcionalidades

- 🔐 Autenticación y autorización
- 💾 Integración con base de datos
- 📸 Carga de imágenes de vehículos
- 🔍 Filtros avanzados de búsqueda
- 📊 Dashboard de estadísticas

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
