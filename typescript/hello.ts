import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({
  auth: "",
});

const notionToMarkdown = new NotionToMarkdown({ notionClient: notion });
(async () => {
  const mdblocks = await notionToMarkdown.pageToMarkdown(
    ""
  );
  const mdString = notionToMarkdown.toMarkdownString(mdblocks);

  console.log(mdString);
})();
