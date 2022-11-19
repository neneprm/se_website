import { H4, P } from "./headers"

interface ISubjectCard {
  cardStyle?: string
  id: string
  subject: string
  prerequisite: string
  program: string
  credit: string
  description: string
}

const SubjectCard: React.FunctionComponent<ISubjectCard> = ({
  cardStyle,
  id,
  subject,
  prerequisite,
  program,
  credit,
  description,
}) => {
  return (
    <div
      className={`card bg-base-100 card-bordered shadow-lg max-w-fit ${cardStyle}`}
    >
      <div className="card-body">
        <H4 text={`${id} : ${subject}`} />
        <p className="text-sm">Prerequisite : {prerequisite}</p>
        <p className="text-sm">Program : {program}</p>
        <p className="text-sm">Credit : {credit}</p>
        <p className="text-sm">Description : {description}</p>
      </div>
    </div>
  )
}

export default SubjectCard