/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import TeamCard from "components/team-card";
import { FaGithub, FaUser, FaCommentDots } from "react-icons/fa";

import Member1 from "assets/team/Anand.PNG";
import Member2 from "assets/team/Noor.PNG";
import Member3 from "assets/team/Mahendra.jpeg";
import Member4 from "assets/team/Somu.PNG";

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: "Abhishek Anand",
    title: "Abhishek Anand",
    designation: "Product Analyst",
    socialProfile: [
      {
        id: 1,
        name: "github",
        path: "#",
        icon: <FaGithub />,
      },
      {
        id: 2,
        name: "portfolio",
        path: "#",
        icon: <FaUser />,
      },
      {
        id: 3,
        name: "email",
        path: "mailto:",
        icon: <FaCommentDots />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: "Noor",
    title: "Noor",
    designation: "Creative Designer",
    socialProfile: [
      {
        id: 1,
        name: "github",
        path: "#",
        icon: <FaGithub />,
      },
      {
        id: 2,
        name: "portfolio",
        path: "#",
        icon: <FaUser />,
      },
      {
        id: 3,
        name: "email",
        path: "mailto:",
        icon: <FaCommentDots />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: "Mutukundu Mahendra Reddy",
    title: "Mutukundu Mahendra Reddy",
    designation: "Web Developer",
    socialProfile: [
      {
        id: 1,
        name: "github",
        path: "https://github.com/reddymahendra52",
        icon: <FaGithub />,
      },
      {
        id: 2,
        name: "portfolio",
        path: "https://reddymahendra52.mmm.page/main",
        icon: <FaUser />,
      },
      {
        id: 3,
        name: "email",
        path: "mailto:reddymahendra52@gmail.com",
        icon: <FaCommentDots />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: Member4,
    altText: "Kumar Somu",
    title: "Kumar Somu",
    designation: "Quality Assurance Analyst",
    socialProfile: [
      {
        id: 1,
        name: "github",
        path: "#",
        icon: <FaGithub />,
      },
      {
        id: 2,
        name: "portfolio",
        path: "#",
        icon: <FaUser />,
      },
      {
        id: 3,
        name: "email",
        path: "mailto:",
        icon: <FaCommentDots />,
      },
    ],
  },
];

export default function TeamSection() {
  return (
    <section>
      <Container>
        <SectionHeader
          slogan="our team"
          title="The most qualified and talented individuals"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ["35px 0px", null, 0, null, null, "30px 35px"],
    gridTemplateColumns: [
      "repeat(2,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
};
