// utils/careerMailer.js
import nodemailer from 'nodemailer';

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    pool: true,
    maxConnections: 1,
    rateDelta: 20000,
    rateLimit: 5
  });
};

// General sendMail function
export const sendMail = async (options) => {
  try {
    // Validate required options
    if (!options.to) {
      throw new Error('Recipient email (to) is required');
    }
    if (!options.subject) {
      throw new Error('Email subject is required');
    }
    if (!options.text && !options.html) {
      throw new Error('Email content (text or html) is required');
    }

    // Verify environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Email credentials not configured. Please set EMAIL_USER and EMAIL_PASS environment variables.');
    }

    console.log('=== Sending Email ===');
    console.log('To:', options.to);
    console.log('Subject:', options.subject);
    console.log('Has Attachments:', options.attachments && options.attachments.length > 0);
    
    if (options.attachments && options.attachments.length > 0) {
      console.log('Attachment Details:', options.attachments.map(att => ({
        filename: att.filename,
        contentType: att.contentType,
        hasContent: !!att.content,
        contentSize: att.content?.length || 'unknown'
      })));
    }

    const transporter = createTransporter();

    // Verify transporter
    console.log('Verifying email transporter...');
    await transporter.verify();
    console.log('✅ Email transporter verified successfully');

    // Default mail options
    const mailOptions = {
      from: options.from || {
        name: options.fromName || 'Eversure',
        address: process.env.EMAIL_USER
      },
      to: options.to,
      cc: options.cc,
      bcc: options.bcc,
      subject: options.subject,
      text: options.text,
      html: options.html,
      attachments: options.attachments || []
    };

    console.log('Sending email with options:', {
      ...mailOptions,
      attachments: mailOptions.attachments.map(att => ({
        filename: att.filename,
        contentType: att.contentType,
        contentDisposition: att.contentDisposition,
        hasContent: !!att.content,
        contentLength: att.content?.length
      }))
    });

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.messageId);
    console.log('Email response info:', info);

    // Close transporter
    transporter.close();

    return {
      success: true,
      messageId: info.messageId,
      message: 'Email sent successfully'
    };

  } catch (error) {
    console.error('❌ Email sending error:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response
    });
    throw error;
  }
};

// Utility function for contact forms
export const sendContactEmail = async (name, email, phone, subject, message) => {
  const contactEmail = process.env.CONTACT_RECEIVER || process.env.HR_EMAIL;
  
  const emailContent = `
New Contact Form Submission
===========================

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Subject: ${subject || 'Contact Form Inquiry'}

Message:
${message}

Submitted: ${new Date().toLocaleString()}
  `;

  return await sendMail({
    to: contactEmail,
    subject: `Contact Form: ${subject || 'New Inquiry'} - ${name}`,
    text: emailContent,
    fromName: 'Eversure Contact Form'
  });
};

// Utility function for newsletter subscriptions
export const sendWelcomeEmail = async (email) => {
  const welcomeContent = `
Dear Subscriber,

Welcome to Eversure Newsletter!

Thank you for subscribing to our newsletter. You'll now receive updates about our latest services, industry insights, and special offers.

If you didn't sign up for this newsletter, please ignore this email.

Best regards,
Eversure Team
  `;

  return await sendMail({
    to: email,
    subject: 'Welcome to Eversure Newsletter!',
    text: welcomeContent,
    fromName: 'Eversure'
  });
};  