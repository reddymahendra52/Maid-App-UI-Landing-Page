/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import TextFeature from "components/text-feature";
import Image from "components/image";

import FeatureThumb from "assets/maidworking.jpg";
import shapePattern from "assets/shape-pattern2.png";

const data = {
  subTitle: "Core feature",
  title: "Real-time Booking and Scheduling  anytime & anywhere",
  description:
    "Seamlessly book maid services and manage availability in real-time for ultimate convenience and efficiency.",
  btnNameworker: "Get Started as Worker",
  btnURLworker: "#",
  clientName: "Get Started as Client",
  clientURL: "#",
};

export default function CoreFeature() {
  return (
    <section sx={{ variant: "section.coreFeature" }} id="core-features">
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnNameworker}
            btnURL={data.btnURLworker}
            clientName={data.clientName}
            clientURL={data.clientURL}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={FeatureThumb} alt="Thumbnail" />
          <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt="Shape" />
          </Box>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: ["wrap", null, null, "nowrap"],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, "30px", 0],
    textAlign: ["center", null, null, "left"],
    width: ["100%", "80%", null, 340, 400, 430, null, 485],
    pb: ["50px", "60px", null, 0],
    mx: ["auto", null, null, 0],
    ".description": {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: "inline-flex",
    position: "relative",
    mr: "auto",
    ml: ["auto", null, null, null, 7],
    "> img": {
      position: "relative",
      zIndex: 1,
      height: [310, "auto"],
    },
  },
  shapeBox: {
    position: "absolute",
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ["none", "inline-block", "none", null, "inline-block"],
  },
};
