import { useTranslations } from "next-intl";
import Link from "next/link";

const FooterNavigaton = () => {
  const t = useTranslations("Footer");

  return (
    <footer>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        <li>
          <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
            {t("Footer6")}
          </div>
          <ul role="list" className="mt-4 text-sm text-neutral-700">
            <li className="mt-4">
              <Link href="/about" className="transition hover:text-neutral-950">
                {t("Footer3")}
              </Link>
            </li>
            <li className="mt-4">
              <Link
                href="/process"
                className="transition hover:text-neutral-950">
                {t("Footer4")}
              </Link>
            </li>
            <li className="mt-4">
              <Link
                href="/contact"
                className="transition hover:text-neutral-950">
                {t("Footer5")}
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default FooterNavigaton;
