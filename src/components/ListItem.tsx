import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"

type Props = {
    post: Meta
}

export default function ListItem({ post }: Props) {
    const { id, title, date } = post
    const formattedDate = getFormattedDate(date)
    const url = `/posts/${id}`;

    return (
        <li className="mt-4 text-2xl dark:text-white/90">
            <Link
                className="underline hover:text-black/70 dark:hover:text-white"
                href={url}>
                {title}
            </Link>
            <br />
            <p className="text-sm mt-1">{formattedDate}</p>
        </li>
    )
}