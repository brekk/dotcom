import NextLink from "next/link"
import RawLink from "styles/Link"

const Link = props => (
  <NextLink {...props} passHref>
    <RawLink {...props}>{props.children}</RawLink>
  </NextLink>
)

export default Link
