// controllers/careerController.js
import { sendMail } from "../utils/careerMailer.js";
import multer from 'multer';

// Configure multer for file uploads
const storage = multer.memoryStorage();
export const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    console.log('File filter - mimetype:', file.mimetype);
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF, DOC, and DOCX files are allowed.'));
    }
  }
});

export const submitCareerApplication = async (req, res) => {
  console.log('=== Career Application Request ===');
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  console.log('Files:', req.files);
  console.log('File:', req.file);
  
  // Enhanced file debugging
  if (req.file) {
    console.log('File details:', {
      fieldname: req.file.fieldname,
      originalname: req.file.originalname,
      encoding: req.file.encoding,
      mimetype: req.file.mimetype,
      size: req.file.size,
      bufferExists: !!req.file.buffer,
      bufferLength: req.file.buffer?.length
    });
  } else {
    console.log('❌ No file found in req.file');
  }
  console.log('================================');

  const { firstName, lastName, post, email, contactNo, address } = req.body;
  const resumeFile = req.file;

  // Validation
  if (!firstName || !lastName || !post || !email || !contactNo || !address) {
    return res.status(400).json({ 
      success: false, 
      message: 'All fields are required',
      errors: {
        firstName: !firstName ? 'First name is required' : undefined,
        lastName: !lastName ? 'Last name is required' : undefined,
        post: ! post ? 'Post is required': undefined,
        email: !email ? 'Email is required' : undefined,
        contactNo: !contactNo ? 'Contact number is required' : undefined,
        address: !address ? 'Address is required' : undefined
      }
    });
  }

  if (!resumeFile) {
    console.log('❌ Resume file validation failed - no file received');
    return res.status(400).json({ 
      success: false, 
      message: 'Resume file is required',
      errors: { resume: 'Resume file is required' }
    });
  }

  // Additional file buffer validation
  if (!resumeFile.buffer || resumeFile.buffer.length === 0) {
    console.log('❌ Resume file buffer is empty or missing');
    return res.status(400).json({ 
      success: false, 
      message: 'Resume file appears to be corrupted or empty',
      errors: { resume: 'Resume file is corrupted or empty' }
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Invalid email format',
      errors: { email: 'Please enter a valid email address' }
    });
  }

  const to = process.env.HR_EMAIL || process.env.CONTACT_RECEIVER;
  const subject = `New Career Application - ${firstName} ${lastName}`;
  
  const message = `
New Career Application Received
===============================

Name: ${firstName} ${lastName}
Email: ${email}
Contact: ${contactNo}
Address: ${address}
${post ? `Position Applied: ${post}` : ''}

Application Date: ${new Date().toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}

Resume: ${resumeFile.originalname} (${(resumeFile.size / 1024).toFixed(2)} KB)

Please review the attached resume and contact the applicant accordingly.
  `;

  try {
    console.log('=== Sending Email with Attachment ===');
    console.log('To:', to);
    console.log('Resume attachment details:', {
      filename: resumeFile.originalname,
      size: resumeFile.size,
      mimetype: resumeFile.mimetype,
      bufferLength: resumeFile.buffer.length
    });

    // Send email to HR with attachment using the sendMail function
    const info = await sendMail({
      to: to,
      subject: subject,
      text: message,
      fromName: 'Eversure Career',
      attachments: [{
        filename: resumeFile.originalname,
        content: resumeFile.buffer,
        contentType: resumeFile.mimetype,
        contentDisposition: 'attachment'
      }]
    });

    console.log('✅ HR email sent successfully:', info.messageId);

    // Send confirmation email to applicant (without attachment)
    const confirmationSubject = 'Application Received - Thank You!';
    const confirmationMessage = `
Dear ${firstName} ${lastName},

Thank you for submitting your career application with us. We have received your application and resume successfully.

Our HR team will review your application and contact you soon if your profile matches our current openings.

Application Details:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Contact: ${contactNo}
- Submitted: ${new Date().toLocaleDateString()}
- Position Applied: ${post}
If you have any questions, please contact us at ${process.env.HR_EMAIL || 'hr@company.com'} or call +91 2138-679300/679351.

Best regards,
HR Team
Eversure
    `;

    await sendMail({
      to: email,
      subject: confirmationSubject,
      text: confirmationMessage,
      fromName: 'Eversure Career'
    });

    console.log('✅ Confirmation email sent to applicant');

    res.status(200).json({ 
      success: true, 
      message: 'Your application has been submitted successfully! We will review your application and contact you soon.',
      messageId: info.messageId 
    });
  } catch (err) {
    console.error('❌ Career application error:', err);
    console.error('Error stack:', err.stack);
    
    res.status(500).json({ 
      success: false, 
      message: 'There was an error submitting your application. Please try again.',
      error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
    });
  }
};