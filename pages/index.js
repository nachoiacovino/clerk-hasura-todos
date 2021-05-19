import { SignedIn, SignedOut } from '@clerk/clerk-react'
import { ArrowRightIcon, CogIcon, PencilAltIcon, UserAddIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

const SignupLink = () => (
  <Link href='/sign-up'>
    <a className={styles.cardContent}>
      <UserAddIcon className='h-7 w-7 text-blue-500' />
      <div>
        <h3>Create an account to start saving todos!</h3>
        <p>This application is auth protected. Create an account to begin.</p>
      </div>
      <div className={styles.arrow}>
        <ArrowRightIcon className='h-6 w-6 text-blue-500' />
      </div>
    </a>
  </Link>
);

const SeeTodos = () => (
  <Link href='/todos'>
    <a className={styles.cardContent}>
      {/* <img src='/icons/user-plus.svg' /> */}
      <PencilAltIcon className='h-7 w-7 text-blue-500' />
      <div>
        <h3>Start saving your todos!</h3>
        <p>
          Add new todos and mark them as completed. Everything will be saved in
          your account!
        </p>
      </div>
      <div className={styles.arrow}>
        <ArrowRightIcon className='h-6 w-6 text-blue-500' />
      </div>
    </a>
  </Link>
);

// Main component using <SignedIn> & <SignedOut>.
//
// The SignedIn and SignedOut components are used to control rendering depending
// on whether or not a visitor is signed in.
//
// https://docs.clerk.dev/frontend/react/signedin-and-signedout
const Main = () => (
  <main className={styles.main}>
    <h1 className={styles.title}>Fullstack todos!</h1>
    <p className={styles.description}>Bringing fullstack to the frontend</p>

    <div className={styles.cards}>
      <div className={styles.card}>
        <SignedIn>
          <SeeTodos />
        </SignedIn>
        <SignedOut>
          <SignupLink />
        </SignedOut>
      </div>

      <div className={styles.card}>
        <Link href='https://dashboard.clerk.dev'>
          <a target='_blank' rel='noreferrer' className={styles.cardContent}>
            <CogIcon className='h-7 w-7 text-blue-500' />
            <div>
              <h3>Configure settings for your app</h3>
              <p>
                Visit Clerk to manage instances and configure settings for user
                management, theme, and more
              </p>
            </div>
            <div className={styles.arrow}>
              <ArrowRightIcon className='h-6 w-6 text-blue-500' />
            </div>
          </a>
        </Link>
      </div>
    </div>

    <div className={styles.links}>
      <Link href='https://docs.clerk.dev'>
        <a target='_blank' rel='noreferrer' className={styles.link}>
          <span className={styles.linkText}>Read Clerk documentation</span>
        </a>
      </Link>
      <Link href='https://nextjs.org/docs'>
        <a target='_blank' rel='noreferrer' className={styles.link}>
          <span className={styles.linkText}>Read NextJS documentation</span>
        </a>
      </Link>
    </div>
  </main>
);

// Footer component
const Footer = () => (
  <footer className={styles.footer}>
    <a
      href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
      target='_blank'
      rel='noopener noreferrer'
    >
      Powered by{" "}
      <img src='/clerk.svg' alt='Clerk.dev' className={styles.logo} />
      +
      <img src='/nextjs.svg' alt='Next.js' className={styles.logo} />
    </a>
  </footer>
);

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <link rel='icon' href='/favicon.ico' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0'
      ></meta>
    </Head>
    <Main />
    <Footer />
  </div>
);

export default Home;
