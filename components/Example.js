import {
  Example as X,
  ExampleTitle as XTitle,
  ExamplePre as XPre,
  ExampleCode as XCode,
} from "styles/Example"
import Link from "components/Link"
import { slug } from "utils/text"
import blem from "blem"
const bem = blem("Example")

export const Example = ({ title, code }) => {
  const hashlink = slug(title)
  return (
    <X id={hashlink} className={bem()}>
      <XTitle className={bem("title")}>
        <Link href={`#${hashlink}`} className={bem("link")}>
          #{" "}
        </Link>
        {title}
      </XTitle>
      <XPre className={bem("pre")}>
        <XCode className={bem("code")}>{code}</XCode>
      </XPre>
    </X>
  )
}

export default Example
