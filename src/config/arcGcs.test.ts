import { describe, expect, it, vi } from 'vitest';
import { resolveArcGcsDownloadUrl } from './arcGcs';

describe('ARC GCS download configuration', () => {
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
});
