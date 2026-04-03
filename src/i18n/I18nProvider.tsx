import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import {
  contentLocaleMap,
  localeOptions,
  pageMessages,
  shellMessages,
  type ContentLocale,
  type Locale,
} from "./messages";

const STORAGE_KEY = "navlyn-locale";

interface I18nContextValue {
  locale: Locale;
  contentLocale: ContentLocale;
  setLocale: (locale: Locale) => void;
  shell: (typeof shellMessages)[Locale];
  page: (typeof pageMessages)[ContentLocale];
}

const I18nContext = createContext<I18nContextValue | null>(null);

function getInitialLocale(): Locale {
  if (typeof window === "undefined") {
    return "zh";
  }

  const storedLocale = window.localStorage.getItem(STORAGE_KEY);
  if (storedLocale && localeOptions.some((item) => item.key === storedLocale)) {
    return storedLocale as Locale;
  }

  return "zh";
}

export function I18nProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);
  const contentLocale = contentLocaleMap[locale];

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value: I18nContextValue = {
    locale,
    contentLocale,
    setLocale,
    shell: shellMessages[locale],
    page: pageMessages[contentLocale],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }

  return context;
}
