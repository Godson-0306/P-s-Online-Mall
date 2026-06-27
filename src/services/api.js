import axios from 'axios';
import { brands, categories, heroSlides, products } from '../data/fallbackData.js';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 8000,
});

const hasBackendUrl = Boolean(import.meta.env.VITE_API_URL);

async function withFallback(request, fallback, validate = Boolean) {
  if (!hasBackendUrl) {
    return fallback;
  }

  try {
    const { data } = await request();
    const payload = data?.data ?? data;
    return validate(payload) ? payload : fallback;
  } catch {
    return fallback;
  }
}

const isArray = (value) => Array.isArray(value);

export function getHeroSlides() {
  return withFallback(() => api.get('/banners'), heroSlides, isArray);
}

export function getCategories() {
  return withFallback(() => api.get('/categories'), categories, isArray);
}

export function getProducts() {
  return withFallback(() => api.get('/products/featured'), products, isArray);
}

export function getBrands() {
  return withFallback(() => api.get('/brands'), brands, isArray);
}
