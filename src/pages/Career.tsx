import React, { useState } from 'react';
import { Upload, Send, User, Mail, Phone, MapPin, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  contactNo: string;
  address: string;
  resume: File | null;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  contactNo?: string;
  address?: string;
  resume?: string;
}

function Career() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    contactNo: '',
    address: '',
    resume: null
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.contactNo.trim()) {
      newErrors.contactNo = 'Contact number is required';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.contactNo)) {
      newErrors.contactNo = 'Please enter a valid contact number';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!formData.resume) {
      newErrors.resume = 'Resume is required';
    } else if (formData.resume && !['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(formData.resume.type)) {
      newErrors.resume = 'Please upload a PDF or Word document';
    } else if (formData.resume && formData.resume.size > 5 * 1024 * 1024) {
      newErrors.resume = 'File size must be less than 5MB';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, resume: file }));
    if (errors.resume) {
      setErrors(prev => ({ ...prev, resume: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitMessage('Your application has been submitted successfully! We will review your application and contact you soon.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        contactNo: '',
        address: '',
        resume: null
      });

      // Reset file input
      const fileInput = document.getElementById('resume') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

    } catch (error) {
      setSubmitMessage('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#309ed9] to-[#4db8e8] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Career
            </h1>
            <div className="flex justify-center items-center mt-6 text-blue-100">
              <span onClick={()=>{navigate('/')}} className='cursor-pointer'>Home</span>
              <span className="mx-2">/</span>
              <span className='cursor-pointer'>Career</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Submit Your Application
              </h2>
              {/* <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Take the next step in your career journey with Eversure. 
                Fill out the form below and upload your resume to get started.
              </p> */}
            </div>

            {submitMessage && (
              <div className={`mb-8 p-4 rounded-lg ${
                submitMessage.includes('successfully') 
                  ? 'bg-green-50 border border-green-200 text-green-800'
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}>
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="inline w-4 h-4 mr-2" />
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#309ed9] focus:border-[#309ed9] transition-colors ${
                      errors.firstName ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <p className="mt-2 text-sm text-red-600">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="inline w-4 h-4 mr-2" />
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#309ed9] focus:border-[#309ed9] transition-colors ${
                      errors.lastName ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && (
                    <p className="mt-2 text-sm text-red-600">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  <Mail className="inline w-4 h-4 mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#309ed9] focus:border-[#309ed9] transition-colors ${
                    errors.email ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Contact Number Field */}
              <div>
                <label htmlFor="contactNo" className="block text-sm font-semibold text-gray-700 mb-2">
                  <Phone className="inline w-4 h-4 mr-2" />
                  Contact Number *
                </label>
                <input
                  type="tel"
                  id="contactNo"
                  value={formData.contactNo}
                  onChange={(e) => handleInputChange('contactNo', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#309ed9] focus:border-[#309ed9] transition-colors ${
                    errors.contactNo ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter your contact number"
                />
                {errors.contactNo && (
                  <p className="mt-2 text-sm text-red-600">{errors.contactNo}</p>
                )}
              </div>

              {/* Address Field */}
              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                  <MapPin className="inline w-4 h-4 mr-2" />
                  Address *
                </label>
                <textarea
                  id="address"
                  rows={3}
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#309ed9] focus:border-[#309ed9] transition-colors resize-none ${
                    errors.address ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter your complete address"
                />
                {errors.address && (
                  <p className="mt-2 text-sm text-red-600">{errors.address}</p>
                )}
              </div>

              {/* Resume Upload */}
              <div>
                <label htmlFor="resume" className="block text-sm font-semibold text-gray-700 mb-2">
                  <FileText className="inline w-4 h-4 mr-2" />
                  Upload Resume *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                  <label
                    htmlFor="resume"
                    className={`w-full flex items-center justify-center px-4 py-6 border-2 border-dashed rounded-lg cursor-pointer transition-colors hover:bg-gray-50 ${
                      errors.resume ? 'border-red-300' : 'border-gray-300 hover:border-[#309ed9]'
                    }`}
                  >
                    <div className="text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                      <div className="text-sm text-gray-600">
                        {formData.resume ? (
                          <span className="font-medium text-[#309ed9]">
                            {formData.resume.name}
                          </span>
                        ) : (
                          <>
                            <span className="font-medium">Click to upload</span> or drag and drop
                            <br />
                            <span className="text-gray-500">PDF, DOC, DOCX (max. 5MB)</span>
                          </>
                        )}
                      </div>
                    </div>
                  </label>
                </div>
                {errors.resume && (
                  <p className="mt-2 text-sm text-red-600">{errors.resume}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#309ed9] hover:bg-[#2890c5] text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Submit Application
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Additional Info */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="text-center text-gray-600">
                <p className="mb-2">
                  <strong>Questions about your application?</strong>
                </p>
                <p>
                  Contact our HR team at{' '}
                  <a href="mailto:careers@eversure.com" className="text-[#309ed9] hover:underline">
                    eversure@rathigroup.com
                  </a>{' '}
                  or call{' '}
                  <a href="tel:+912138679300" className="text-[#309ed9] hover:underline">
                    +91 2138-679300/679351
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;