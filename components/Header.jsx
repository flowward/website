import Link from "next/link"
import { Button } from "./ui/button"
import { Span } from "next/dist/trace"

// components
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* LOGO */}
            {/* <Link href="/">
            <h1 className="text-4xl font semibold">
                flowward<span className="text-accent">.</span>
            </h1>
            </Link> */}

            {/* DESKTOP NAV */}
            {/* CONTACT US BUTTON */}
            {/* <div className="hidden xl:flex justify-center item-center gap-8">
                <Nav/>
                <Link href="/contact">
                    <Button>CONTACT US</Button>
                </Link>
            </div> */}

            {/* MOBILE NAV */}
            {/* <div className="xl:hidden">
                <MobileNav/>
            </div> */}

        </div>
    </header>
  )
}

export default Header