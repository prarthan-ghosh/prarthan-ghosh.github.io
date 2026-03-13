import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div class={classNames(displayClass, "page-title-container")}>
      <h2 class="page-title">
        <a href={baseDir}>Home</a>
      </h2>
      <nav class="page-nav">
        <a href={baseDir + "/about"}>About</a>
        <a href={baseDir + "/projects"}>Projects</a>
        <a href={baseDir + "/junkyard"}>Junkyard</a>
      </nav>
    </div>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}

.page-title-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.page-nav {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.page-nav a {
  font-size: 0.9rem;
  text-decoration: none;
  color: var(--gray);
  transition: color 0.2s ease;
}

.page-nav a:hover {
  color: var(--secondary);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
