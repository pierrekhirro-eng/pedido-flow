interface LojaPageProps {
  params: Promise<{ slug: string }>;
}

export default async function LojaPage({ params }: LojaPageProps) {
  const { slug } = await params;
  return <main>Loja: {slug}</main>;
}
