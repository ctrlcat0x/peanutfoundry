import { BlogMdxFrontmatter, getAllBlogs } from "@/lib/markdown";
import { formatDate2, stringToDate } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Peanut Foundry - Guides",
};

export default async function BlogIndexPage() {
  const blogs = (await getAllBlogs()).sort(
    (a, b) => stringToDate(b.date).getTime() - stringToDate(a.date).getTime()
  );
  return (
    <div className="w-full mx-auto flex flex-col gap-1 sm:min-h-[91vh] min-h-[88vh] pt-2">
      <div className="mb-7 flex flex-col gap-2">
        <h1 className="sm:text-3xl text-2xl font-extrabold">
          Blogs & Guides for Websites, Operating Systems and Applications
        </h1>
        <p className="text-muted-foreground sm:text-[16.5px] text-[14.5px]">
          A collection of information on a variety of subjects for which the smaller wiki pages would not suffice. Features <br/> further in-depth knowledge concerning the wiki entires.
        </p>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-4 mb-5">
        {blogs.map((blog) => (
          <BlogCard {...blog} slug={blog.slug} key={blog.slug} />
        ))}
      </div>
    </div>
  );
}

function BlogCard({
  date,
  title,
  description,
  slug,
  cover,
}: BlogMdxFrontmatter & { slug: string }) {
  return (
    <Link
      href={`/guide/${slug}`}
      className="flex flex-col gap-2 items-start border rounded-md py-5 px-3 min-h-[400px]"
    >
      <h3 className="text-md font-semibold -mt-1 pr-7">{title}</h3>
      <div className="w-full">
        <Image
          src={cover}
          alt={title}
          width={400}
          height={180}
          quality={100}
          className="w-full rounded-md object-cover h-[180px] border"
        />
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="flex items-center justify-between w-full mt-auto">
        <p className="text-[13px] text-muted-foreground">
          Published on {formatDate2(date)}
        </p>
      </div>
    </Link>
  );
}
