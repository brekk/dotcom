import Head from "next/head"
import {
  both,
  curry,
  ifElse,
  is,
  last,
  map,
  pipe,
  propOr,
  toPairs,
} from "ramda"
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome"
import blem from "blem"

import ControlPanel from "components/ControlPanel"
import Link from "components/Link"
import HomeButton from "components/HomeButton"
import {
  Pkg,
  PkgCode,
  PkgCodeBlock,
  PkgCodeHeader,
  PkgDetails,
  PkgElsewhere,
  PkgExamples,
  PkgFeature,
  PkgFeature2,
  PkgFeatures,
  PkgFeatures2,
  PkgFlags,
  PkgFlag,
  PkgFlagTitle,
  PkgFlagDetail,
  PkgHeader,
  PkgHeading,
  PkgInstallation,
  PkgLogo,
  PkgMain,
  PkgParagraph,
  PkgSection,
  PkgTitle,
} from "styles/Package"
import Example from "components/Example"
import { isArray, Debug, j2 } from "utils/debug"
import { slug } from "utils/text"

const bem = blem("Package")

const PackageExamples = ({ examples }) => (
  <PkgExamples className={bem("examples")}>
    {examples.map(ex => (
      <Example key={ex.title} {...ex} />
    ))}
  </PkgExamples>
)

const PackageSection = ({ title, children, ...props }) => (
  <PkgSection title={title} {...props} className={bem("section", slug(title))}>
    {title && <h2 className={bem("section-title")}>{title}</h2>}
    {children}
  </PkgSection>
)

const PackageFlags = ({ flags }) => (
  <PackageSection title="Flags">
    <PkgFlags className={bem("flags")}>
      {flags.map(([[longFlag, shortFlag], explanation]) => (
        <PkgFlag key={longFlag} className={bem("flag")}>
          <PkgFlagTitle className={bem("flag-title")}>
            <code className={bem("flag", "long")}>{longFlag}</code>
            {`, `}
            <code className={bem("flag", "short")}>{shortFlag}</code>
          </PkgFlagTitle>
          <PkgFlagDetail className={bem("flag-detail")}>
            {explanation}
          </PkgFlagDetail>
        </PkgFlag>
      ))}
    </PkgFlags>
  </PackageSection>
)

const PackageFeatures = ({ features }) => (
  <PackageSection title="Features">
    <PkgFeatures className={bem("features")}>
      {pipe(
        toPairs,
        map(([k, [base, deets]]) => (
          <PkgFeature key={k} className={bem("feature")}>
            {base}
            {deets && (
              <PkgFeatures2 className={bem("feature-list")}>
                {deets.map((detail, idx) => (
                  <PkgFeature2
                    key={is(Object, detail) ? idx : detail}
                    className={bem("feature-item")}
                  >
                    {detail}
                  </PkgFeature2>
                ))}
              </PkgFeatures2>
            )}
          </PkgFeature>
        ))
      )(features)}
    </PkgFeatures>
  </PackageSection>
)

const SeeElsewhere = ({ name, org, host, source }) => {
  const pkg = org ? org + "/" + name : name
  return (
    <PkgElsewhere className={bem("external")}>
      <Link
        href={`//npmjs.org/package/${pkg}`}
        className={bem("link", ["external", "npm"])}
      >
        See on NPM
        <Icon icon="external-link-square-alt" />
      </Link>
      <Link href={host} className={bem("link", ["external", "source"])}>
        See on {source}
        <Icon icon="external-link-square-alt" />
      </Link>
    </PkgElsewhere>
  )
}

const PackageParagraphs = ({ paragraphs }) => (
  <PackageSection>
    <PkgDetails className={bem("details")}>
      {pipe(
        toPairs,
        map(([k, p]) => (
          <PkgParagraph key={k} className={bem("detail-paragraph")}>
            {p}
          </PkgParagraph>
        ))
      )(paragraphs)}
    </PkgDetails>
  </PackageSection>
)

const Package = ({
  name,
  org,
  logo: Logo,
  examples = [],
  host,
  source,
  paragraphs,
  flags,
  features,
  summary,
}) => {
  return (
    <Pkg className={bem()}>
      <Head>
        <title>Open-Source Package: {name}</title>
        <meta name="description" content={summary} />
      </Head>
      <HomeButton />
      <PkgHeader className={bem("header")}>
        <ControlPanel />
        <SeeElsewhere name={name} org={org} host={host} source={source} />
        <PkgLogo className={bem("logo-container")}>
          <Logo className={bem("logo", name)} />
        </PkgLogo>
        <PkgInstallation
          name={name}
          org={org}
          showPreferencePane
          individual
          className={bem("installation")}
        />
        <PkgTitle className={bem("title")}>{name}</PkgTitle>
        <blockquote className={bem("summary")}>{summary}</blockquote>
      </PkgHeader>
      <PkgMain className={bem("main")}>
        {paragraphs && <PackageParagraphs paragraphs={paragraphs} />}
        {features && <PackageFeatures features={features} />}
        {flags && <PackageFlags flags={flags} />}
        <PackageExamples examples={examples} />
      </PkgMain>
    </Pkg>
  )
}

export default Package
