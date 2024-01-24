import { ModeToggle } from "@/components/ui/theme-toggle";
import { Card, CardHeader, CardTitle, } from "@/components/ui/card"

const Navbar: React.FC = () => {
  return (
    <Card className="flex flex-row justify-center items-center gap-4 w-1/2 h-12" >

      <CardHeader>
        <CardTitle>GitHub Unfollowers Finder</CardTitle>
      </CardHeader>

      <ModeToggle />
    </Card>
  )
}

export default Navbar