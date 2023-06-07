/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";

import Cleaning from "assets/key-feature/cleaning.PNG";
import Gardening from "assets/key-feature/gardening.PNG";
import Washing from "assets/key-feature/washing.PNG";
import Maid from "assets/key-feature/maidservice.PNG";

const data = [
  {
    id: 1,
    imgSrc: Cleaning,
    altText: "Cleaning",
    title: "Cleaning",
    text: "Sparkling clean spaces with our professional cleaning services. Leave the scrubbing and dusting to us!",
  },
  {
    id: 2,
    imgSrc: Gardening,
    altText: "Gardening",
    title: "Gardening",
    text: "Transform your outdoor spaces with our expert gardening services. Let us nurture your garden to perfection.",
  },
  {
    id: 3,
    imgSrc: Washing,
    altText: "Washing",
    title: "Washing",
    text: "Say goodbye to laundry woes with our convenient washing services. Fresh, clean clothes delivered right at your home.",
  },
  {
    id: 4,
    imgSrc: Maid,
    altText: "Other works",
    title: "Other works",
    text: "From repairs to installations, our skilled handymen have got you covered. Trust us for all your household tasks.",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        <SectionHeader
          slogan="our services"
          title="Meet the services provided by our product"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
