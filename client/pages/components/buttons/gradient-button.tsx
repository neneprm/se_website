import { NextPage } from "next"
import Link from "next/link"

interface IGradientButton {
  name: string
  link: string
}

const GradientButton: NextPage<IGradientButton> = (props) => {
  const { name, link } = props

  return (
    <Link href={link}>
      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md bg-accent hover:bg-accent-focus border-none text-base-100">
        {name}
      </button>
    </Link>
  )
}

export default GradientButton