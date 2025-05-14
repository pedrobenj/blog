import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

type PostCoverImageProps = {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
};

export function PostCoverImage({ imageProps, linkProps }: PostCoverImageProps) {
  return (
    <Link
      {...linkProps}
      className={clsx(
        'w-full h-full overflow-hidden rounded-xl border-radius-xl',
        linkProps.className,
      )}
    >
      <Image
        priority
        {...imageProps}
        className={clsx(
          'w-full h-full group-hover:scale-105 object-center object-cover transition-transform duration-300',
          imageProps.className,
        )}
        alt={imageProps.alt}
      />
    </Link>
  );
}
