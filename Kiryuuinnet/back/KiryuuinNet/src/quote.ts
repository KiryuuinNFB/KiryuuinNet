import { Elysia } from 'elysia';

export const quote = new Elysia()
    .get('/quote', () => 'hi')