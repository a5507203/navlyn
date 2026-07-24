import { describe, expect, it, vi } from 'vitest';
import {
  ARC_GCS_DOWNLOAD_PAGE_PATH,
  ARC_GCS_DOWNLOAD_VERSION,
  resolveArcGcsDownloadUrl,
  resolveArcGcsDownloadUrls,
} from './arcGcs';

describe('ARC GCS download configuration', () => {
  it('exposes one canonical download route and version', () => {
    expect(ARC_GCS_DOWNLOAD_PAGE_PATH).toBe('/downloads/arc-gcs');
    expect(ARC_GCS_DOWNLOAD_VERSION).toBe('v1.0.0');
  });

  it('returns undefined when a download URL has not been configured', () => {
    expect(resolveArcGcsDownloadUrl(undefined, 'TEST_URL')).toBeUndefined();
    expect(resolveArcGcsDownloadUrl('   ', 'TEST_URL')).toBeUndefined();
  });

  it('accepts and normalizes absolute HTTP and HTTPS URLs', () => {
    expect(resolveArcGcsDownloadUrl(' https://downloads.example.com/arc-gcs ', 'TEST_URL'))
      .toBe('https://downloads.example.com/arc-gcs');
    expect(resolveArcGcsDownloadUrl('http://downloads.example.com/manual.pdf', 'TEST_URL'))
      .toBe('http://downloads.example.com/manual.pdf');
  });

  it('rejects invalid or unsafe download URL protocols with an explicit error', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => undefined);

    expect(resolveArcGcsDownloadUrl('javascript:alert(1)', 'TEST_URL')).toBeUndefined();
    expect(resolveArcGcsDownloadUrl('not a url', 'TEST_URL')).toBeUndefined();
    expect(errorSpy).toHaveBeenCalledTimes(2);
    expect(errorSpy).toHaveBeenCalledWith(
      '[ARC GCS] TEST_URL must be an absolute HTTP(S) URL.',
    );

    errorSpy.mockRestore();
  });

  it('resolves each platform independently', () => {
    expect(
      resolveArcGcsDownloadUrls({
        windows: 'https://downloads.example.com/arc-gcs/windows.exe',
        android: 'https://downloads.example.com/arc-gcs/android.apk',
      }),
    ).toEqual({
      windows: 'https://downloads.example.com/arc-gcs/windows.exe',
      android: 'https://downloads.example.com/arc-gcs/android.apk',
    });
  });
});
