import { projects } from '@/app/data/projects';
import ClientPage from './ClientPage';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <ClientPage params={params} />;
}
