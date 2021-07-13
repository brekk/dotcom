import { toPairs, map, pipe } from "ramda"
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome"

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
  PkgFeatures,
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

const PackageExamples = ({ examples }) => (
  <PkgExamples>
    {examples.map(ex => (
      <Example key={ex.title} {...ex} />
    ))}
  </PkgExamples>
)

const PackageSection = ({ title, children, ...props }) => (
  <PkgSection title={title} {...props}>
    {title && <h2>{title}</h2>}
    {children}
  </PkgSection>
)

const PackageFeatures = ({ features }) => (
  <PackageSection title="Features">
    <PkgFeatures>
      {pipe(
        toPairs,
        map(([k, [base, deets]]) => (
          <PkgFeature key={k}>
            {base}
            <ul>
              {/* TODO: clean up this key mess */}
              {deets.map(detail =>
                Array.isArray(detail) ? (
                  <ul key={detail[0]}>
                    {detail.map(dd =>
                      Array.isArray(dd) ? (
                        <ul key={dd[0]}>
                          {dd.map(d => (
                            <li key={d}>{d}</li>
                          ))}
                        </ul>
                      ) : (
                        <li key={dd}>{dd}</li>
                      )
                    )}
                  </ul>
                ) : (
                  <li key={detail}>{detail}</li>
                )
              )}
            </ul>
          </PkgFeature>
        ))
      )(features)}
    </PkgFeatures>
  </PackageSection>
)

const SeeElsewhere = ({ name, org, host, source }) => (
  <PkgElsewhere>
    <Link href={`//npmjs.org/package/${org}/${name}`}>
      See on NPM
      <Icon icon="external-link-square-alt" />
    </Link>
    <Link href={host}>
      See on {source}
      <Icon icon="external-link-square-alt" />
    </Link>
  </PkgElsewhere>
)

const Package = ({
  name,
  org,
  logo: Logo,
  examples = [],
  host,
  source,
  paragraphs,
  features,
  summary,
}) => {
  return (
    <Pkg>
      <HomeButton />
      <PkgHeader>
        <ControlPanel />
        <SeeElsewhere name={name} org={org} host={host} source={source} />
        <PkgLogo>
          <Logo />
        </PkgLogo>
        <PkgInstallation name={name} org={org} showPreferencePane individual />
        <PkgTitle>{name}</PkgTitle>
        <blockquote>{summary}</blockquote>
      </PkgHeader>
      <PkgMain>
        <PackageSection>
          <PkgDetails>
            {pipe(
              toPairs,
              map(([k, p]) => <PkgParagraph key={k}>{p}</PkgParagraph>)
            )(paragraphs)}
          </PkgDetails>
        </PackageSection>
        <PackageFeatures features={features} />
        <PackageExamples examples={examples} />
      </PkgMain>
    </Pkg>
  )
}

export default Package
