'use client';

import { useActionForm } from '@/features/action-form/hooks/useActionForm';
import { ActionType } from '@/features/action-form/types';

export default function Home() {
  const {
    type,
    setType,
    description,
    setDescription,
    placeholder,
    canProceed,
    step,
    goToStep2,
  } = useActionForm();

  const buttons: { key: ActionType; label: string }[] = [
    { key: 'issue', label: 'Issue' },
    { key: 'tech', label: 'Tech' },
    { key: 'both', label: 'Both' },
    { key: 'none', label: 'None' },
  ];

  return (
    <main className="max-w-xl mx-auto p-4 space-y-8">
      <section>
        <h1 className="text-xl font-semibold mb-4">Step 1: Select Action Type & Provide Query</h1>
        <div className="flex flex-wrap gap-2 mb-4">
          {buttons.map((b) => (
            <button
              key={b.key}
              className={`px-4 py-2 border rounded ${
                type === b.key ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => setType(b.key)}
            >
              {b.label}
            </button>
          ))}
        </div>
        <textarea
          className="w-full border p-2 mb-4"
          rows={4}
          placeholder={placeholder}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          disabled={!canProceed}
          onClick={goToStep2}
        >
          Continue to Details
        </button>
      </section>
      {step === 2 && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Step 2: Provide Detailed Information</h2>
          <div>
            <label className="block mb-1">Who</label>
            <input className="w-full border p-2" />
          </div>
          <div>
            <label className="block mb-1">When</label>
            <input className="w-full border p-2" />
          </div>
          <div>
            <label className="block mb-1">How frequently</label>
            <input className="w-full border p-2" />
          </div>
          <div>
            <label className="block mb-1">How is this challenge currently being addressed?</label>
            <input className="w-full border p-2" />
          </div>
        </section>
      )}
    </main>
  );
}
