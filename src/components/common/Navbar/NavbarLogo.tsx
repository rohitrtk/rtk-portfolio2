import Link from "next/link";
import { Typography } from "@lib/MT";

export default function NavbarLogo() {
  return (
    <Typography
      variant="h4"
      className="font-primary font-bold text-dt-light-blue hover:text-dt-orange">
      <Link href="/">rohitkisto.dev</Link>
    </Typography>
  );
}
