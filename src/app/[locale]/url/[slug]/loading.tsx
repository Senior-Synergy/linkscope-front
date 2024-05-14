import Spinner from "@/components/common/Spinner";
import { getTranslations } from "next-intl/server";

async function loading() {
  const t = await getTranslations("Loading");

  return <Spinner description={t("url-info")} />;
}

export default loading;
