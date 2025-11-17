# frontend/Dockerfile - SSR 방식 (Multi-stage build)
FROM node:20-alpine AS builder

WORKDIR /app

# 패키지 설치
COPY package*.json ./
RUN npm ci

# 소스 코드 복사
COPY . .

# Next.js 빌드 (SSR 방식)
RUN npm run build


# ----------------------
# 2단계: 프로덕션 런타임
# ----------------------
FROM node:20-alpine

WORKDIR /app

# Node 환경 설정
ENV NODE_ENV=production

# 필요한 파일만 복사 (최소 용량)
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.mjs ./next.config.mjs

# 포트 설정
EXPOSE 3000

# 헬스체크 추가
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Next.js SSR 프로덕션 서버 실행
CMD ["npm", "start"]
