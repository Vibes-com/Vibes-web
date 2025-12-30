export default function CTAButton({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
      {text}
    </button>
  );
}
