import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostCoverImage } from '@/components/PostCoverImage';
import { PostHeading } from '@/components/PostHeading';
import { PostsList } from '@/components/PostsLists';
import SpinLoader from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />
      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <PostCoverImage
          linkProps={{
            href: '/post/safgsaasd',
            className: 'opacity-90'
        }}
          imageProps={{
            src: '/images/img-next-6.png',
            width: 600,
            height: 400,
            alt: 'alt da imagem',
            priority: true,
          }}
        />
        <div className='flex flex-col gap-4 sm:justify-center'>
          <time className='text-slate-600 text-sm' dateTime='2025-04-20'>
            20/04/2025 10:00
          </time>
          <PostHeading as='h1' url='#'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </PostHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In velit
            dolorem est dolor porro, doloribus neque, cumque, voluptatibus quasi
            tenetur quo pariatur accusantium. Quisquam, voluptate.
          </p>
        </div>
      </section>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <p className='text-6xl font-bold text-center py-8'>FOOTER</p>
      </footer>
    </Container>
  );
}
