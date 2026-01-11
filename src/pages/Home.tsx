import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import data from "../data.json";
import { CheckCircle, CircleAlert, CircleDashed } from "lucide-react";
import { IconCirclePlusFilled } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

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
        <div className="flex flex-1 flex-col ">
          <div className="@container/main flex flex-1 flex-col gap-2 w-full p-4">
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full my-4">
              <Card className="flex-1 border-green-200 bg-linear-180 from-green-100 to-green-200 py-3 md:py-6 gap-2 md:gap-6">
                <CardHeader className="flex flex-row items-center justify-between px-4 md:px-6">
                  <div className="flex flex-col">
                    <CardTitle className="text-sm md:text-base">
                      Resolved
                    </CardTitle>
                    <CardDescription className="text-xs md:text-sm">
                      Solved complaints
                    </CardDescription>
                  </div>
                  <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-700" />
                </CardHeader>
                <CardFooter className="px-4 md:px-6">
                  <p className="text-2xl md:text-4xl">4</p>
                </CardFooter>
              </Card>
              <Card className="flex-1 bg-linear-180 from-orange-100 to-orange-200 border-orange-200 py-3 md:py-6 gap-2 md:gap-6">
                <CardHeader className="flex flex-row items-center justify-between px-4 md:px-6">
                  <div className="flex flex-col">
                    <CardTitle className="text-sm md:text-base">
                      Pending
                    </CardTitle>
                    <CardDescription className="text-xs md:text-sm">
                      Pending complaints
                    </CardDescription>
                  </div>
                  <CircleDashed className="w-6 h-6 md:w-8 md:h-8 text-orange-700" />
                </CardHeader>
                <CardFooter className="px-4 md:px-6">
                  <p className="text-2xl md:text-4xl">4</p>
                </CardFooter>
              </Card>
              <Card className="flex-1 bg-linear-180 from-red-100 to-red-200 border-red-200 py-3 md:py-6 gap-2 md:gap-6">
                <CardHeader className="flex flex-row items-center justify-between px-4 md:px-6">
                  <div className="flex flex-col">
                    <CardTitle className="text-sm md:text-base">
                      Unresolved
                    </CardTitle>
                    <CardDescription className="text-xs md:text-sm">
                      Ignored complaints
                    </CardDescription>
                  </div>
                  <CircleAlert className="w-6 h-6 md:w-8 md:h-8 text-red-700" />
                </CardHeader>
                <CardFooter className="px-4 md:px-6">
                  <p className="text-2xl md:text-4xl">4</p>
                </CardFooter>
              </Card>
            </div>
            <div>
              {" "}
              {/* This div wraps the header/button and the table */}
              <div className="flex justify-between items-center py-4">
                <h2 className="text-2xl font-bold">Issues</h2>
                <Button>
                  <IconCirclePlusFilled />
                  New Complaint
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Room</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Assignee</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((issue) => (
                    <TableRow key={issue.id}>
                      <TableCell className="font-medium">{issue.id}</TableCell>
                      <TableCell>{issue.title}</TableCell>
                      <TableCell>{issue.room}</TableCell>
                      <TableCell>{issue.category}</TableCell>
                      <TableCell>{issue.status}</TableCell>
                      <TableCell>{issue.priority}</TableCell>
                      <TableCell>{issue.assignee}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
