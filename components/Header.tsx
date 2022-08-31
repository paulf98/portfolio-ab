import Link from "next/link";
import { FaArrowCircleLeft } from "react-icons/fa";

export default function Header() {
  return (
    <div className="w-full py-4 bg-black flex justify-start px-4">
      <Link href="/">
        <FaArrowCircleLeft className="shrink-0 mr-4 text-white" size={"2em"} />
      </Link>
    </div>
  );
}
