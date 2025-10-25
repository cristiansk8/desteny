// lib/mail.js

// This is a mock email sending function.
// In a real application, you would use a service like SendGrid, Resend, or Nodemailer.
export const sendEmail = async ({ email }) => {
  console.log(`Sending email to ${email}...`);

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Simulate a successful response
  // In a real scenario, you would handle potential errors here.
  return { success: true };
};