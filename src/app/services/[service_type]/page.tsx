import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { markdownComponents } from "../../../components/markdown";
import { services } from "../../../lib/constant";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: { service_type: string };
}) {
  const { service_type } = await params;
  const image = services.find((s) => s.code === service_type);
  const filePath = path.join(
    process.cwd(),
    "src/docs/mdx",
    `${service_type}.mdx`
  );

  const fileExists = fs.existsSync(filePath);

  if (!fileExists) {
    return (
      <section className="w-full py-20">
        <div className="max-w-2xl mx-auto text-center text-red-600">
          <h2 className="text-3xl font-bold mb-4">Content Not Found</h2>
          <p className="text-base text-body-text">
            The service you are trying to view does not exist or the file is
            missing.
          </p>
        </div>
      </section>
    );
  }

  const markdown = fs.readFileSync(filePath, "utf8");
  return (
    <section className="w-full bg-bg-light">
      <div className="relative w-full overflow-hidden">
        {/* Next Image */}

        <div className="relative w-full h-72">
          <Image
            src={image?.image ?? ""}
            alt={service_type || ""}
            fill
            className="object-cover"
          />

          {/* This div covers the entire image */}
          <h1
            className="absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
               text-primary/50 text-6xl font-bold drop-shadow-lg"
          >
            {image?.name}
          </h1>
        </div>

        {/* Bottom Mask Gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-bg-light opacity-90"></div>
      </div>
      <div className="px-4 max-w-4xl m-auto">
        <ReactMarkdown
          components={markdownComponents}
          remarkPlugins={[remarkGfm]}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </section>
  );
}
