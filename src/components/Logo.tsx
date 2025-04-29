import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      src="/logo.svg"
      alt="Robokit Logo"
      width={0}
      height={0}
      style={{ width: "40px", height: "auto" }}
    />
  );
};
