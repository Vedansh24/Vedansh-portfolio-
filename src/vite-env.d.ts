/// <reference types="vite/client" />

declare module 'vanilla-tilt' {
  const VanillaTilt: {
    init: (element: HTMLElement | HTMLElement[], options?: any) => void;
  };
  export default VanillaTilt;
}
