/*
 * @Author: Icon oncwnuEuU001JU72QF0Wv2zwAqd0@git.weixin.qq.com
 * @Date: 2026-03-20 15:31:54
 * @LastEditors: Icon oncwnuEuU001JU72QF0Wv2zwAqd0@git.weixin.qq.com
 * @LastEditTime: 2026-04-03 09:08:26
 * @FilePath: /Navlyn_home/src/pages/ContactPage.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import SiteLayout from '../layouts/SiteLayout';
import { useI18n } from '../i18n/I18nProvider';
import { assetPath } from '../utils/base';
import { getContactApiBaseUrl } from '../config/environment';
import { submitContactInquiry, type ContactInquiryValues } from './contactInquiry';
import { useRef, useState, type FormEvent, type ReactNode } from 'react';
import '../styles/contact.css';

const CONTACT_EMAIL = 'contact@navlyn.com';
type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

interface ContactFieldProps {
  children: ReactNode;
  label: string;
  required?: boolean;
  fullWidth?: boolean;
}

function ContactField({ children, label, required = true, fullWidth = false }: ContactFieldProps) {
  return (
    <label className={`contact-inquiry-field${fullWidth ? ' is-full' : ''}`}>
      <span>
        {label}
        {required ? <em aria-hidden="true">*</em> : null}
      </span>
      {children}
    </label>
  );
}

function readTextField(formData: FormData, field: keyof ContactInquiryValues) {
  const value = formData.get(field);
  return typeof value === 'string' ? value.trim() : '';
}

export default function ContactPage() {
  const { locale, page } = useI18n();
  const copy = page.contact;
  const showContactQr = locale === 'zh';
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const submissionInFlight = useRef(false);

  const handleInquirySubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (submissionInFlight.current || !form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const values: ContactInquiryValues = {
      countryRegion: readTextField(formData, 'countryRegion'),
      firstName: readTextField(formData, 'firstName'),
      lastName: readTextField(formData, 'lastName'),
      email: readTextField(formData, 'email'),
      phone: readTextField(formData, 'phone'),
      organizationType: readTextField(formData, 'organizationType'),
      companyName: readTextField(formData, 'companyName'),
      website: readTextField(formData, 'website'),
      description: readTextField(formData, 'description'),
    };

    submissionInFlight.current = true;
    setSubmissionState('submitting');

    try {
      await submitContactInquiry({ apiBaseUrl: getContactApiBaseUrl(), values });
      form.reset();
      setSubmissionState('success');
    } catch {
      setSubmissionState('error');
    } finally {
      submissionInFlight.current = false;
    }
  };

  return (
    <SiteLayout
      title={copy.seoTitle}
      description={copy.seoDescription}
      contentClassName="contact-page-shell"
    >
      <section className="contact-direct">
        <div className={`contact-direct-grid${showContactQr ? '' : ' is-single-column'}`}>
          <div className="contact-direct-copy">
            <span className="contact-direct-kicker">{copy.panel.kicker}</span>
            <h1 className="contact-direct-title">{copy.heroTitle}</h1>

            {copy.heroDescription ? (
              <div className="contact-direct-cn">
                <p>{copy.heroDescription}</p>
              </div>
            ) : null}

            <div className="contact-direct-en">
              <h2>{copy.panel.sideTitle}</h2>
              <p>{copy.panel.sideDescription}</p>
              <ul>
                <li>
                  <strong>+86 190 1288 5610</strong>
                </li>
                <li>
                  <strong>{CONTACT_EMAIL}</strong>
                </li>
                <li>
                  <strong>{page.common.businessAddress}</strong>
                </li>
              </ul>
            </div>
          </div>

          {showContactQr ? (
            <div className="contact-direct-media">
              <div className="contact-direct-card">
                <img src={assetPath('/media/contact/wechat-qr.png')} alt={copy.panel.sideTitle} />
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="contact-inquiry" aria-labelledby="contact-inquiry-title">
        <div className="contact-inquiry-heading">
          <div>
            <span className="contact-inquiry-kicker">{copy.inquiryForm.kicker}</span>
            <h2 id="contact-inquiry-title">{copy.inquiryForm.title}</h2>
          </div>
          <p>{copy.inquiryForm.description}</p>
        </div>

        <form
          className="contact-inquiry-form"
          onSubmit={handleInquirySubmit}
          aria-busy={submissionState === 'submitting'}
        >
          <ContactField label={copy.inquiryForm.fields.countryRegion}>
            <input
              type="text"
              name="countryRegion"
              autoComplete="country-name"
              maxLength={100}
              required
            />
          </ContactField>

          <ContactField label={copy.inquiryForm.fields.organizationType}>
            <select name="organizationType" defaultValue="" required>
              <option value="" disabled>
                {copy.inquiryForm.selectPlaceholder}
              </option>
              {copy.inquiryForm.organizationOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </ContactField>

          <ContactField label={copy.inquiryForm.fields.firstName}>
            <input type="text" name="firstName" autoComplete="given-name" maxLength={100} required />
          </ContactField>

          <ContactField label={copy.inquiryForm.fields.lastName}>
            <input type="text" name="lastName" autoComplete="family-name" maxLength={100} required />
          </ContactField>

          <ContactField label={copy.inquiryForm.fields.email}>
            <input type="email" name="email" autoComplete="email" maxLength={320} required />
          </ContactField>

          <ContactField label={copy.inquiryForm.fields.phone} required={false}>
            <input type="tel" name="phone" autoComplete="tel" maxLength={50} />
          </ContactField>

          <ContactField label={copy.inquiryForm.fields.companyName} required={false}>
            <input type="text" name="companyName" autoComplete="organization" maxLength={200} />
          </ContactField>

          <ContactField label={copy.inquiryForm.fields.website} required={false}>
            <input
              type="url"
              name="website"
              autoComplete="url"
              placeholder="https://"
              maxLength={2048}
            />
          </ContactField>

          <ContactField label={copy.inquiryForm.fields.description} fullWidth>
            <textarea
              name="description"
              placeholder={copy.inquiryForm.descriptionPlaceholder}
              rows={6}
              maxLength={5000}
              required
            />
          </ContactField>

          <div className="contact-inquiry-actions">
            <div className="contact-inquiry-action-copy" aria-live="polite">
              <p>{copy.inquiryForm.submitNote}</p>
              {submissionState === 'success' ? (
                <p className="contact-inquiry-status is-success" role="status">
                  {copy.inquiryForm.successMessage}
                </p>
              ) : null}
              {submissionState === 'error' ? (
                <p className="contact-inquiry-status is-error" role="alert">
                  {copy.inquiryForm.errorMessage}
                </p>
              ) : null}
            </div>
            <button type="submit" disabled={submissionState === 'submitting'}>
              {submissionState === 'submitting'
                ? copy.inquiryForm.submittingLabel
                : copy.inquiryForm.submitLabel}
            </button>
          </div>
        </form>
      </section>
    </SiteLayout>
  );
}
