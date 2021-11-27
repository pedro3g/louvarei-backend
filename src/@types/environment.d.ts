/* eslint-disable no-unused-vars */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'production' | 'development'
      PORT: number
      SMTP: string
      SMTP_PORT: string
      SMTP_USER: string
      SMTP_PASS: string
    }
  }
}

export {}
