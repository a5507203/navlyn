/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ARC_GCS_DOWNLOAD_URL?: string;
  readonly VITE_ARC_GCS_WINDOWS_DOWNLOAD_URL?: string;
  readonly VITE_ARC_GCS_ANDROID_DOWNLOAD_URL?: string;
  readonly VITE_ARC_GCS_MANUAL_URL?: string;
  readonly VITE_CONTACT_API_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
