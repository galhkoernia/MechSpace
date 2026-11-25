"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "mechspace.bookmarks";
const CHANGE_EVENT = "mechspace:bookmarks-changed";

function readBookmarkIds(): string[] {
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (!saved) return [];

  const parsed: unknown = JSON.parse(saved);
  return Array.isArray(parsed) && parsed.every((id): id is string => typeof id === "string")
    ? parsed
    : [];
}

export function useBookmarks() {
  const [ids, setIds] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const sync = () => setIds(readBookmarkIds());
    sync();
    setReady(true);
    window.addEventListener(CHANGE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(CHANGE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const toggle = useCallback((id: string) => {
    const savedIds = readBookmarkIds();
    const nextIds = savedIds.includes(id)
      ? savedIds.filter((savedId) => savedId !== id)
      : [...savedIds, id];

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextIds));
    setIds(nextIds);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  return { ids, ready, toggle };
}
