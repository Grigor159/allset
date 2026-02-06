export function useSearch() {
    return typeof window !== "undefined" ? window.location.search : "";
}