import {
  Example as X,
  ExampleTitle as XTitle,
  ExamplePre as XPre,
  ExampleCode as XCode,
} from "styles/Example"
import Link from "components/Link"

export const Example = ({ title, code }) => {
  const hashlink = title.toLowerCase().replace(/\s/g, "-")
  return (
    <X>
      <XTitle title={hashlink}>
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
