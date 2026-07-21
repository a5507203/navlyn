const HTTP_PROTOCOLS = new Set(['http:', 'https:']);

export const ARC_GCS_SUPPORT_EMAIL = 'support@navlyn.com';

export function resolveArcGcsDownloadUrl(
  value: string | undefined,
  configName: string,
): string | undefined {
  const candidate = value?.trim();

  if (!candidate) {
    return undefined;
  }

  try {
    const url = new URL(candidate);

    if (HTTP_PROTOCOLS.has(url.protocol)) {
      return url.toString();
    }
  } catch {
    // The configuration error is reported below with the public variable name only.
  }

  console.error(`[ARC GCS] ${configName} must be an absolute HTTP(S) URL.`);
  return undefined;
}

export const arcGcsDownloadUrl = resolveArcGcsDownloadUrl(
  import.meta.env.VITE_ARC_GCS_DOWNLOAD_URL,
  'VITE_ARC_GCS_DOWNLOAD_URL',
);

export const arcGcsManualUrl = resolveArcGcsDownloadUrl(
  import.meta.env.VITE_ARC_GCS_MANUAL_URL,
  'VITE_ARC_GCS_MANUAL_URL',
);
