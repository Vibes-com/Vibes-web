"use client";

export default function ContactForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  return (
    <div className="p-4 bg-white rounded-md border mt-2">
      <h3 className="text-lg font-semibold mb-2">Share your details</h3>
      <input className="border p-2 w-full mb-2" placeholder="Name" />
      <input className="border p-2 w-full mb-2" placeholder="Email" />
      <input className="border p-2 w-full mb-2" placeholder="Phone" />
      <button className="bg-black text-white px-4 py-2 rounded-lg w-full">Submit</button>
    </div>
  );
}
