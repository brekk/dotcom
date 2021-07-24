import {
  Example as X,
  ExampleTitle as XTitle,
  ExamplePre as XPre,
  ExampleCode as XCode,
} from "styles/Example"
import Link from "components/Link"
import { slug } from "utils/text"

export const Example = ({ title, code }) => {
  const hashlink = slug(title)
  return (
    <X id={hashlink}>
      <XTitle>
        <Link href={`#${hashlink}`}># </Link>
        {title}
      </XTitle>
      <XPre>
        <XCode>{code}</XCode>
      </XPre>
    </X>
  )
}

export default Example
