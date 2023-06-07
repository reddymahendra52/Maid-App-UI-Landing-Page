/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid, Box, Heading, Text } from "theme-ui";
import SectionHeader from "components/section-header";

import PatternBG from "assets/patternBG.png";
import ArrowOdd from "assets/arrowOdd.svg";
import ArrowEven from "assets/arrowEven.svg";

const dataCustomer = [
  {
    id: 1,
    title: "Sign Up and Login",
    text: "Get started by signing up and creating your account. Once registered, simply log in to access our user-friendly interface.",
  },
  {
    id: 2,
    title: "Fill in Required Details",
    text: "Tell us a little about your cleaning needs and preferences. Provide essential details such as your location, the desired cleaning schedule, and any specific tasks you require assistance with.",
  },
  {
    id: 3,
    title: "Choose Your Maid",
    text: "Browse through the list of experienced and reliable maids displayed on your personalized dashboard. Each maid is carefully selected and vetted to meet our stringent standards. ",
  },
  {
    id: 4,
    title: "Create a Booking",
    text: "Once you've found the perfect maid, create a booking directly from the app. Select the desired date and time for the maid's visit, ensuring it fits your schedule seamlessly.",
  },
  {
    id: 5,
    title: "Confirm and Make an Advance Payment",
    text: "Upon submitting your booking request, the chosen maid will receive a notification. If the maid accepts the booking, you'll be notified, and we'll request an advance payment of 100 rupees to secure the booking.",
  },
  {
    id: 6,
    title: "Enjoy the Service and Rate the Worker",
    text: "Sit back and relax while your maid takes care of the cleaning tasks. Once the job is completed to your satisfaction, make the remaining payment directly to the maid. ",
  },
];

const dataWorker = [
  {
    id: 1,
    title: "Sign Up and Login",
    text: "Get started by signing up and creating your account. Once registered, simply log in to access our user-friendly interface.",
  },
  {
    id: 2,
    title: "Fill in Required Details",
    text: "Tell us a little about your work and timing preferences. Provide essential details such as your location, the desired cleaning schedule, and any specific tasks you require assistance with.",
  },
  {
    id: 3,
    title: "Receive Booking Notifications",
    text: "Once you're logged in, you'll receive real-time booking notifications on your dashboard. These notifications inform you about new booking requests from customers in your area.  ",
  },
  {
    id: 4,
    title: "Accept or Reject Bookings",
    text: "Evaluate each booking request and make an informed decision. If you are available accept the booking. By accepting, you confirm your commitment to providing your cleaning services to the customer.",
  },
  {
    id: 5,
    title: "Deliver Quality Cleaning Service",
    text: "After accepting a booking, it's time to showcase your expertise! Visit the customer's location at the scheduled date and time and efficiently carry out the requested cleaning tasks.",
  },
  {
    id: 6,
    title: "Receive Final Payment and Provide Feedback",
    text: "Once you've completed the cleaning service to the customer's satisfaction, receive the final payment directly from the customer. ",
  },
];

export default function WorkFlow() {
  return (
    <section sx={styles.workflow}>
      <Container>
        <SectionHeader
          slogan="Workflow"
          title="Let’s see how it works for customers"
          isWhite={true}
        />

        <Grid sx={styles.grid}>
          {dataCustomer.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
        <SectionHeader
          title="Let’s see how it works for workers"
          isWhite={true}
        />
        <Grid sx={styles.grid}>
          {dataWorker.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    backgroundColor: "primary",
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    position: "relative",
    py: [8, null, 9, null, null, 10],
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      "35px 0",
      null,
      "45px 30px",
      null,
      "50px 25px",
      null,
      null,
      "50px 65px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
  card: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    textAlign: ["center", null, "left"],
    width: ["100%", "80%", "100%"],
    mx: ["auto"],
    px: [4, null, null, 0],
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "center center",
      width: 215,
      height: 60,
      "@media screen and (max-width:1220px)": {
        display: "none",
      },
    },
    "&:nth-of-type(2n-1)::before": {
      backgroundImage: `url(${ArrowOdd})`,
    },
    "&:nth-of-type(2n)::before": {
      backgroundImage: `url(${ArrowEven})`,
      top: 17,
    },
    "&:last-child::before": {
      display: "none",
    },
  },

  iconBox: {
    width: ["50px", null, "60px", null, null, "70px"],
    height: ["50px", null, "60px", null, null, "70px"],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    mb: [5, null, null, null, null, 6],
    mx: ["auto", null, 0],
    fontSize: [6, null, 7, null, null, "30px"],
    fontWeight: 700,
    justifyContent: "center",
    color: "#234582",
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: "white",
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: "white",
      opacity: 0.75,
      pr: [0, null, null, null, null, 5],
    },
  },
};
