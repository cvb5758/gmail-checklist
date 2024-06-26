import 'next-auth';

declare module 'next-auth' {
  export interface Session {
    accessToken: string;
    refreshToken: string;
  }
}
