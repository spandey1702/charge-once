import Fastify, { type FastifyInstance } from "fastify";

interface HealthResponse {
  status: "ok";
  uptimeSeconds: number;
}

export function buildApp(): FastifyInstance {
  const app = Fastify({ logger: process.env.NODE_ENV !== "test" });

  app.get("/health", async (): Promise<HealthResponse> => {
    return { status: "ok", uptimeSeconds: Math.round(process.uptime()) };
  });

  return app;
}
