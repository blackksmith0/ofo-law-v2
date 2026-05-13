import { slugifyTurkish } from "@/lib/utils";

export type TocItem = {
  id: string;
  title: string;
  level: 2 | 3;
};

type MarkdownBlock =
  | { type: "heading"; level: 2 | 3 | 4; title: string; id: string }
  | { type: "list"; items: string[] }
  | { type: "paragraph"; text: string }
  | { type: "spacer"; size: number };

function uniqueId(title: string, counts: Map<string, number>) {
  const base = slugifyTurkish(title);
  const count = counts.get(base) || 0;
  counts.set(base, count + 1);
  return count === 0 ? base : `${base}-${count + 1}`;
}

function parseMarkdownBlocks(markdown: string): MarkdownBlock[] {
  const blocks: MarkdownBlock[] = [];
  const paragraph: string[] = [];
  const list: string[] = [];
  const counts = new Map<string, number>();

  function flushParagraph() {
    if (paragraph.length) {
      blocks.push({ type: "paragraph", text: paragraph.join(" ") });
      paragraph.length = 0;
    }
  }

  function flushList() {
    if (list.length) {
      blocks.push({ type: "list", items: [...list] });
      list.length = 0;
    }
  }

  for (const rawLine of markdown.split(/\r?\n/)) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    const heading = /^(#{2,4})\s+(.+)$/.exec(line);
    if (heading) {
      flushParagraph();
      flushList();
      const level = heading[1].length as 2 | 3 | 4;
      const title = heading[2].trim();
      blocks.push({ type: "heading", level, title, id: uniqueId(title, counts) });
      continue;
    }

    const spacer = /^\[\[spacer:(\d+)\]\]$/.exec(line);
    if (spacer) {
      flushParagraph();
      flushList();
      const requestedSize = Number(spacer[1]);
      const size = Math.min(160, Math.max(20, requestedSize));
      blocks.push({ type: "spacer", size });
      continue;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      list.push(line.replace(/^- /, ""));
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  return blocks;
}

export function extractToc(markdown: string): TocItem[] {
  return parseMarkdownBlocks(markdown)
    .filter((block): block is Extract<MarkdownBlock, { type: "heading" }> => block.type === "heading")
    .filter((block): block is Extract<MarkdownBlock, { type: "heading" }> & { level: 2 | 3 } =>
      block.level === 2 || block.level === 3,
    )
    .map((block) => ({ id: block.id, title: block.title, level: block.level }));
}

export function renderMarkdown(markdown: string) {
  return parseMarkdownBlocks(markdown).map((block, index) => {
    if (block.type === "heading") {
      const HeadingTag = `h${block.level}` as "h2" | "h3" | "h4";
      return <HeadingTag id={block.id} key={index}>{block.title}</HeadingTag>;
    }

    if (block.type === "list") {
      return (
        <ul key={index}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    }

    if (block.type === "spacer") {
      return <div aria-hidden="true" className="article-spacer" key={index} style={{ height: block.size }} />;
    }

    return <p key={index}>{block.text}</p>;
  });
}
