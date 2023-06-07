/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Performance from "assets/feature/performance.svg";
import Support from "assets/feature/support.svg";
import Booking from "assets/feature/booking.PNG";
import Trusted from "assets/feature/trusted.PNG";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Easy Maid Booking",
    title: "Easy Maid Booking",
    text: " Our app streamlines the process of finding and booking maids according to your specific requirements. With just a few taps, you can browse through a curated list of experienced and background-checked maids, choose the one that best suits your needs, and schedule their services at your preferred date and time.",
  },
  {
    id: 2,
    imgSrc: Booking,
    altText: "Flexible Scheduling",
    title: "Flexible Scheduling",
    text: "We understand that your schedule is unique, and our app accommodates your preferences. Whether you need a maid for a one-time deep cleaning, regular weekly maintenance, or special occasions, our platform allows you  book maids on-demand to fit seamlessly into your busy lifestyle.",
  },
  {
    id: 3,
    imgSrc: Trusted,
    altText: "Trusted and Verified Maids",
    title: "Trusted and Verified Maids",
    text: " Your peace of mind is our top priority. We rigorously screen and vet all maids on our platform to ensure they meet our high standards of professionalism, trustworthiness, and experience. You can review their profiles, read customer ratings and reviews, and make an informed decision based on the feedback of other satisfied users.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Customer Support",
    title: "Customer Support",
    text: "Our dedicated support team is available to assist you throughout your maid hiring and management journey. Whether you have questions, need assistance, or want to provide feedback, we're here to help ensure your experience with our app is exceptional.",
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader
          slogan="Quality features"
          title="Amazing useful features"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
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
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      "40px 0",
      null,
      "45px 30px",
      null,
      "60px 50px",
      "70px 50px",
      null,
      "80px 90px",
    ],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
  },
};
