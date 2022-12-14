import Head from "next/head"

import H3 from "../../components/headers/H3"
import H4 from "../../components/headers/H4"
import P from "../../components/headers/P"
import FloatingScrollButton from "../../components/Buttons/FloatingScrollButton"
import BorderButton from "../../components/Buttons/BorderButton"
import KmitlStudentInfo from "../../components/Internships/KmitlStudentsInfo"
import GlasgowStudentInfo from "../../components/Internships/GlasgowStudentsInfo"
import CompaniesInfo from "../../components/Internships/CompaniesInfo"

const Internships = () => {
  return (
    <>
      <Head>
        <title>SE Internships | KMITL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FloatingScrollButton />

      <section className="container mx-auto my-4">
        <H3 style="text-gradient font-bold text-center" text="INTERNSHIPS" />
      </section>

      <section className="mb-8">
        <H4
          style="font-bold mb-4 text-primary"
          text="Software Industrial Internships"
        />
        <P text="The Software Industrial Internship is a required component of the B.Eng. in Software Engineering program. The objectives are for the students to gain work experience in the software industry and to understand the role of a software engineer in business and the society. Every student is expected to undertake an internship position related to software development in a company in Thailand or abroad during the summer semester at the end of the second year of their study." />
      </section>

      <section className="mb-8 space-y-4">
        <KmitlStudentInfo />
        <GlasgowStudentInfo />
        <CompaniesInfo />
      </section>

      <section className="flex justify-center mb-8">
        <BorderButton
          text="← Back to Program"
          link="/program"
          style="btn-secondary"
        />
      </section>
    </>
  )
}

export default Internships
