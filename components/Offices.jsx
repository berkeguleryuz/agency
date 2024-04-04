import clsx from "clsx";
import { useTranslations } from "next-intl";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600",
      )}>
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  const t = useTranslations("Offices");
  return (
    <ul role="list" {...props}>
      <li>
        <Office name={t("Offices0")} invert={invert}>
          <br />
          Izmir
        </Office>
      </li>
      <li>
        <Office name={t("Offices1")} invert={invert}>
          <br />
          Berlin
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
