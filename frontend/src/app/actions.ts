'use server';

import { cookies } from 'next/headers';

export const setCookie = async (name: string, value: string) => {
  const expirationDate = new Date();
  expirationDate.setMonth(expirationDate.getMonth() + 1);

  cookies().set(name, value, {
    httpOnly: true,
    expires: expirationDate,
    // secure: false,
    // sameSite: 'none',
  });
};

export const checkCookie = (name: string): boolean => {
  return cookies().has(name);
};
