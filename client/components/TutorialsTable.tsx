import { Tutorial } from "@shared/api";
import { Star, Clock, User, Eye } from "lucide-react";

interface TutorialsTableProps {
  tutorials: Tutorial[];
  isLoading?: boolean;
  isEmpty?: boolean;
}

const DifficultyBadge = ({ difficulty }: { difficulty: string }) => {
  const colors = {
    Beginner: "bg-green-100 text-green-700",
    Intermediate: "bg-yellow-100 text-yellow-700",
    Advanced: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
        colors[difficulty as keyof typeof colors]
      }`}
    >
      {difficulty}
    </span>
  );
};

const CategoryBadge = ({ category }: { category: string }) => {
  const colors: { [key: string]: string } = {
    Frontend: "bg-blue-50 text-blue-700 border border-blue-200",
    Backend: "bg-purple-50 text-purple-700 border border-purple-200",
    TypeScript: "bg-indigo-50 text-indigo-700 border border-indigo-200",
    Security: "bg-orange-50 text-orange-700 border border-orange-200",
    "DevOps": "bg-pink-50 text-pink-700 border border-pink-200",
    "AI/ML": "bg-cyan-50 text-cyan-700 border border-cyan-200",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${
        colors[category] || "bg-slate-50 text-slate-700 border border-slate-200"
      }`}
    >
      {category}
    </span>
  );
};

export default function TutorialsTable({
  tutorials,
  isLoading = false,
  isEmpty = false,
}: TutorialsTableProps) {
  if (isEmpty) {
    return (
      <div className="text-center py-16">
        <div className="mb-4">
          <svg
            className="mx-auto w-16 h-16 text-slate-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-1">
          No tutorials found
        </h3>
        <p className="text-slate-500">
          Try adjusting your search terms to find what you're looking for
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
              Tutorial
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
              Category
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
              Difficulty
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
              Duration
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
              Author
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
              Views
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
              Rating
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={7} className="px-6 py-8">
                <div className="flex justify-center items-center gap-3">
                  <div className="w-5 h-5 border-2 border-blue-200 border-t-blue-500 rounded-full animate-spin" />
                  <span className="text-slate-500">Loading tutorials...</span>
                </div>
              </td>
            </tr>
          ) : (
            tutorials.map((tutorial, index) => (
              <tr
                key={tutorial.id}
                className={`border-b border-slate-100 transition-colors hover:bg-slate-50 ${
                  index % 2 === 0 ? "bg-white" : "bg-slate-50"
                }`}
              >
                <td className="px-6 py-4">
                  <div className="font-medium text-slate-900 hover:text-blue-600 cursor-pointer transition-colors">
                    {tutorial.name}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <CategoryBadge category={tutorial.category} />
                </td>
                <td className="px-6 py-4">
                  <DifficultyBadge difficulty={tutorial.difficulty} />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Clock className="w-4 h-4 text-slate-400" />
                    {tutorial.duration}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-slate-700">
                    <User className="w-4 h-4 text-slate-400" />
                    {tutorial.author}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Eye className="w-4 h-4 text-slate-400" />
                    {(tutorial.views / 1000).toFixed(1)}k
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(tutorial.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : i < tutorial.rating
                              ? "fill-yellow-400 text-yellow-400 opacity-50"
                              : "text-slate-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm font-medium text-slate-700">
                      {tutorial.rating}
                    </span>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
