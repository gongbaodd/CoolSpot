import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Camera } from 'lucide-react';

interface FormData {
  introduction: string;
  languages: string[];
  mainActivity: string;
  location: string;
  maxGuests: number;
  duration: string;
  targetAudience: string;
  uniqueElement: string;
  regenerativeImpact: string;
  requiredItems: string;
  availability: string;
  accessibility: string;
  food: string;
  partners: string;
  photos: string[];
  pricing: string;
  rules: string;
  meetingPoint: string;
  highlights: string;
  needDescriptionHelp: boolean;
}

const initialFormData: FormData = {
  introduction: '',
  languages: [],
  mainActivity: '',
  location: '',
  maxGuests: 4,
  duration: '',
  targetAudience: '',
  uniqueElement: '',
  regenerativeImpact: '',
  requiredItems: '',
  availability: "",
  accessibility: '',
  food: "",
  partners: '',
  photos: [],
  pricing: "",
  rules: '',
  meetingPoint: '',
  highlights: '',
  needDescriptionHelp: false,
};

const HostOnboardingPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const sections = [
    {
      title: 'About You',
      fields: ['introduction', 'languages'],
    },
    {
      title: 'Experience Details',
      fields: ['mainActivity', 'location', 'maxGuests', 'duration', 'targetAudience', 'uniqueElement'],
    },
    {
      title: 'Community Impact',
      fields: ['regenerativeImpact'],
    },
    {
      title: 'Logistics & Practicalities',
      fields: ['requiredItems', 'accessibility', 'food', 'partners'],
    },
    {
      title: 'Media & Presentation',
      fields: ['photos'],
    },
    {
      title: 'Final Details',
      fields: ['pricing', 'rules', 'meetingPoint', 'highlights', 'needDescriptionHelp'],
    },
  ];

  const handleInputChange = (field: string, value: unknown) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      // Combine with assessment data
      const assessmentData = JSON.parse(localStorage.getItem('hostAssessment') || '{}');
      const completeData = {
        ...assessmentData,
        ...formData,
      };

      // Send data to API
      const response = await fetch('https://ninja-paws-server.solitary-forest-8d89.workers.dev/suggestion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: JSON.stringify(completeData),
        })
      });

      const data = await response.json();
      
      // Store suggestion in localStorage for the success page
      if (data.choices?.[0]?.message?.content) {
        localStorage.setItem('hostSuggestion', data.choices[0].message.content);
      }

      // Navigate to success page
      navigate('/host/success');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Navigate anyway, but without suggestions
      navigate('/host/success');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    }
  };

  const renderField = (field: string) => {
    switch (field) {
      case 'introduction':
        return (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              How would you like me to introduce you to guests?
            </label>
            <textarea
              value={formData.introduction}
              onChange={(e) => handleInputChange('introduction', e.target.value)}
              placeholder="My name is Ana, and I've lived in Valencia all my life. I love cooking and sharing stories with travelers."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-800 focus:border-blue-800"
              rows={4}
            />
          </div>
        );

      case 'languages':
        return (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              What language(s) can you welcome guests in?
            </label>
            <input
              type="text"
              value={formData.languages.join(', ')}
              onChange={(e) => handleInputChange('languages', e.target.value.split(',').map(lang => lang.trim()))}
              placeholder="English, Estonian, Russian"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-800 focus:border-blue-800"
            />
          </div>
        );

      case 'photos':
        return (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Upload 3-5 photos that showcase your experience
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Camera size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600">Drag and drop photos here, or click to select files</p>
              <p className="text-sm text-gray-500 mt-2">Clean, natural light works best!</p>
              <input
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={() => {
                  // Handle file upload
                }}
              />
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
            </label>
            <input
              type="text"
              value={formData[field as keyof FormData] as string}
              onChange={(e) => handleInputChange(field, e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-800 focus:border-blue-800"
            />
          </div>
        );
    }
  };

  return (
    <Layout>
      <div className="container max-w-3xl py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Build Your Unique Guest Experience</h1>
          <p className="text-gray-600">
            Step 2 of 2: Let's create your experience together.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          {/* Progress indicator */}
          <div className="mb-8">
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-blue-800 rounded-full transition-all duration-300"
                style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Section {currentSection + 1} of {sections.length}: {sections[currentSection].title}
            </p>
          </div>

          {/* Form fields */}
          <div className="space-y-6 mb-8">
            {sections[currentSection].fields.map((field) => (
              <div key={field}>
                {renderField(field)}
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentSection === 0}
              className={`btn ${
                currentSection === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'btn-secondary'
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={isLoading}
              className="btn btn-primary"
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : currentSection === sections.length - 1 ? (
                'Submit'
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

export default HostOnboardingPage;