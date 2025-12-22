import { Link } from "react-router";

export default function NavbarButton({ slug, title }) {
    return (
        <Link
            className={`h-20 w-60 flex items-center justify-center`}
            to={slug}
        >
            {title}
        </Link>
    );
}
