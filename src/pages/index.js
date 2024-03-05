import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "All modular",
    description:
      "Build unique instruments, while learning about synthesis step by step",
  },
  {
    text: "Highly accessible",
    description:
      "Affordable kits and simple design for all kinds of users",
  },
  {
    text: "Limitless variability",
    description:
      "Customize your setup and combine with anything you can imagine",
  },
  {
    text: "DIY & Open-source",
    description:
      "Feel free to collaborate, contribute and implement new ideas",
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
    url: "https://github.com/microrack",
  }
]

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <h1>
        <b>microRack</b> —&nbsp;sound all yours
      </h1>
      <StaticImage
        src="../images/synth.jpg"
        loading="eager"
        width={300}
        quality={95}
        formats={["auto", "png"]}
        alt="microRack - the most accessible modular syntesizer"
        style={{ marginBottom: `var(--space-3)` }}
      />
      <div className={styles.textCenter}>
        The most accessible modular synthesizer
      </div>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://forms.gle/CgNbhLSbxbahZK8BA"
        className={styles.button}
      >Join the waitlist</a>
    </div>

    <div className={styles.images}>
      <StaticImage
        src="../images/synth2.jpg"
        loading="eager"
        width={300}
        quality={95}
        formats={["auto", "png"]}
        alt="microRack - accessible modular syntesizer"
        style={{ marginBottom: `var(--space-3)` }}
      />
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
          <a href={link.url} target="_blank" rel="noreferrer">{link.text}</a>
          {i !== moreLinks.length - 1 && <> · </>}
        </React.Fragment>
      ))}
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
