import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { markdownComponents } from "../../../components/markdown";

export default async function Page({
  params,
}: {
  params: { service_type: string };
}) {
  const { service_type } = await params;

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
    <section className="w-full bg-bg-light py-10">
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
