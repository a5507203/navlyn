import { Link, useLocation } from 'react-router-dom';
import type { SubpageLinkItem } from '../data/subpages';
import { useI18n } from '../i18n/I18nProvider';

interface SubpageTabNavProps {
  items: readonly SubpageLinkItem[];
}

export default function SubpageTabNav({ items }: SubpageTabNavProps) {
  const location = useLocation();
  const { shell } = useI18n();

  return (
    <nav className="doc-subpage-tabs" aria-label={shell.accessibility.subpageNav}>
      {items.map((item) => {
        const isActive = location.pathname === item.path;

        return (
          <Link
            key={item.path}
            to={item.path}
            className={`doc-subpage-tab${isActive ? ' is-active' : ''}`}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}
