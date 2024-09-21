import React from 'react'
import PageContent from './PageContent';
import NewsletterSignup from '../components/NewsletterSignup'


const NewsletterPage = () => {
  return (
      <PageContent title='Join our awsome newsletter' >
      <NewsletterSignup />
      </PageContent>
  )
}

export default NewsletterPage;

export const action = async ({ request }) => {
    const data = await request.formData();
    const email = data.get('email');

    // send backend newsletter server...
    console.log(email);

    return { message: 'Sign up successful!' };
}