'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';

interface FormData {
  email: string;
}

const ForgotPasswordForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: ''
  });
  const [error, setError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!formData.email) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      // Here you would typically make an API call to handle password reset
      console.log('Password reset email sent to:', formData.email);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setError('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full space-y-8 bg-white p-6 sm:p-8 rounded-xl shadow-lg">
        {/* Back to Login Link */}
        <div>
          <a 
            href="/login" 
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-500"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Login
          </a>
        </div>

        {!isSuccess ? (
          <>
            {/* Header */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Forgot Password?</h2>
              <p className="mt-2 text-gray-600">
                No worries! Enter your email and we&apos;ll send you reset instructions.
              </p>
            </div>

            {/* Form */}
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-2">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-3 py-2 border ${
                      error ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="Enter your email"
                  />
                </div>
                {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Reset Instructions'
                  )}
                </button>
              </div>
            </form>
          </>
        ) : (
          // Success State
          <div className="text-center py-8">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Check your email
            </h3>
            <p className="text-gray-600 mb-6">
              We have sent password reset instructions to<br />
              <span className="font-medium text-gray-900">{formData.email}</span>
            </p>
            <button
              onClick={() => {
                setIsSuccess(false);
                setFormData({ email: '' });
              }}
              className="text-sm text-blue-600 hover:text-blue-500"
            >
              Didn&apos;t receive the email? Click to try again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordForm;