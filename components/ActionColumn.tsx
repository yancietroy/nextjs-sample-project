import Image from "next/image";

export default function ActionColumn() {
  return (
    <td>
      <Image src="/circle-check.svg" alt="Approve" width={24} height={24} />
      <Image
        src="/red-flag.svg"
        alt="Flag"
        width={24}
        height={24}
        className="flagIcon"
      />
    </td>
  );
}
