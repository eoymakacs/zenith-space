import { useState, useEffect, useCallback } from "react";
import SearchInput from "@/components/SearchInput";
import TutorialsTable from "@/components/TutorialsTable";
import { TutorialsResponse } from "@shared/api";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const [tutorials, setTutorials] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const fetchTutorials = useCallback(async (query: string) => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams();
      if (query) {
        params.append("q", query);
      }
      const response = await fetch(`/api/tutorials?${params.toString()}`);
      const data = (await response.json()) as TutorialsResponse;
      setTutorials(data.tutorials);
      setTotalCount(data.total);
    } catch (error) {
      console.error("Error fetching tutorials:", error);
      setTutorials([]);
      setTotalCount(0);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTutorials(searchQuery);
  }, [searchQuery, fetchTutorials]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">
            Tutorial Library
          </h1>
          <p className="text-lg text-slate-600">
            Search and explore our collection of programming tutorials
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-8">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            isLoading={isLoading}
          />
          {totalCount > 0 && !isLoading && (
            <p className="text-sm text-slate-500 mt-3">
              Found <span className="font-semibold text-slate-900">{totalCount}</span> tutorial{totalCount !== 1 ? "s" : ""}
            </p>
          )}
        </div>

        {/* Results Section */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <TutorialsTable
            tutorials={tutorials}
            isLoading={isLoading}
            isEmpty={!isLoading && tutorials.length === 0 && searchQuery !== ""}
          />
          {!isLoading && tutorials.length === 0 && searchQuery === "" && (
            <div className="px-6 py-12 text-center">
              <div className="mb-4">
                <svg
                  className="mx-auto w-12 h-12 text-slate-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C6.248 6.253 2 10.501 2 15.757c0 5.256 4.248 9.504 10 9.504s10-4.248 10-9.504C22 10.501 17.752 6.253 12 6.253z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">
                Start exploring
              </h3>
              <p className="text-slate-500">
                Use the search bar above to find tutorials by name
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
