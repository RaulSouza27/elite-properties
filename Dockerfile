# --- Stage 1: Build ---
FROM oven/bun:1-alpine AS builder
WORKDIR /app

# Copia arquivos de dependências
COPY package.json bun.lock* ./

# Instala dependências usando o Bun
RUN bun install --frozen-lockfile

# Copia o código da aplicação
COPY . .

# Instrui o Vite/Nitro a gerar a build de servidor Node.js
ENV NITRO_PRESET=node-server
RUN bun run build

# --- Stage 2: Runner ---
FROM oven/bun:1-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Copia os arquivos necessários da build
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.output ./.output

EXPOSE 3000

# Inicia o servidor com o Bun
CMD ["bun", "run", ".output/server/index.mjs"]
