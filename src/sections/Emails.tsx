'use client'; // If you're using Next.js App Router
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import { TechIcon } from '@/components/TechIcon';
import githubIcon from '@/assets/icons/github.svg';
import linkedinIcon from '@/assets/icons/linkedin.svg';

export const Emails = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    emailjs.sendForm(
      'service_hwb0k4h',   // <-- replace this
      'template_42bj8bs',  // <-- replace this
      formRef.current,
      'QeMTbA0pQuli9EUD9'    // <-- replace this
    )
    .then((result) => {
      console.log(result.text);
      setSuccess(true);
      setLoading(false);
      formRef.current?.reset();
    }, (error) => {
      console.error(error.text);
      setLoading(false);
    });
  };

   return (
    <section className='grid md:grid-cols-2 gap-8 container px-4 md:px-0'>
        <div>
            <h5 className='text-xl font-bold text-white my-2'>Let's connect</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                If you have any questions or just want to say hi, feel free to reach out via email. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className='socials flex flex-row gap-4'>
                <Link href="https://github.com/Danturay">
                    <TechIcon component={githubIcon} className="size-10 md:size-12" />
                </Link>
                <Link href="https://www.linkedin.com/in/dante-turay/">
                    <TechIcon component={linkedinIcon} className="size-10 md:size-12" />
                </Link>
            </div>
        </div>
        <div>
            <form ref={formRef} onSubmit={sendEmail} className='flex flex-col'>
                <div className='mb-6'>
                    <label htmlFor='from_email' className='text-white block mb-2 text-sm font-medium'>Your Email</label>
                    <input type='email' id='from_email' name='from_email' required className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='jacob@google.com'/>
                </div>
                <div className='mb-6'>
                    <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>Subject</label>
                    <input type='text' id='subject' name='subject' required className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='Hello'/>
                </div>
                <div className='mb-6'>
                    <label htmlFor='message' className='text-white block mb-2 text-sm font-medium'>Message</label>
                    <textarea id='message' name='message' required className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='Your message here...'></textarea>
                </div>
                <button
                    type='submit'
                    disabled={loading}
                    className='bg-[#C4A045] text-gray-950 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-[#F3DFA7] transition-colors duration-300'
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
                {success && <p className="text-green-500 mt-4">Your message has been sent!</p>}
            </form>
        </div>
    </section>
  );
};
