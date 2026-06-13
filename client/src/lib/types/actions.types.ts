export type PendingDelete = 
  | { kind: "internal"; id: number }
  | { kind: "external"; id: number }
  | null;

export type PendingAction<T = string> = {
  id: T;
  label?: string;
} | null;

export type ConfirmState = {
  open: boolean;
  message: string;
  onConfirm: () => void;
} | null;