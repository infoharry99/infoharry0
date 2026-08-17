import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, projectType, budget, message } = body;

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Please enter your valid full name.' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: 'Please describe your project or inquiry (minimum 10 characters).' },
        { status: 400 }
      );
    }

    // In a real environment, send an email via SendGrid/Mailgun or log to DB
    const timestamp = new Date().toISOString();
    console.log(`[CONTACT INQUIRY RECEIVED ${timestamp}]:`, {
      name,
      email,
      phone: phone || 'Not provided',
      company: company || 'Not provided',
      projectType: projectType || 'General Inquiry',
      budget: budget || 'Flexible',
      message
    });

    return NextResponse.json({
      success: true,
      message: `Thank you, ${name}! Your project request has been logged successfully. Hariom will get back to you within 24 hours.`,
      referenceId: `HB-${Date.now().toString().slice(-6)}`,
      timestamp
    });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error while processing request.' },
      { status: 500 }
    );
  }
}
