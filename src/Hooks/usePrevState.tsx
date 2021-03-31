import React, { useEffect } from "react";

// Example:
//const [count, setCount] = useState(0);
// 👇 look here
//const prevCount = usePrevious(count)

export function usePrevious(value: any) {
  const ref = React.useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
