/**
 * apiClient.js
 * ─────────────────────────────────────────────
 * Central HTTP client for all API calls.
 * Supports: GET, POST, PUT, DELETE
 * Features: auth token injection, error handling, base URL from env
 *
 * Usage:
 *   import { apiClient } from '@/services';
 *   const data = await apiClient.get('/users');
 *   const result = await apiClient.post('/login', { email, password });
 */

class ApiClient {
  constructor(baseUrl = '/api') {
    this.baseUrl = baseUrl;
  }

  // Attach common headers (auth token, content-type)
  _buildHeaders() {
    const headers = {
      'Content-Type': 'application/json',
      'Accept':       'application/json',
    };
    const token = localStorage.getItem('auth_token');
    if (token) headers['Authorization'] = `Bearer ${token}`;
    return headers;
  }

  // Handle response — throw on error, return JSON
  async _handleResponse(response) {
    if (!response.ok) {
      if (response.status === 401) {
        console.warn('Session expired. Logging out...');
        localStorage.removeItem('auth_token');
        // You can redirect to login: window.location.href = '/login';
      }
      const errorText = await response.text();
      throw new Error(errorText || `HTTP Error: ${response.status}`);
    }
    if (response.status === 204) return {};   // No Content
    return response.json();
  }

  // Core request method
  async request(path, options = {}) {
    const { params, ...fetchOptions } = options;
    let url = `${this.baseUrl}${path}`;

    if (params) {
      url += '?' + new URLSearchParams(params).toString();
    }

    try {
      const response = await fetch(url, {
        ...fetchOptions,
        headers: { ...this._buildHeaders(), ...(fetchOptions.headers || {}) },
      });
      return await this._handleResponse(response);
    } catch (err) {
      console.error(`API request failed [${url}]:`, err);
      throw err;
    }
  }

  get(path, options = {})             { return this.request(path, { ...options, method: 'GET' }); }
  post(path, body, options = {})      { return this.request(path, { ...options, method: 'POST',   body: JSON.stringify(body) }); }
  put(path, body, options = {})       { return this.request(path, { ...options, method: 'PUT',    body: JSON.stringify(body) }); }
  patch(path, body, options = {})     { return this.request(path, { ...options, method: 'PATCH',  body: JSON.stringify(body) }); }
  delete(path, options = {})          { return this.request(path, { ...options, method: 'DELETE' }); }
}

// Single shared instance — use this everywhere
export const apiClient = new ApiClient(import.meta.env.VITE_API_BASE_URL || '/api');
