export function getContactApiBaseUrl() {
  return import.meta.env.VITE_CONTACT_API_BASE_URL?.trim() ?? '';
}
