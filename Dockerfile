# Install dependencies only when needed
FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY /code-editor/package.json ./package.json
RUN npm install

# Rebuild the source code only when needed
FROM node:16-alpine AS builder

WORKDIR /app

COPY --from=deps /code-editor/node_modules ./node_modules

COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodegroup
RUN adduser --system --uid 1001 nodeuser

COPY --from=builder /code-editor/public ./public
COPY --from=builder /code-editor/package.json ./package.json

COPY --from=builder --chown=nodeuser:nodegroup /code-editor/.next/standalone ./
COPY --from=builder --chown=nodeuser:nodegroup /code-editor/.next/static ./.next/static

USER nodeuser

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "run", "start"]