// ----------------------------
// Clsx classes //
// ----------------------------
<CaseStudy isHomepage={false} />
const CaseStudy = ({ isHomepage })

className={clsx({
  "max-w-screen-lg mx-auto px-[2rem] bg-[#fff]": isHomepage,
  "text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem]":
    !isHomepage,
})}

// ----------------------------
// Benefits Vertical Slider //
// ----------------------------
<Benefits
  ribbon="Benefits "
  ribbonTxtWhite="true"
  title="Benefits of AI&ML "
  desc="Artificial Intelligence (AI) and Machine Learning (ML) are driving transformative changes offering a multitude of benefits that redefine the way we do business"
  arr={BenefitsData}
></Benefits>;

// ex:
const BenefitsData = [
  {
    _id: 1,
    icon: "gear",
    title: "Process and analyze vast volumes of data",
  },
  {
    _id: 2,
    icon: "diamond",
    title: "Ensure Uniformity in Financial Information",
  },
  {
    _id: 3,
    icon: "eyeGear",
    title: "Boost brand value",
  },
  {
    _id: 4,
    icon: "gear",
    title: "Process and analyze vast volumes of data",
  },
  {
    _id: 5,
    icon: "diamond",
    title: "Ensure Uniformity in Financial Information",
  },
  {
    _id: 6,
    icon: "eyeGear",
    title: "Boost brand value",
  },
];

// ----------------------------
// Why Godrej Infotech //
// ----------------------------

<WhySection
  ribbon="Spend LESS, GROW MORE"
  title="Why Godrej Infotech ?"
  desc="We aim for business faster growth with our extensive client collaboration, and to achieve this, we seek to convert effective pilot initiatives into enterprise-scale implementation, while comprehensively addressing all technical and business requirements."
>
  <AnimatePresence>
    <motion.div
      initial="initial"
      whileInView="animate"
      custom={1}
      viewport={{
        once: true,
      }}
      className="flex flex-row justify-start items-center gap-x-5 bg-white rounded-md p-5 shadow-lg mb-5"
      variants={fadeInAnimationVariant}
    >
      <Image src={checkout} alt="checkout" />
      <p className="text-base font-medium leading-[22px]">
        One of the most dedicated and{" "}
        <span className="text-[#4C6FFF]">reliable partners</span> for Azure
        Migration Services and Managed Cloud Service across{" "}
      </p>
    </motion.div>

    <motion.div
      initial="initial"
      whileInView="animate"
      custom={2}
      viewport={{
        once: true,
      }}
      className="flex flex-row justify-start items-center gap-x-5 bg-white rounded-md p-5 shadow-lg mb-5 sm:ml-10 w-[100%]"
      variants={fadeInAnimationVariant}
    >
      <Image src={checkout} alt="checkout" />
      <p className="text-base font-medium leading-[22px]">
        <span className="text-[#4C6FFF]">1 Billion+</span> Unfailing Cloud
        Hosting availability managing{" "}
        <span className="text-[#4C6FFF]">40000+</span> VMs
      </p>
    </motion.div>

    <motion.div
      initial="initial"
      whileInView="animate"
      custom={3}
      viewport={{
        once: true,
      }}
      className="flex flex-row justify-start items-center gap-x-5 bg-white rounded-md p-5 shadow-lg mb-5 sm:ml-20 w-[100%]"
      variants={fadeInAnimationVariant}
    >
      <Image src={checkout} alt="checkout" />
      <p className="text-base font-medium leading-[22px]">
        <span className="text-[#4C6FFF]">25000+</span> Apps and Databases
        migrated
      </p>
    </motion.div>
  </AnimatePresence>
</WhySection>;

// ----------------------------
// Industry Experts //
// ----------------------------
<IndustryExpertise
  heading="Industry Expertise"
  desc="Being preferred partner of leading industries, we help in
                  shaping specific technology prerequisites and deliver
                  brilliant value driven solutions tailored to your sector"
  list={IndustryExperts}
/>;

// Ex.
const IndustryExperts = [
  {
    _id: 1,
    title: "Manufacturing",
    image: "manufacturing",
  },
  {
    _id: 2,
    title: "Accounts and Finance",
    image: "finance",
  },
  {
    _id: 3,
    title: "HR",
    image: "hr",
  },
  {
    _id: 4,
    title: "IT Infra",
    image: "itinfra",
  },
];

