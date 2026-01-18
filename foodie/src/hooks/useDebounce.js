import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to debounce a value with enhanced features
 * Useful for search inputs, API calls, and performance optimization
 * @param {*} value - The value to debounce
 * @param {number} delay - Delay in milliseconds (default: 500ms)
 * @param {boolean} immediate - If true, trigger on the leading edge instead of trailing
 * @returns {*} Debounced value
 * 
 * @example
 * const debouncedSearchTerm = useDebounce(searchTerm, 300);
 */
export const useDebounce = (value, delay = 500, immediate = false) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // If immediate is true, set the value immediately on first call
    if (immediate && debouncedValue !== value) {
      setDebouncedValue(value);
      return;
    }

    // Set a timeout to update the debounced value after the delay
    timeoutRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function to cancel the timeout if value changes
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [value, delay, immediate, debouncedValue]);

  return debouncedValue;
};

export default useDebounce;
