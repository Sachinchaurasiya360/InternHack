import { useState, useCallback, useEffect, useRef } from "react";

const STORAGE_KEY = "latex-resume-draft";
const FILES_STORAGE_KEY = "latex-resume-files";
const DEBOUNCE_MS = 800;

export interface SupportingFile {
  filename: string;
  content: string;
}

export function useLatexAutoSave(defaultTemplate: string) {
  const [code, setCodeInternal] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved && saved.trim().length > 0 ? saved : defaultTemplate;
    } catch {
      return defaultTemplate;
    }
  });

  const [supportingFiles, setSupportingFilesInternal] = useState<SupportingFile[]>(() => {
    try {
      const saved = localStorage.getItem(FILES_STORAGE_KEY);
      return saved ? (JSON.parse(saved) as SupportingFile[]) : [];
    } catch {
      return [];
    }
  });

  const codeRef = useRef(code);
  const filesRef = useRef(supportingFiles);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const flush = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, codeRef.current);
      localStorage.setItem(FILES_STORAGE_KEY, JSON.stringify(filesRef.current));
    } catch {
      // storage full — ignore
    }
  }, []);

  const setCode = useCallback((val: string) => {
    codeRef.current = val;
    setCodeInternal(val);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(flush, DEBOUNCE_MS);
  }, [flush]);

  const setSupportingFiles = useCallback(
    (filesOrUpdater: SupportingFile[] | ((prev: SupportingFile[]) => SupportingFile[])) => {
      const next =
        typeof filesOrUpdater === "function"
          ? filesOrUpdater(filesRef.current)
          : filesOrUpdater;
      filesRef.current = next;
      setSupportingFilesInternal(next);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(flush, DEBOUNCE_MS);
    },
    [flush],
  );

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
      flush();
    };
  }, [flush]);

  return { code, setCode, supportingFiles, setSupportingFiles };
}
