'use client';

import { useActionForm } from '@/features/action-form/hooks/useActionForm';
import { ActionType } from '@/features/action-form/types';
import { ActionTypeButton } from '@/features/action-form/components/ActionTypeButton';

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

  const buttons: { key: ActionType; label: string; description: string }[] = [
    {
      key: 'issue',
      label: 'Issue',
      description: 'Want to discuss problems or challenges',
    },
    {
      key: 'tech',
      label: 'Tech',
      description: 'Need technical questions or support',
    },
    {
      key: 'both',
      label: 'Both',
      description: 'Want to discuss both problems and technology',
    },
    {
      key: 'none',
      label: 'None',
      description: 'Does not fit into specific categories',
    },
  ];

  return (
    <main className="max-w-xl mx-auto p-4 space-y-8">
      <section>
        <h1 className="text-xl font-semibold mb-4">Step 1: Select Action Type & Provide Query</h1>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {buttons.map((b) => (
            <ActionTypeButton
              key={b.key}
              type={b.key}
              label={b.label}
              description={b.description}
              selected={type === b.key}
              onSelect={setType}
            />
          ))}
        </div>
        <h2 className="text-lg font-medium mb-2">Detailed Query</h2>
        <textarea
          className="w-full border rounded-md p-2 mb-4"
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

      {/* Step2 */}
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
