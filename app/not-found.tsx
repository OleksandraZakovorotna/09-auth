import { Metadata } from 'next';
import css from './not-found.module.css';

export const metadata: Metadata = {
  title: "404 - Page not found",
  description: "Sorry, the page you are looking for does not exist.",
  openGraph: {
      title: "404 - Page not found",
      url: "https://localhost:3000/404",
    description: "Sorry, the page you are looking for does not exist.",
    images: [
      {
        url: 'https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_1280.png',
        width: 1200,
        height: 630,
        alt: 'Page not found',
      },]
  }
}

export default function NotFound() {
    
    return (
        <div className={css.container}>
            <h1 className={css.title}>404 - Page not found</h1>
            <p className={css.description}>Sorry, the page you are looking for does not exist.</p>
        </div>

    )
}