import { ThumbsUp } from "lucide-react";

type QualityCardProps = {
  title: string;
  description: string;
};

export function QualityCard({ title, description }: QualityCardProps) {
  return (
    <div className="flex h-full flex-col rounded-[10px] bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
        <ThumbsUp className="h-8 w-8 text-[#0065D1]" />
      </div>
      <h3 className="mb-3 text-center text-lg font-semibold text-slate-900">
        {title}
      </h3>
      <p className="text-center text-sm leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  );
}
