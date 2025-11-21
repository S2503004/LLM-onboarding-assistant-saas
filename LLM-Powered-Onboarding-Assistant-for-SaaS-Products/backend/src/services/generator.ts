/**
 * Simple onboarding plan generator.
 * In production this module would adapt prompts and call an LLM provider (via adapter).
 * Here we implement deterministic rules + a mock LLM call to keep tests stable.
 */

export interface OnboardInput {
  productName: string;
  persona: string;
  goal: string;
  context?: string;
}

export interface Step {
  id: string;
  title: string;
  description: string;
  estimatedMinutes?: number;
}

export async function generateOnboardingPlan(input: OnboardInput): Promise<Step[]> {
  // Basic validation
  if (!input.productName || !input.persona || !input.goal) {
    throw new Error('missing fields');
  }

  // Rule-based starter steps
  const steps: Step[] = [
    {
      id: 'setup-account',
      title: 'Create your account',
      description: `Sign up and verify your email for ${input.productName}.`,
      estimatedMinutes: 5,
    },
    {
      id: 'first-integration',
      title: 'Connect your primary data source',
      description: 'Follow the wizard to connect your first data source.',
      estimatedMinutes: 10,
    },
  ];

  // Persona-specific additions
  if (input.persona.includes('sales')) {
    steps.push({
      id: 'sales-templates',
      title: 'Import sales templates',
      description: 'Load recommended sales email and pipeline templates.',
      estimatedMinutes: 8,
    });
  } else if (input.persona.includes('engineer')) {
    steps.push({
      id: 'api-keys',
      title: 'Generate API keys',
      description: 'Create API keys and run the sample integration script.',
      estimatedMinutes: 12,
    });
  } else {
    steps.push({
      id: 'product-tour',
      title: 'Product tour',
      description: 'Quick guided tour to learn the main screens.',
      estimatedMinutes: 7,
    });
  }

  // Goal tailoring (simple heuristic)
  if (input.goal.includes('lead') || input.goal.includes('convert')) {
    steps.push({
      id: 'lead-flow',
      title: 'Set up lead capture flow',
      description: 'Configure the lead intake and routing rules.',
      estimatedMinutes: 15,
    });
  }

  // Mock step: call to external LLM adapter (here deterministic)
  const llmStep: Step = {
    id: 'personalized-tip',
    title: 'Personalized tip',
    description: `Tip: Focus on ${input.goal} by targeting the critical funnel steps for ${input.persona}.`,
    estimatedMinutes: 3,
  };
  steps.push(llmStep);

  return steps;
}
