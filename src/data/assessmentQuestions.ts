import { Question } from '@/components/AssessmentQuestion';

export const assessmentQuestions: Question[] = [
  // Psychometric Section
  {
    id: 'psycho_1',
    section: 'Psychometric',
    type: 'likert',
    question: 'I am excited by financial technology innovations like UPI, Buy Now Pay Later, or embedded lending solutions.',
    options: [
      { value: '5', label: 'Strongly Agree', score: 5 },
      { value: '4', label: 'Agree', score: 4 },
      { value: '3', label: 'Neutral', score: 3 },
      { value: '2', label: 'Disagree', score: 2 },
      { value: '1', label: 'Strongly Disagree', score: 1 }
    ]
  },
  {
    id: 'psycho_2',
    section: 'Psychometric',
    type: 'likert',
    question: 'I enjoy solving complex problems that require both analytical thinking and creative solutions.',
    options: [
      { value: '5', label: 'Strongly Agree', score: 5 },
      { value: '4', label: 'Agree', score: 4 },
      { value: '3', label: 'Neutral', score: 3 },
      { value: '2', label: 'Disagree', score: 2 },
      { value: '1', label: 'Strongly Disagree', score: 1 }
    ]
  },
  {
    id: 'psycho_3',
    section: 'Psychometric',
    type: 'scenario',
    question: 'When working on a project, which approach do you naturally prefer?',
    options: [
      { value: 'structured', label: 'I like to plan everything in advance and follow a structured approach', score: 4 },
      { value: 'balanced', label: 'I prefer a balanced approach with some planning and room for flexibility', score: 5 },
      { value: 'adaptive', label: 'I prefer to adapt as I go and respond to changing circumstances', score: 3 },
      { value: 'collaborative', label: 'I like to involve others in planning and decision-making throughout', score: 4 }
    ]
  },
  {
    id: 'psycho_4',
    section: 'Psychometric',
    type: 'likert',
    question: 'I would be motivated to learn product management even without a clear job offer in sight.',
    options: [
      { value: '5', label: 'Strongly Agree', score: 5 },
      { value: '4', label: 'Agree', score: 4 },
      { value: '3', label: 'Neutral', score: 3 },
      { value: '2', label: 'Disagree', score: 2 },
      { value: '1', label: 'Strongly Disagree', score: 1 }
    ]
  },
  {
    id: 'psycho_5',
    section: 'Psychometric',
    type: 'scenario',
    question: 'How do you typically handle setbacks or failures in your work?',
    options: [
      { value: 'analyze', label: 'I analyze what went wrong and create a plan to prevent it in the future', score: 5 },
      { value: 'persist', label: 'I persist and try different approaches until I find a solution', score: 5 },
      { value: 'support', label: 'I seek support from colleagues or mentors to help me improve', score: 4 },
      { value: 'discouraged', label: 'I tend to get discouraged and need time to regain confidence', score: 2 }
    ]
  },

  // Technical Section
  {
    id: 'tech_1',
    section: 'Technical',
    type: 'multiple-choice',
    question: 'What is an API in the context of financial services?',
    options: [
      { value: 'incorrect_1', label: 'A type of financial product for consumers', score: 1 },
      { value: 'correct', label: 'An interface that allows different software applications to communicate and share data', score: 5 },
      { value: 'incorrect_2', label: 'A regulatory framework for fintech companies', score: 1 },
      { value: 'incorrect_3', label: 'A marketing strategy for digital products', score: 1 }
    ]
  },
  {
    id: 'tech_2',
    section: 'Technical',
    type: 'multiple-choice',
    question: 'Which of these is a key consideration when designing a mobile payment experience?',
    options: [
      { value: 'security_only', label: 'Security is the only important factor', score: 2 },
      { value: 'speed_only', label: 'Transaction speed above all else', score: 2 },
      { value: 'balanced', label: 'Balance of security, speed, user experience, and regulatory compliance', score: 5 },
      { value: 'features', label: 'Having the most features compared to competitors', score: 1 }
    ]
  },
  {
    id: 'tech_3',
    section: 'Technical',
    type: 'scenario',
    question: 'A user reports that their payment failed, but they were charged. As a PM, what would be your first step?',
    options: [
      { value: 'escalate', label: 'Immediately escalate to the engineering team', score: 3 },
      { value: 'investigate', label: 'Investigate the issue by checking logs and understanding the payment flow', score: 5 },
      { value: 'refund', label: 'Process an immediate refund for the user', score: 2 },
      { value: 'ignore', label: 'Wait to see if more users report the same issue', score: 1 }
    ]
  },
  {
    id: 'tech_4',
    section: 'Technical',
    type: 'multiple-choice',
    question: 'What does "PCI DSS compliance" mean in fintech?',
    options: [
      { value: 'marketing', label: 'A marketing certification for financial products', score: 1 },
      { value: 'correct', label: 'Security standards for organizations that handle credit card information', score: 5 },
      { value: 'api', label: 'A type of API standard for payments', score: 2 },
      { value: 'user_interface', label: 'A user interface design guideline', score: 1 }
    ]
  },
  {
    id: 'tech_5',
    section: 'Technical',
    type: 'scenario',
    question: 'Your fintech app needs to integrate with a bank\'s system. What\'s the most important factor to consider first?',
    options: [
      { value: 'cost', label: 'The cost of integration', score: 2 },
      { value: 'speed', label: 'How quickly we can launch', score: 2 },
      { value: 'security', label: 'Security protocols and regulatory compliance requirements', score: 5 },
      { value: 'features', label: 'What features the bank\'s API can support', score: 3 }
    ]
  },

  // WISCAR Framework Section
  {
    id: 'wiscar_1',
    section: 'WISCAR',
    type: 'likert',
    question: 'I have a strong desire to build products that can positively impact people\'s financial lives.',
    description: 'This assesses your Will component of the WISCAR framework.',
    options: [
      { value: '5', label: 'Strongly Agree', score: 5 },
      { value: '4', label: 'Agree', score: 4 },
      { value: '3', label: 'Neutral', score: 3 },
      { value: '2', label: 'Disagree', score: 2 },
      { value: '1', label: 'Strongly Disagree', score: 1 }
    ]
  },
  {
    id: 'wiscar_2',
    section: 'WISCAR',
    type: 'likert',
    question: 'I find myself naturally curious about how financial products work and how they can be improved.',
    description: 'This measures your Interest in the fintech product domain.',
    options: [
      { value: '5', label: 'Strongly Agree', score: 5 },
      { value: '4', label: 'Agree', score: 4 },
      { value: '3', label: 'Neutral', score: 3 },
      { value: '2', label: 'Disagree', score: 2 },
      { value: '1', label: 'Strongly Disagree', score: 1 }
    ]
  },
  {
    id: 'wiscar_3',
    section: 'WISCAR',
    type: 'scenario',
    question: 'How would you rate your current skill level in strategic thinking and problem-solving?',
    description: 'This evaluates your current Skill level.',
    options: [
      { value: 'expert', label: 'I\'m highly skilled and can handle complex strategic challenges', score: 5 },
      { value: 'proficient', label: 'I\'m proficient and can solve most problems with some guidance', score: 4 },
      { value: 'developing', label: 'I\'m developing these skills and eager to improve', score: 3 },
      { value: 'beginner', label: 'I\'m a beginner but willing to learn', score: 2 }
    ]
  },
  {
    id: 'wiscar_4',
    section: 'WISCAR',
    type: 'scenario',
    question: 'When faced with a complex, ambiguous problem, how do you typically approach it?',
    description: 'This measures your Cognitive readiness for product management challenges.',
    options: [
      { value: 'systematic', label: 'I break it down systematically and gather information methodically', score: 5 },
      { value: 'creative', label: 'I brainstorm multiple approaches and test different solutions', score: 4 },
      { value: 'collaborative', label: 'I involve others to get different perspectives before deciding', score: 4 },
      { value: 'overwhelmed', label: 'I often feel overwhelmed and need clear direction', score: 2 }
    ]
  },
  {
    id: 'wiscar_5',
    section: 'WISCAR',
    type: 'likert',
    question: 'I actively seek feedback and use it to improve my performance, even when it\'s critical.',
    description: 'This assesses your Ability to learn and grow.',
    options: [
      { value: '5', label: 'Strongly Agree', score: 5 },
      { value: '4', label: 'Agree', score: 4 },
      { value: '3', label: 'Neutral', score: 3 },
      { value: '2', label: 'Disagree', score: 2 },
      { value: '1', label: 'Strongly Disagree', score: 1 }
    ]
  },
  {
    id: 'wiscar_6',
    section: 'WISCAR',
    type: 'scenario',
    question: 'Imagine you\'re responsible for a fintech product that helps small businesses manage cash flow. How excited would this role make you?',
    description: 'This evaluates your Real-world fit with actual PM responsibilities.',
    options: [
      { value: 'very_excited', label: 'Very excited - I\'d love the challenge and impact potential', score: 5 },
      { value: 'excited', label: 'Excited - it sounds like meaningful and interesting work', score: 4 },
      { value: 'somewhat', label: 'Somewhat interested - I\'d need to learn more', score: 3 },
      { value: 'not_much', label: 'Not particularly excited - seems stressful or complex', score: 2 }
    ]
  }
];

