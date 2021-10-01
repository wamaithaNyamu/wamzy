/** @jsx jsx */
import { jsx, Themed, Button } from "theme-ui"
import { darken, lighten } from "@theme-ui/color"
import { baseColors } from "@theme-ui/preset-tailwind"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

// This is a component that is using component shadowing to shadow an empty Hero component from the base theme. Try playing around with this and modifying it to be a hero you like more!

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      avatar: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  `)
  const avatar = data.avatar.childImageSharp.gatsbyImageData
  return (
    <div
      sx={{
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
        mb: 4,
      }}
    >
      <div
        sx={{
          width: ["auto", null, "90vw", "80vw", "1280px"],
          mx: [0, 3, "auto", null, null],
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          gridTemplateRows: ["180px auto", null, "230px auto", null, null],
        }}
      >
        <GatsbyImage
          image={avatar}
          sx={{
            gridColumn: "2 / 3",
            gridRow: "1 / 2",
            zIndex: 1,
            height: ["250px", null, "300px", null, null],
            width: ["250px", null, "300px", null, null],
            borderRadius: "50%",
            borderColor: "primary",
            borderWidth: "4px",
            borderStyle: "solid",
          }}
          imgStyle={{ borderRadius: "50%" }}
          alt="Wamaitha Nyamu"
        />
        <div
          sx={{
            gridColumn: "1 / -1",
            gridRow: "2 / 3",
            zIndex: 2,
            bg: "primary",
            px: [2, 3, 4, null, null],
            pb: 4,
            textAlign: "center",
            borderRadius: ["0", "0.25rem", null, null, null],
          }}
        >
          <Themed.p
            sx={{
              fontSize: [1, 2, 3, null, null],
              lineHeight: "snug",
              my: 4,
              color: baseColors.gray[8],
            }}
          >
            Hello there!👋🏾👋🏾 My name is <b>Wamaitha</b>. I know this is supposed to be an 'about me' section but how do I choose what to say and what not to say?🤔🤔
            As Linus says <em>Talk is cheap show me the code </em>. That's the best I can do for now. I'm pretty sure you are not interested in knowing my favorite color😅.
            Oh you are? It's black. Definitely has to be black 😁😁. Also you need to read <i>The richest man in Babylon by George Clason</i> if you have'nt. This book changed my life! How you ask ? Oh I'm talking too much? Coool coool... One last thing😼, feel free to contact me on any typo's or clarifications😊😊. Happy hacking!!👩🏾‍💻👩🏾‍💻.Okay one last thing.
            Its the last I promise, subscribe to my <a target='_blank' href="https://www.youtube.com/channel/UCTgufBSxzrj7VSLwEEnu7Jw?sub_confirmation=1">YouTube here</a>.😁😁

          </Themed.p>
          <Button
            as={Link}
            to="/contact"
            sx={{
              fontSize: [2, 3, null, null, null],
              fontWeight: "bold",
              color: baseColors.gray[8],
              bg: lighten("primary", 0.15),
              transition: "all 0.3s ease-in-out",
              borderColor: baseColors.gray[8],
              borderStyle: "solid",
              borderWidth: "4px",
              borderRadius: "9999em",
              ":hover": {
                bg: darken("primary", 0.08),
              },
            }}
          >
            Talk to me 💬💬
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
