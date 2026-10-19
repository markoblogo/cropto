import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";

export function FooterBrands({ children }: { children: ReactNode }) {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-[64px_minmax(0,1fr)] items-start gap-x-6 gap-y-3 sm:grid-cols-[64px_minmax(0,1fr)_120px] sm:items-center">
      <a href="https://ami.1d3x.com/" target="_blank" rel="noopener noreferrer" aria-label="AMI" className="w-fit rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
        <img src="/brand/ami-mark.png" alt="AMI" width={64} height={64} loading="lazy" decoding="async" />
      </a>
      <div className="min-w-0">{children}</div>
      <a href="https://abvx.xyz/" target="_blank" rel="noopener noreferrer" className="col-start-2 flex w-fit flex-col items-center gap-[5px] justify-self-end rounded text-[0.78rem] leading-[1.35] text-foreground/75 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 sm:col-start-3">
        <picture className="block h-11 w-11 overflow-hidden rounded bg-[#f8f7f4]">
          <source srcSet="/brand/abvx-mark.avif" type="image/avif" />
          <img src="/brand/abvx-mark.png" alt="" width={44} height={44} loading="lazy" decoding="async" />
        </picture>
        <span>{t("footer.createdBy")}</span>
      </a>
    </div>
  );
}
