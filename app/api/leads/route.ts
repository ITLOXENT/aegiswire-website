import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendLeadNotification } from '@/lib/ses';

const FREE_EMAIL_DOMAINS = [
  'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com',
  'icloud.com', 'mail.com', 'protonmail.com', 'zoho.com', 'yandex.com',
  'gmx.com', 'inbox.com', 'live.com', 'msn.com', 'me.com',
  'qq.com', '163.com', '126.com', 'sina.com', 'sohu.com',
  'rediffmail.com', 'mail.ru', 'rambler.ru', 'ya.ru',
  'tutanota.com', 'fastmail.com', 'hushmail.com', 'mailfence.com',
  'guerrillamail.com', 'tempmail.com', '10minutemail.com', 'throwaway.email',
  'mailinator.com', 'sharklasers.com', 'yopmail.com', 'getnada.com',
  'temp-mail.org', 'fakeinbox.com', 'mohmal.com', 'dispostable.com',
  'tempinbox.com', 'maildrop.cc', 'trashmail.com', 'getairmail.com'
];

const BLOCKED_COUNTRIES = ['CN', 'IN', 'PK', 'BD', 'VN', 'IR', 'RU', 'NG', 'KE'];

const ALLOWED_REGIONS = [
  'US', 'CA',
  'GB', 'DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'AT', 'CH', 'SE', 'NO', 'DK', 'FI', 'PL', 'PT', 'IE', 'CZ', 'GR', 'HU', 'RO', 'BG', 'HR', 'SK', 'SI', 'LT', 'LV', 'EE', 'LU', 'MT', 'CY',
  'AE', 'SA', 'QA', 'KW', 'BH', 'OM'
];

function isFreeEmail(email: string): boolean {
  const domain = email.split('@')[1]?.toLowerCase();
  return FREE_EMAIL_DOMAINS.includes(domain);
}

function getCountryFromRequest(request: NextRequest): string {
  const cfCountry = request.headers.get('cf-ipcountry');
  const xCountry = request.headers.get('x-vercel-ip-country');
  const geoCountry = request.headers.get('x-geo-country');
  return cfCountry || xCountry || geoCountry || 'UNKNOWN';
}

function isAllowedCountry(countryCode: string): boolean {
  if (countryCode === 'UNKNOWN') return true;
  if (BLOCKED_COUNTRIES.includes(countryCode)) return false;
  return ALLOWED_REGIONS.includes(countryCode);
}

const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export async function POST(request: NextRequest) {
  try {
    const country = getCountryFromRequest(request);
    
    if (!isAllowedCountry(country)) {
      return NextResponse.json(
        { message: 'Registration is not available in your region' },
        { status: 403 }
      );
    }
    
    const body = await request.json();
    const { email } = emailSchema.parse(body);
    
    if (isFreeEmail(email)) {
      return NextResponse.json(
        { message: 'Please use a business email address. Free email providers are not accepted.' },
        { status: 400 }
      );
    }
    
    await sendLeadNotification(email, country);
    
    return NextResponse.json(
      { message: 'Thank you for your interest! We will contact you soon.' },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: error.errors[0].message },
        { status: 400 }
      );
    }
    
    console.error('Failed to process registration:', error);
    return NextResponse.json(
      { message: 'Failed to register interest. Please try again.' },
      { status: 500 }
    );
  }
}
