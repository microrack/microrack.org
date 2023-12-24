import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "All modular",
    description:
      "Get complete kit and build unique instrument, learn about synthesis and explore sound with no limits!",
  },
  {
    text: "Highly accessible",
    description:
      "All parts are very low cost and you can find them at the nearest components shop.",
  },
  {
    text: "DIY & Open-source",
    description:
      "All hardware and software are fully open-sourced. Feel free to contribute your ideas.",
  },
  {
    text: "Impressing & Educative",
    description:
      "Learn by tutorials, connect to any device you can imagine and enjoy limitless sound variability!",
  }
]
const moreLinks = [
  {
    text: "Instagram",
    url: "https://instagram.com/microrack.synth"
  },
  {
    text: "Telegram",
    url: "https://t.me/microrack",
  },
  {
    text: "GitHub",
    url: "https://githib.com/microrack",
  }
]

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <h1 className={styles.heading}>
        micro<b>Rack</b> — sound is all yours!
      </h1>
    </div>

    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <h3>
            {link.text}
          </h3>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>

    <div className={styles.textCenter}>
      {moreLinks.map((link, i) => (
        <React.Fragment key={link.url}>
          <a href={link.url}>{link.text}</a>
          {i !== moreLinks.length - 1 && <> · </>}
        </React.Fragment>
      ))}
    </div>

    <div className={styles.textCenter}>
      <StaticImage
        src="../images/synth.jpg"
        loading="eager"
        width={300}
        quality={95}
        formats={["auto", "png"]}
        alt="microRack - accessible modular syntesizer"
        style={{ marginBottom: `var(--space-3)` }}
      />
    </div>

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="μR" />

export default IndexPage
