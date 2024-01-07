import axios from "axios";
const ProjectStatus: any = {
  REVIEW: "under_review",
  VERIFIED: "verification_successful",
  FAILED: "verification_failed",
};

enum NotionConfig {
  API_URL = "https://api.notion.com/v1",
  NOTION_VERSION = "2022-06-28",
}

async function handler(obj: any) {
  const { data } = obj;

  const record = {
    parent: {
      database_id: "b65bbe1fcede48cdb13a507638c53932",
    },
    properties: {
      "Project Name": {
        title: [{ text: { content: "Snappy" } }],
      },
      ...(data.status == undefined
        ? undefined
        : {
            "Project Status": {
              select: {
                name: ProjectStatus[data.status],
              },
            },
          }),

      ...(data.short_description == undefined
        ? undefined
        : {
            "Short Description": {
              rich_text: [
                {
                  type: "text",
                  text: {
                    content: data.short_description,
                    link: null,
                  },
                  annotations: {
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    code: false,
                    color: "default",
                  },
                  plain_text: data.short_description,
                  href: null,
                },
              ],
            },
          }),
      ...(data.twitter_handle == undefined
        ? undefined
        : {
            Twitter: {
              url: data.twitter_handle,
            },
          }),
      ...(data.github_link == undefined
        ? undefined
        : {
            Github: {
              url: data.github_link,
            },
          }),
      ...(data.discord_link == undefined
        ? undefined
        : {
            Discord: {
              url: data.discord_link,
            },
          }),
      ...(data.telegram_link == undefined
        ? undefined
        : {
            Telegram: {
              url: data.telegram_link,
            },
          }),
      ...(data.failedReason == undefined
        ? undefined
        : {
            "Failed Reason": {
              rich_text: [
                {
                  type: "text",
                  text: {
                    content: data.failedReason,
                    link: null,
                  },
                  annotations: {
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    code: false,
                    color: "default",
                  },
                  plain_text: data.failedReason,
                  href: null,
                },
              ],
            },
          }),
      ...(data.long_description == undefined
        ? undefined
        : {
            "Long Description": {
              rich_text: [
                {
                  type: "text",
                  text: {
                    content: data.long_description,
                    link: null,
                  },
                  annotations: {
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    code: false,
                    color: "default",
                  },
                  plain_text: data.long_description,
                  href: null,
                },
              ],
            },
          }),
      "Created Date": {
        date: {
          start: new Date(),
        },
      },
    },
  };
  try {
    const response = await axios.post(NotionConfig.API_URL + "/pages", record, {
      headers: {
        "Notion-Version": NotionConfig.NOTION_VERSION,
        "Content-Type": "application/json",
        Authorization: ``,
      },
    });

    console.log(record.properties);

  } catch (error) {
    console.log(error);

  }
}

handler({
    data: {
        status: 'REVIEW',
        short_description: 'A project to help people',
        twitter_handle: 'https://twitter.com/nabhag',
        long_description: 'A project to help people',
    }
}).then(() => console.log('done')).catch(console.error);
