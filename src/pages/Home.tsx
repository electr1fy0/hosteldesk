import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col justify-center items-center">
          <div className="@container/main flex flex-1 flex-col gap-2 w-full px-4">
            <div className="flex justify-between gap-4 w-full my-4">
              <Card className="w-1/3  border-green-200 bg-linear-180 from-green-100 to-green-200">
                <CardHeader>
                  <CardTitle>Resolved</CardTitle>
                  <CardDescription>Solved complaints</CardDescription>
                </CardHeader>
                <CardFooter>
                  <p className="text-4xl">4</p>
                </CardFooter>
              </Card>
              <Card className="w-1/3 bg-linear-180 from-orange-100 to-orange-200 border-orange-200">
                <CardHeader>
                  <CardTitle>Pending</CardTitle>
                  <CardDescription>Pending complaints</CardDescription>
                </CardHeader>
                <CardFooter>
                  <p className="text-4xl">4</p>
                </CardFooter>
              </Card>
              <Card className="w-1/3 bg-linear-180 from-red-100 to-red-200  border-red-200">
                <CardHeader>
                  <CardTitle>Unresolved</CardTitle>
                  <CardDescription>Ignored complaints</CardDescription>
                </CardHeader>
                <CardFooter>
                  <p className="text-4xl">4</p>
                </CardFooter>
              </Card>
            </div>
            <Table>
              <TableCaption>A list of your recent complaints</TableCaption>
              <TableHeader className="px-10">
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Damage</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Last Updated</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Electricity</TableCell>
                  <TableCell>Broken AC</TableCell>
                  <TableCell className="">In Progress</TableCell>
                  <TableCell className="text-right">12 Dec 2025</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
