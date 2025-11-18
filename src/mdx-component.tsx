import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="text-4xl font-extrabold font-heading mt-10 mb-6 text-primary leading-tight tracking-tight"
        {...props}
      />
    ),

    h2: (props) => (
      <h2
        className="text-3xl font-bold font-heading mt-8 mb-4 text-secondary leading-snug"
        {...props}
      />
    ),

    h3: (props) => (
      <h3
        className="text-2xl font-semibold font-body mt-6 mb-3 text-body-text"
        {...props}
      />
    ),
    h4: (props) => (
      <h3
        className="text-xl font-semibold mt-6 mb-3 text-body-text"
        {...props}
      />
    ),

    p: (props) => (
      <p className="text-base leading-7 text-body-text my-5" {...props} />
    ),

    ul: (props) => (
      <ul
        className="list-disc list-inside space-y-2 text-body-text pl-2"
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="
          list-decimal 
          list-inside 
          space-y-2 
          pl-2 
          text-body-text
          marker:text-primary
        "
        {...props}
      />
    ),

    li: (props) => <li className="leading-7" {...props} />,

    code: (props) => (
      <code
        className="
          bg-[var(--color-bg-light)]
          px-2 py-1
          rounded-md
          text-sm
          font-mono
          text-primary
          border border-[var(--color-secondary)]/20
        "
        {...props}
      />
    ),

    pre: (props) => (
      <pre
        className="
          bg-[var(--color-bg-light)]
          p-4
          rounded-xl
          overflow-x-auto
          text-sm
          border border-[var(--color-secondary)]/30
        "
        {...props}
      />
    ),

    hr: () => <hr className="my-8 border-primary" />,

    blockquote: (props) => (
      <blockquote
        className="
          border-l-4 
          pl-4 
          my-6 
          italic 
          text-accent/30 
          border-[var(--color-primary)]
        "
        {...props}
      />
    ),
    table: (props) => (
      <div className="overflow-x-auto my-6">
        <table
          className="w-full border-collapse rounded-xl overflow-hidden shadow-md"
          {...props}
        />
      </div>
    ),

    thead: (props) => (
      <thead className="bg-primary/10 text-primary font-semibold" {...props} />
    ),

    tbody: (props) => <tbody {...props} />,

    tr: (props) => (
      <tr className="border-b border-gray-200 last:border-none" {...props} />
    ),

    th: (props) => (
      <th
        className="px-4 py-3 text-left text-sm font-semibold border-b border-gray-300"
        {...props}
      />
    ),

    td: (props) => (
      <td className="px-4 py-3 text-sm text-body-text" {...props} />
    ),

    ...components,
  };
}
