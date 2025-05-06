
export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>ola estou no about/layout.tsx</h1>
      {children}
    </div>
  );
}