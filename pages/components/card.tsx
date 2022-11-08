import Link from "next/link"

import {P} from "./headers"

interface ICard {
    cardStyle?: string,
    image?: JSX.Element
    icon?: JSX.Element,
    titleStyle?: string,
    title?: string,
    body?: string,
    link: string
}

const Card: React.FunctionComponent<ICard> = ({ cardStyle, image, icon, titleStyle, title, body, link }) => {
    return (
        <div className={`card bg-base-100 card-bordered shadow-lg ${cardStyle}`}>
            {image}
            <div className="card-body">
                <h2 className={`card-title ${titleStyle}`}>
                    <span>{icon}</span>{title}</h2>
                <P text={`${body}`} />
                <div className="card-actions justify-end">
                    <button className="btn btn-accent text-base-100">
                        <Link href={`${link}`}><a>Read more →</a></Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card