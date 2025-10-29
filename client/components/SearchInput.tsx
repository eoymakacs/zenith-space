import { Search, X } from "lucide-react";
import { useState, useEffect } from "react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  isLoading?: boolean;
}

export default function SearchInput({
  value,
  onChange,
  placeholder = "Search tutorials by name...",
  isLoading = false,
}: SearchInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full">
      <div
        className={`relative flex items-center transition-all duration-200 ${
          isFocused ? "ring-2 ring-blue-500 ring-offset-2" : ""
        } rounded-lg overflow-hidden bg-white border border-slate-200`}
      >
        <Search className="absolute left-4 w-5 h-5 text-slate-400 pointer-events-none" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full pl-12 pr-10 py-3 bg-transparent text-slate-900 placeholder-slate-500 focus:outline-none text-base"
        />
        {value && !isLoading && (
          <button
            onClick={() => onChange("")}
            className="absolute right-3 text-slate-400 hover:text-slate-600 transition-colors p-1"
            aria-label="Clear search"
          >
            <X className="w-5 h-5" />
          </button>
        )}
        {isLoading && (
          <div className="absolute right-3 w-5 h-5 border-2 border-slate-200 border-t-blue-500 rounded-full animate-spin" />
        )}
      </div>
    </div>
  );
}
