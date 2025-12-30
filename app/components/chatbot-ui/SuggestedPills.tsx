"use client";

type SuggestedPillsProps = {
  pills: string[];
  onSelect: (q: string) => void;
};

export default function SuggestedPills({ pills, onSelect }: SuggestedPillsProps) {
  if (!pills || pills.length === 0) return null;

  return (
    <div className="px-3 py-2 flex gap-2 overflow-x-auto bg-gray-100 border-t">
      {pills.map((pill, i) => (
        <button
          key={i}
          onClick={() => onSelect(pill)}
          className="text-sm bg-white border px-3 py-1 rounded-full whitespace-nowrap rounded-full hover:bg-black hover:text-white transition"
        >
          {pill}
        </button>
      ))}
    </div>
  );
}
