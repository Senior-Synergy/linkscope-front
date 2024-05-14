import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="text-gray-500 text-sm mt-8">
      <p>
        <span className="font-semibold">{t("linkscope")}</span> | {t("title")}
      </p>
    </footer>
  );
}

export default Footer;
