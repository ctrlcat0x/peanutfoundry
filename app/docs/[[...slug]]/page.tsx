import DocsBreadcrumb from "@/components/docs-breadcrumb";
import Pagination from "@/components/pagination";
import Toc from "@/components/toc";
import { page_routes } from "@/lib/routes-config";
import { notFound } from "next/navigation";
import { getDocsForSlug } from "@/lib/markdown";
import { Typography } from "@/components/typography";
import NsfwGate from "@/components/NsfwGate";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function DocsPage(props: PageProps) {
  const params = await props.params;
  const { slug = [] } = params;
  const pathName = slug.join("/");
  const res = await getDocsForSlug(pathName);
  if (!res) notFound();

  const isNsfw = slug[0] === "wiki" && slug[1] === "nsfw";
  const content = (
    <div className="flex items-start gap-10">
      <div className="flex-[4.5] pt-10">
        <DocsBreadcrumb paths={slug} />
        <Typography>
          <h1 className="sm:text-3xl text-2xl !-mt-0.5">
            {res.frontmatter.title}
          </h1>
          <p className="-mt-4 text-muted-foreground sm:text-[16.5px] text-[14.5px]">
            {res.frontmatter.description}
          </p>
          <div>{res.content}</div>
          <Pagination pathname={pathName} />
        </Typography>
      </div>
      <Toc path={pathName} />
    </div>
  );

  return isNsfw ? <NsfwGate>{content}</NsfwGate> : content;
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params;

  const { slug = [] } = params;

  const pathName = slug.join("/");
  const res = await getDocsForSlug(pathName);
  if (!res) return {};
  const { frontmatter } = res;
  return {
    title: "Peanut Foundry - The Wiki",
    description: frontmatter.description,
  };
}

export function generateStaticParams() {
  return page_routes.map((item) => ({
    slug: item.href.split("/").slice(1),
  }));
}
