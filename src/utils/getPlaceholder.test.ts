import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getPlaceholder } from './getPlaceholder';
import { ActionType } from '@/features/action-form/types';

test('returns default placeholder when type is undefined', () => {
  assert.strictEqual(getPlaceholder(), 'Detailed Description');
});

test('returns placeholder for each action type', () => {
  const types: ActionType[] = ['issue', 'tech', 'both', 'none'];
  for (const t of types) {
    const text = getPlaceholder(t);
    assert.ok(text.length > 0);
  }
});
