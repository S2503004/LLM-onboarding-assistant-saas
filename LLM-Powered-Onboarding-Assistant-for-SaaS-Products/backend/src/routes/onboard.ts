import { Router } from 'express';
import { generateOnboardingPlan } from '../services/generator';
const router = Router();

router.post('/', async (req, res) => {
  try {
    const { productName, persona, goal, context } = req.body;
    if (!productName || !persona || !goal) {
      return res.status(400).json({ error: 'productName, persona and goal are required' });
    }
    const plan = await generateOnboardingPlan({ productName, persona, goal, context });
    return res.json({ plan });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || 'internal error' });
  }
});

export { router as onboardingRouter };
