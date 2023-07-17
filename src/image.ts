interface LoaderProps {
  src: string;
  width: string,
  quality?: number;
  blur?: number;
}

export default function cloudinaryLoader({ src, width, quality, blur }: LoaderProps) {
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`, `e_blur:${blur || 0}`];

  return `https://res.cloudinary.com/dvrv27c2t/image/upload/${params.join(',')}/v1689486359/rohitkistodev${src}`;
}