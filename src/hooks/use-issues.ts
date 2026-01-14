import { useState, useEffect } from "react";
import type { Pagination, Issue } from "@/types";
export function useIssues() {
  const [page, setPage] = useState<Pagination>({ limit: 0, offset: 0 });
  const [issues, setIssues] = useState<Issue[]>([]);
  const [issue, setIssue] = useState<Issue>({
    title: "broken ac",
    room: "T918",
    category: "Electricity",
    priority: "Medium",
  });

  const updateIssue = (fields: Partial<Issue>) => {
    setIssue((prev) => {
      return { ...prev, ...fields };
    });
  };

  async function getIssues() {
    const params = new URLSearchParams({
      limit: page.limit.toString(),
      offset: page.offset.toString(),
    });
    const resp = await fetch(
      `http://localhost:8080/issues?${params.toString()}`,
      {
        method: "GET",
        credentials: "include",
      },
    );
    const data = await resp.json();
    setIssues(data);
    console.log(data);
  }
  useEffect(() => {
    async function getIssues() {
      const params = new URLSearchParams({
        limit: page.limit.toString(),
        offset: page.offset.toString(),
      });
      const resp = await fetch(
        `http://localhost:8080/issues?${params.toString()}`,
        {
          method: "GET",
          credentials: "include",
        },
      );
      const data = await resp.json();
      setIssues(data);
      console.log(data);
    }

    getIssues();
  }, [page]);

  const submitComplaint = async () => {
    await fetch("http://localhost:8080/issues/create", {
      method: "POST",
      body: JSON.stringify(issue),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    getIssues();
  };

  useEffect(() => {
    getIssues();
  }, []);

  return {
    issues,
    setIssues,
    getIssues,
    submitComplaint,
    setPage,
    updateIssue,
  };
}
