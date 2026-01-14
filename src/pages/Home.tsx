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

import IssueTable from "@/components/issue-table";
import { CheckCircle, CircleAlert, CircleDashed } from "lucide-react";
import { IconCirclePlusFilled } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useIssues } from "../hooks/use-issues";

export default function Home({ onLogout }: { onLogout: () => void }) {
  const { issues, submitComplaint, setPage, updateIssue } = useIssues();
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
        <SiteHeader onLogout={onLogout} />
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
              {/* This div wraps the header/button and the table */}
              <div className="flex justify-between items-center py-4">
                <h2 className="text-2xl font-bold">Issues</h2>
                <Dialog>
                  <form>
                    <DialogTrigger asChild>
                      <Button variant="default">
                        {" "}
                        <IconCirclePlusFilled />
                        New Complaint
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Create Issue</DialogTitle>
                        <DialogDescription>
                          Fill all details of your issue to get it resolved
                          quickly.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4">
                        <div className="grid gap-3">
                          <Label htmlFor="title">Title</Label>
                          <Input
                            id="issue-title"
                            name="title"
                            placeholder="Broken AC"
                            onChange={(e) =>
                              updateIssue({ title: e.target.value })
                            }
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="room-info">Room</Label>
                          <Input
                            id="room-info"
                            name="room"
                            placeholder="T123"
                            onChange={(e) => {
                              updateIssue({ room: e.target.value });
                            }}
                          />
                        </div>{" "}
                        <div className="grid gap-3">
                          <Label htmlFor="category">Category</Label>
                          <Input
                            id="category"
                            name="category"
                            placeholder="Electricity"
                            onChange={(e) => {
                              updateIssue({ category: e.target.value });
                            }}
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="priority">Priority</Label>
                          <Input
                            id="username-1"
                            name="priority"
                            placeholder="Medium"
                            onChange={(e) => {
                              updateIssue({ priority: e.target.value });
                            }}
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <DialogClose asChild>
                          <Button onClick={submitComplaint} type="submit">
                            Submit
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </form>
                </Dialog>
                {/*<Button onClick={submitComplaint}>
                  <IconCirclePlusFilled />
                  New Complaint
                </Button>*/}
              </div>
              <IssueTable issues={issues} />
              <Button
                onClick={() => {
                  setPage((prev) => {
                    return { offset: prev.offset, limit: prev.limit + 1 };
                  });
                }}
              >
                Load More
              </Button>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
