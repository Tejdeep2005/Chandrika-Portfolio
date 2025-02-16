import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  id: string; // Add id prop to the interface
  children: ReactNode;
  className?: string;
}

export const AnimatedSection = ({ id, children, className = '' }: AnimatedSectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id={id} className={className} ref={ref}>
      {children}
    </section>
  );
};
