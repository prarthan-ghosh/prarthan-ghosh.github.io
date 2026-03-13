import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {},
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) =>
        page.fileData.slug !== "index" &&
        page.fileData.slug !== "about" &&
        page.fileData.slug !== "projects",
    }),
    Component.ArticleTitle(),
    Component.ConditionalRender({
      component: Component.TagList(),
      condition: (page) =>
        page.fileData.slug !== "about" && page.fileData.slug !== "projects",
    }),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) =>
        page.fileData.slug !== "index" &&
        page.fileData.slug !== "about" &&
        page.fileData.slug !== "projects",
    }),
  ],
  left: [
    Component.ConditionalRender({
      component: Component.PageTitle(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.MobileOnly(Component.Spacer()),
      condition: (page) =>
        page.fileData.slug !== "index" &&
        page.fileData.slug !== "about" &&
        page.fileData.slug !== "projects",
    }),
    Component.ConditionalRender({
      component: Component.Flex({
        components: [
          {
            Component: Component.Search(),
            grow: true,
          },
          { Component: Component.Darkmode() },
          { Component: Component.ReaderMode() },
        ],
      }),
      condition: (page) =>
        page.fileData.slug !== "index" &&
        page.fileData.slug !== "about" &&
        page.fileData.slug !== "projects",
    }),
    Component.ConditionalRender({
      component: Component.Explorer({
        filterFn: (node) =>
          node.slugSegment !== "tags" &&
          node.slugSegment !== "about" &&
          node.slugSegment !== "projects",
      }),
      condition: (page) =>
        page.fileData.slug !== "index" &&
        page.fileData.slug !== "about" &&
        page.fileData.slug !== "projects",
    }),
  ],
  right: [
    Component.ConditionalRender({
      component: Component.Graph(),
      condition: (page) =>
        page.fileData.slug !== "index" &&
        page.fileData.slug !== "about" &&
        page.fileData.slug !== "projects",
    }),
    Component.ConditionalRender({
      component: Component.DesktopOnly(Component.TableOfContents()),
      condition: (page) =>
        page.fileData.slug !== "index" &&
        page.fileData.slug !== "about" &&
        page.fileData.slug !== "projects",
    }),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.ConditionalRender({
      component: Component.PageTitle(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      filterFn: (node) =>
        node.slugSegment !== "tags" &&
        node.slugSegment !== "about" &&
        node.slugSegment !== "projects",
    }),
  ],
  right: [],
}
