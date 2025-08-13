// components/EmailTemplate.tsx

type Props = {
  email: string;
  subject: string;
  message: string;
};

export const EmailTemplate = ({ email, subject, message }: Props) => (
  <div>
    <p><strong>From:</strong> {email}</p>
    <p><strong>Subject:</strong> {subject}</p>
    <p>{message}</p>
  </div>
);
