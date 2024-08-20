import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ invert, href, className, children, ...props }) => {
  className = clsx(
    className,
    invert ? "text-white hover:text-blue" : "text-black hover:text-blue-600",
  );

  const logoSrc = invert ? "/logow.png" : "/logo.png"; 
  const inner = (
    <span className="relative">
      <Image src={logoSrc} alt="Logo" priority className="hover:scale-105 transition-all duration-300" unoptimized width={150} height={150} />
      {children}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }

  return (
    <h2
      className={clsx(
        "cursor-pointer text-2xl font-semibold duration-300",
        className,
      )}
      {...props}>
      {inner}
    </h2>
  );
};

export default Logo;
