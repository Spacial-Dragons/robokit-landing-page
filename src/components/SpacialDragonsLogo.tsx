import Image from "next/image";

export const SpacialDragonsLogo = () => {
  return (
    <Image
      src="/spacial-dragons-logo.svg"
      alt="Robokit Logo"
      width={0}
      height={0}
      style={{ width: "40px", height: "auto" }}
      className="invert dark:invert-0"
    />
  );
};
