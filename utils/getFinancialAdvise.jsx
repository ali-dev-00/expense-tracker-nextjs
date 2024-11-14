import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // Use this only if you're sure about exposing the key
});

const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  try {
    const userPrompt = `
      Based on the following financial data:
      ~ Total Budget: ${totalBudget} USD
      ~ Expense: ${totalSpend} USD
      ~ Incomes: ${totalIncome} USD

      Provide detailed financial advice in 2 sentences to help the user manage their expenses.
    `;

    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // You can switch to 'gpt-4' if your plan allows
      messages: [
        {
          role: 'user',
          content: userPrompt,
        },
      ],
    });

    const advice = chatCompletion.choices[0].message.content;

    return advice;
  } catch (error) {
    console.error('Error fetching financial advice:', error);
    return error.message; // You can also return a default message for better UX
  }
};

export default getFinancialAdvice;