export const getScoreBySection = (answers: Record<string, string>) => {
  const scores = {
    psychometric: 0,
    technical: 0,
    wiscar: 0,
    total: 0
  };

  const sectionCounts = {
    psychometric: 0,
    technical: 0,
    wiscar: 0
  };

  assessmentQuestions.forEach(question => {
    const answer = answers[question.id];
    if (answer) {
      const option = question.options.find(opt => opt.value === answer);
      if (option?.score) {
        const section = question.section.toLowerCase() as keyof typeof scores;
        if (section !== 'total') {
          scores[section] += option.score;
          sectionCounts[section]++;
        }
      }
    }
  });

  // Calculate percentages
  const percentageScores = {
    psychometric: sectionCounts.psychometric > 0 ? Math.round((scores.psychometric / (sectionCounts.psychometric * 5)) * 100) : 0,
    technical: sectionCounts.technical > 0 ? Math.round((scores.technical / (sectionCounts.technical * 5)) * 100) : 0,
    wiscar: sectionCounts.wiscar > 0 ? Math.round((scores.wiscar / (sectionCounts.wiscar * 5)) * 100) : 0,
    total: 0
  };

  percentageScores.total = Math.round((percentageScores.psychometric + percentageScores.technical + percentageScores.wiscar) / 3);

  return percentageScores;
};