# Strapi Backend

A headless CMS backend built with **Strapi 5** that powers a blog with authors, categories, articles and site-wide settings. It is designed to pair with the [Next.js frontend](https://github.com/Ro-hit-Sonar/strapi-frontend).

![Strapi](https://img.shields.io/badge/Strapi_5-4945FF?style=flat&logo=strapi&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat&logo=sqlite&logoColor=white)

## Content model

| Content type | Fields |
|---|---|
| **Article** | title, description, slug, cover, author, category, content blocks |
| **Author** | name, avatar, email, articles |
| **Category** | name, slug, description, articles |
| **Global** | site name, favicon, site description, default SEO |
| **About** | title, content blocks |

Reusable components cover rich text, media, quotes, sliders and SEO.

## Getting started

Requires Node.js 18 to 22.

```bash
git clone https://github.com/Ro-hit-Sonar/strapi-backend.git
cd strapi-backend
npm install
cp .env.example .env
```

Fill in the secrets in `.env` (`APP_KEYS`, `API_TOKEN_SALT`, `ADMIN_JWT_SECRET`, `TRANSFER_TOKEN_SALT`, `JWT_SECRET`, `ENCRYPTION_KEY`) with long random values, then:

```bash
npm run develop
```

The admin panel is at [http://localhost:1337/admin](http://localhost:1337/admin). On first run you will be asked to create an admin user.

To load example content:

```bash
npm run seed:example
```

## Database

SQLite is used by default for local development. For production, set `DATABASE_CLIENT=postgres` and provide your PostgreSQL connection settings in the environment (see `config/database.ts`).

## Scripts

| Command | What it does |
|---|---|
| `npm run develop` | Start Strapi with auto-reload |
| `npm run start` | Start Strapi without auto-reload |
| `npm run build` | Build the admin panel |
| `npm run seed:example` | Seed example data |

## Learn more

- [Strapi documentation](https://docs.strapi.io)

## Author

Built by [Rohit Sonar](https://github.com/Ro-hit-Sonar).
