import { generateOnboardingPlan } from './generator';

describe('generateOnboardingPlan', () => {
  test('throws on missing fields', async () => {
    await expect(generateOnboardingPlan({ productName: '', persona: 'sales', goal: 'convert' } as any)).rejects.toThrow();
  });

  test('includes sales specific steps', async () => {
    const plan = await generateOnboardingPlan({ productName: 'Acme', persona: 'sales-rep', goal: 'convert lead' });
    const ids = plan.map(s => s.id);
    expect(ids).toContain('sales-templates');
    expect(ids).toContain('lead-flow');
    expect(ids).toContain('personalized-tip');
  });

  test('includes engineer specific steps', async () => {
    const plan = await generateOnboardingPlan({ productName: 'Acme', persona: 'senior-engineer', goal: 'integrate API' });
    const ids = plan.map(s => s.id);
    expect(ids).toContain('api-keys');
    expect(ids).toContain('personalized-tip');
  });

  test('non-specific persona includes product-tour', async () => {
    const plan = await generateOnboardingPlan({ productName: 'Acme', persona: 'marketer', goal: 'learn' });
    const ids = plan.map(s => s.id);
    expect(ids).toContain('product-tour');
  });
});
