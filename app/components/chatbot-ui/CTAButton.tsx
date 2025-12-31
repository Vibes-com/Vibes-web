import Link from "next/link";

export default function CTAButton({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <Link href={"/contact-for-digital-requirements"}>
      <button onClick={onClick} className="mt-2 #4e7759 text-white px-4 py-2 rounded-lg">
        {text}
      </button>
    </Link>
  );
}
