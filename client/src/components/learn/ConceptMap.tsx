import { useMemo } from "react";
import ReactFlow, {
  Background, Controls, MiniMap, Handle, Position,
  type Node, type Edge, type NodeProps,
} from "reactflow";
import "reactflow/dist/style.css";
import { CheckCircle2, Lock, Circle } from "lucide-react";
import { useLearnStore } from "../../lib/learn-gamification";

export type ConceptNode = {
  id: string;
  label: string;
  description?: string;
  lessonHref?: string;
};

export type ConceptEdge = { from: string; to: string };

type Props = {
  nodes: ConceptNode[];
  edges: ConceptEdge[];
  title?: string;
  height?: number;
};

function LessonNode({ data }: NodeProps) {
  const status = data.status as "completed" | "available" | "locked";
  const bg = {
    completed: "bg-emerald-500 border-emerald-600",
    available: "bg-indigo-500 border-indigo-600",
    locked: "bg-gray-400 border-gray-500 opacity-60",
  }[status];
  const Icon = status === "completed" ? CheckCircle2 : status === "locked" ? Lock : Circle;

  const content = (
    <div className={`relative rounded-xl border-2 ${bg} px-4 py-3 min-w-40 shadow-sm text-white`}>
      <Handle type="target" position={Position.Top} className="bg-white/70! border-0!" />
      <div className="flex items-center gap-2 mb-1">
        <Icon className="w-3.5 h-3.5" />
        <span className="text-[10px] font-semibold uppercase tracking-wide opacity-80">{status}</span>
      </div>
      <p className="text-sm font-bold leading-snug">{data.label}</p>
      {data.description && <p className="text-[11px] opacity-90 mt-1 leading-snug">{data.description}</p>}
      <Handle type="source" position={Position.Bottom} className="bg-white/70! border-0!" />
    </div>
  );

  return data.lessonHref && status !== "locked" ? (
    <a href={data.lessonHref} className="block hover:scale-[1.03] transition-transform">
      {content}
    </a>
  ) : (
    content
  );
}

const nodeTypes = { lesson: LessonNode };

export function ConceptMap({ nodes, edges, title, height = 520 }: Props) {
  const completed = useLearnStore((s) => s.lessonsCompleted);

  const rfNodes: Node[] = useMemo(() => {
    const cols = 3;
    return nodes.map((n, i) => {
      const done = !!completed[n.id]?.completed;
      const prevId = i > 0 ? nodes[i - 1].id : null;
      const prevDone = prevId ? !!completed[prevId]?.completed : true;
      const status = done ? "completed" : prevDone || i === 0 ? "available" : "locked";
      return {
        id: n.id,
        type: "lesson",
        position: { x: (i % cols) * 260, y: Math.floor(i / cols) * 160 },
        data: { label: n.label, description: n.description, lessonHref: n.lessonHref, status },
      };
    });
  }, [nodes, completed]);

  const rfEdges: Edge[] = useMemo(
    () =>
      edges.map((e, i) => ({
        id: `e-${i}`,
        source: e.from,
        target: e.to,
        animated: true,
        style: { stroke: "#8b5cf6", strokeWidth: 2 },
      })),
    [edges]
  );

  return (
    <section className="my-6">
      {title && <h3 className="text-sm font-bold text-gray-950 dark:text-white mb-3">{title}</h3>}
      <div style={{ height }} className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 overflow-hidden">
        <ReactFlow
          nodes={rfNodes}
          edges={rfEdges}
          nodeTypes={nodeTypes}
          fitView
          proOptions={{ hideAttribution: true }}
          nodesDraggable={false}
          nodesConnectable={false}
        >
          <Background gap={20} size={1} color="#cbd5e1" />
          <Controls showInteractive={false} />
          <MiniMap pannable zoomable className="bg-white! dark:bg-gray-900! border! border-gray-200! dark:border-gray-700! rounded-xl!" />
        </ReactFlow>
      </div>
    </section>
  );
}