// ----------------------------
// Subscription //
// ----------------------------
<Subscription
  title="Let Us Transform Your"
  blue="Vision into Reality"
  title2=""
  desc="Complete the Form to Begin"
/>;

// ----------------------------
// Accordion //
// ----------------------------
<Accordion items={accordion} />;

// ex,
const accordion = [
  {
    _id: 1,
    icon: "gear",
    title: "Future of Projects  ",
    desc: "",
    cta: "Know More",
    ctaUrl: "/",
    list: [
      {
        title: "External integration with project monitoring tools  ",
        url: "/",
      },
      {
        title: "Mobile applications for task assignment",
        url: "/",
      },
      {
        title: "After sales service",
        url: "/",
      },
      {
        title: "Data Security & Digital Documentation ",
        url: "/",
      },
      {
        title: "Multi site management  ",
        url: "/",
      },
      {
        title: "Project Task Assignment & Management  ",
        url: "/",
      },
      {
        title: "Remote Work and Cost Accuracy   ",
        url: "/",
      },
    ],
  },
  {
    _id: 2,
    icon: "gear",
    title: "IoT Enabled Products ",
    desc: "",
    cta: "Know More",
    ctaUrl: "/",
    list: [
      {
        title: "External integration with project monitoring tools  ",
        url: "/",
      },
      {
        title: "Mobile applications for task assignment",
        url: "/",
      },
      {
        title: "After sales service",
        url: "/",
      },
      {
        title: "Data Security & Digital Documentation ",
        url: "/",
      },
      {
        title: "Multi site management  ",
        url: "/",
      },
      {
        title: "Project Task Assignment & Management  ",
        url: "/",
      },
      {
        title: "Remote Work and Cost Accuracy   ",
        url: "/",
      },
    ],
  },
  {
    _id: 3,
    icon: "gear",
    title: "Supply Chain Management  ",
    desc: "",
    cta: "Know More",
    ctaUrl: "/",
    list: [
      {
        title: "External integration with project monitoring tools  ",
        url: "/",
      },
      {
        title: "Mobile applications for task assignment",
        url: "/",
      },
      {
        title: "After sales service",
        url: "/",
      },
      {
        title: "Data Security & Digital Documentation ",
        url: "/",
      },
      {
        title: "Multi site management  ",
        url: "/",
      },
      {
        title: "Project Task Assignment & Management  ",
        url: "/",
      },
      {
        title: "Remote Work and Cost Accuracy   ",
        url: "/",
      },
    ],
  },
  {
    _id: 4,
    icon: "gear",
    title: "Performance Management ",
    desc: "",
    cta: "Know More",
    ctaUrl: "/",
    list: [
      {
        title: "External integration with project monitoring tools  ",
        url: "/",
      },
      {
        title: "Mobile applications for task assignment",
        url: "/",
      },
      {
        title: "After sales service",
        url: "/",
      },
      {
        title: "Data Security & Digital Documentation ",
        url: "/",
      },
      {
        title: "Multi site management  ",
        url: "/",
      },
      {
        title: "Project Task Assignment & Management  ",
        url: "/",
      },
      {
        title: "Remote Work and Cost Accuracy   ",
        url: "/",
      },
    ],
  },
  // Add more items as needed
];

// ----------------------------
// Capabilities //
// ----------------------------

<Capabilities
  ribbon=" "
  title="Our Capabilities "
  desc="With expertise in project execution, technology implementation and risk mitigation, our capabilities empower the success of mega projects"
/>;

// ----------------------------
// Expertise //
// ----------------------------

{
  /* Expertise */
}
<Expertise
  ribbon="Our Expertise "
  ribbonTxtWhite="true"
  title="Future Outlook with Intelligent Technologies  "
  desc="We are here to build edge and bring technology brilliance with the finest in the industry. Driving the innovation path, we develop better results for businesses across the globe."
  arr={[
    {
      title: "85%",
      desc: "IDC states that 85% of enterprises to merge human expertise with AI, ML& NLP by 2026 ",
    },
    {
      title: "$200B",
      desc: "Forbes forecasts size for AI market by 2026 ",
    },
    {
      title: "$6.6T",
      desc: "PwC Research claims that $6.6T productivity growth is projected by 2030  ",
    },
  ]}
></Expertise>;
