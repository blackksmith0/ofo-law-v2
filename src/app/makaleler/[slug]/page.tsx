import { redirect } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function LegacyArticlePage({ params }: Props) {
  const { slug } = await params;
  redirect(`/hukuk-yazilari/${slug}`);
}
