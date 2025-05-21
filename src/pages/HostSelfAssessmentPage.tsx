import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';

interface Question {
  id: string;
  text: string;
  options: {
    value: string;
    label: string;
    hasInput?: boolean;
  }[];
}

const questions: Question[] = [
  {
    id: 'interests',
    text: 'What interests you about welcoming guests into your daily life or neighborhood?',
    options: [
      { value: 'meeting_people', label: 'I love meeting new people' },
      { value: 'income', label: 'I need extra income' },
      { value: 'culture', label: 'I want to share my culture/skills' },
      { value: 'other', label: 'Other', hasInput: true },
    ],
  },
  {
    id: 'venue',
    text: 'Do you have a place where you could invite small groups, or could you guide guests through your neighborhood?',
    options: [
      { value: 'comfortable', label: 'Yes, I have a comfortable space' },
      { value: 'simple', label: 'Yes, but it\'s simple' },
      { value: 'neighborhood', label: 'I can show my neighbourhood or a nature area' },
      { value: 'unsure', label: 'Not sure' },
    ],
  },
  {
    id: 'skills',
    text: 'Is there something you\'re passionate about or skilled in that you\'d love to share?',
    options: [
      { value: 'yes', label: 'Yes', hasInput: true },
      { value: 'unsure', label: 'Not sure' },
      { value: 'no', label: 'Not really, but I can show my neighborhood/life' },
    ],
  },
  {
    id: 'availability',
    text: 'How much time can you dedicate to hosting experiences?',
    options: [
      { value: 'daily', label: 'Every day' },
      { value: 'weekly', label: 'A few times a week' },
      { value: 'occasional', label: 'Occasionally, when I have time' },
      { value: 'unsure', label: 'Not sure yet' },
    ],
  },
  {
    id: 'languageComfort',
    text: 'How comfortable do you feel interacting with people from other countries?',
    options: [
      { value: 'very', label: 'Very comfortable' },
      { value: 'nervous', label: 'A bit nervous, but willing to try' },
      { value: 'limited', label: 'Only if they speak my language' },
      { value: 'uncomfortable', label: 'Not comfortable' },
    ],
  },
  {
    id: 'hostingExperience',
    text: 'Have you ever hosted guests before?',
    options: [
      { value: 'often', label: 'Yes, often' },
      { value: 'sometimes', label: 'Sometimes' },
      { value: 'never', label: 'Not really, but I\'d like to try' },
    ],
  },
  {
    id: 'communityInterest',
    text: 'Are you interested in experiences that help your community or preserve local traditions?',
    options: [
      { value: 'very', label: 'Yes, a lot' },
      { value: 'maybe', label: 'Maybe, not sure how' },
      { value: 'no', label: 'Not really/I haven\'t thought about it' },
    ],
  },
];

const HostSelfAssessmentPage: React.FC = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<string, { value: string; input?: string }>>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (questionId: string, value: string, input?: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: { value, input },
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Save answers to localStorage or context
      localStorage.setItem('hostAssessment', JSON.stringify(answers));
      navigate('/host/onboarding');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const currentQuestionData = questions[currentQuestion];
  const currentAnswer = answers[currentQuestionData.id];

  return (
    <Layout>
      <div className="container max-w-3xl py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Test yourself – Are you ready to welcome visitor experiences?</h1>
          <p className="text-gray-600">
            Step 1 of 2: Let's assess if hosting experiences is right for you.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-blue-800 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-6">{currentQuestionData.text}</h2>
            <div className="space-y-4">
              {currentQuestionData.options.map((option) => (
                <div key={option.value} className="space-y-2">
                  <label className="flex items-start">
                    <input
                      type="radio"
                      name={currentQuestionData.id}
                      value={option.value}
                      checked={currentAnswer?.value === option.value}
                      onChange={() => handleAnswer(currentQuestionData.id, option.value)}
                      className="mt-1 h-4 w-4 text-blue-800 border-gray-300 focus:ring-blue-800"
                    />
                    <span className="ml-3">{option.label}</span>
                  </label>
                  {option.hasInput && currentAnswer?.value === option.value && (
                    <input
                      type="text"
                      placeholder="Please specify..."
                      value={currentAnswer?.input || ''}
                      onChange={(e) => handleAnswer(currentQuestionData.id, option.value, e.target.value)}
                      className="ml-7 mt-2 w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-800 focus:border-blue-800"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`btn ${
                currentQuestion === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'btn-secondary'
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={!currentAnswer}
              className="btn btn-primary"
            >
              {currentQuestion === questions.length - 1 ? (
                <>
                  Continue to Step 2
                  <ArrowRight size={20} className="ml-2" />
                </>
              ) : (
                'Next'
              )}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HostSelfAssessmentPage;