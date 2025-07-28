// Global type declarations for third-party libraries

declare global {
  interface Window {
    bootstrap: {
      Modal: {
        new (element: Element | string, options?: any): {
          show(): void;
          hide(): void;
          dispose(): void;
        };
      };
      Popover: {
        new (element: Element | string, options?: any): any;
      };
      Tooltip: {
        new (element: Element | string, options?: any): any;
      };
      Offcanvas: {
        new (element: Element | string, options?: any): any;
      };
      Toast: {
        new (element: Element | string, options?: any): any;
      };
    };
  }
}

export {};