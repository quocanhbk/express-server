# Express Server

## Prerequisites

- Node.js (v14 or higher recommended)
- Yarn package manager
- TypeScript

## Installation

1. Clone the repository:

```bash
git clone https://github.com/quocanhbk/express-server
cd express-server
```

2. Install dependencies:

```bash
yarn install
```

3. Run docker compose to start the database:

```bash
docker compose up -d
```

4. Run database migrations:

```bash
yarn migrate
```

## Development:

To start the server:

```bash
ts-node index.ts
```
