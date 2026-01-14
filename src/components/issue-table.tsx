import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Issue } from "@/types";

type IssueTableProps = {
  issues: Issue[];
};

function IssueTable({ issues }: IssueTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {/*<TableHead className="w-[100px]">ID</TableHead>*/}
          <TableHead>Title</TableHead>
          <TableHead>Room</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Assignee</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {issues.length > 0 &&
          issues[0].id &&
          issues.map((issue) => (
            <TableRow key={issue.id}>
              {/*<TableCell className="font-medium">{issue.id}</TableCell>*/}
              <TableCell>{issue.title}</TableCell>
              <TableCell>{issue.room}</TableCell>
              <TableCell>{issue.category}</TableCell>
              <TableCell>{issue.priority}</TableCell>
              {/*<TableCell>{issue.status}</TableCell>*/}
              {/*<TableCell>{issue.assignee}</TableCell>*/}
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

export default IssueTable;
