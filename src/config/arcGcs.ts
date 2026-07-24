const HTTP_PROTOCOLS = new Set(['http:', 'https:']);

export const ARC_GCS_SUPPORT_EMAIL = 'support@navlyn.com';
export const ARC_GCS_DOWNLOAD_PAGE_PATH = '/downloads/arc-gcs';
export const ARC_GCS_DOWNLOAD_VERSION = 'v1.0.0';

export type ArcGcsDownloadPlatform = 'windows' | 'android';
export type ArcGcsDownloadUrls = Record<
  ArcGcsDownloadPlatform,
  string | undefined
>;

interface ArcGcsDownloadConfigValues {
  windows?: string;
  android?: string;
}

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

export function resolveArcGcsDownloadUrls(
  values: ArcGcsDownloadConfigValues,
): ArcGcsDownloadUrls {
  return {
    windows: resolveArcGcsDownloadUrl(
      values.windows,
      'VITE_ARC_GCS_WINDOWS_DOWNLOAD_URL',
    ),
    android: resolveArcGcsDownloadUrl(
      values.android,
      'VITE_ARC_GCS_ANDROID_DOWNLOAD_URL',
    ),
  };
}

/**
 * @deprecated The product page now links to ARC_GCS_DOWNLOAD_PAGE_PATH.
 * Keep this export temporarily so existing deployment configuration can be
 * removed without an abrupt public configuration contract break.
 */
export const arcGcsDownloadUrl = resolveArcGcsDownloadUrl(
  import.meta.env.VITE_ARC_GCS_DOWNLOAD_URL,
  'VITE_ARC_GCS_DOWNLOAD_URL',
);

export const arcGcsDownloadUrls = resolveArcGcsDownloadUrls({
  windows: import.meta.env.VITE_ARC_GCS_WINDOWS_DOWNLOAD_URL,
  android: import.meta.env.VITE_ARC_GCS_ANDROID_DOWNLOAD_URL,
});

export const arcGcsManualUrl = resolveArcGcsDownloadUrl(
  import.meta.env.VITE_ARC_GCS_MANUAL_URL,
  'VITE_ARC_GCS_MANUAL_URL',
);
