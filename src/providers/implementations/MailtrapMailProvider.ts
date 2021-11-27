import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import { IMailProvider, IMessage } from '@providers/IMailProvider'

export class MailTrapMailProvider implements IMailProvider {
  private transporter: Mail

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP,
      port: process.env.SMTP_PORT as unknown as number,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  }

  async sendMail(message: IMessage): Promise<void> {
    this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body,
    })
  }
}
