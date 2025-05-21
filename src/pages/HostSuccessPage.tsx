import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import Layout from '../components/layout/Layout';

interface HostSuccessPageProps {
  suggestion?: string;
}

const HostSuccessPage: React.FC<HostSuccessPageProps> = ({ suggestion }) => {
  return (
    <Layout>
      <div className="container max-w-3xl py-12">
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <div className="mb-8">
            <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Application Submitted Successfully!</h1>
            <p className="text-gray-600">
              Thank you for taking the time to share your experience with us. Our team will review your application and get back to you soon.
            </p>
          </div>

          {suggestion && (
            <div className="mb-8 p-6 bg-blue-50 rounded-lg text-left">
              <h2 className="text-xl font-semibold mb-4">Our Suggestions</h2>
              <div className="prose prose-blue" dangerouslySetInnerHTML={{ __html: suggestion }} />
            </div>
          )}

          <div className="flex justify-center">
            <Link to="/" className="btn btn-primary">
              <ArrowLeft size={18} className="mr-2" />
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HostSuccessPage;