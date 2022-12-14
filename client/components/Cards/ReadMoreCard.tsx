import Link from "next/link"
import Image from "next/image"
import P from "../headers/P"

interface ICard {
  cardStyle?: string
  image?: string | any
  imageAlt?: string
  icon?: JSX.Element
  titleStyle?: string
  title?: string
  body: string
  link: string
}

const Card: React.FunctionComponent<ICard> = ({
  cardStyle,
  image,
  imageAlt,
  icon,
  titleStyle,
  title,
  body,
  link,
}) => {
  return (
    <div
      className={`card bg-base-100 card-bordered shadow-lg max-w-fit ${cardStyle}`}
    >
      <div className="w-fit">
        <Image src={image} alt={imageAlt} />
      </div>

      <div className="card-body">
        <h4
          className={`card-title text-base sm:text-lg lg:text-2xl ${titleStyle}`}
        >
          <span>{icon}</span>
          {title}
        </h4>
        <P text={`${body}`} style="p-2" />
        <div className="card-actions justify-center md:justify-end">
          <Link href={`${link}`}>
            <a className="btn btn-link text-accent md:btn-accent md:text-base-100 md:no-underline md:hover:no-underline">
              Read more →
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
