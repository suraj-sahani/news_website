export const Container = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`mx-auto w-full max-w-content max-w-300 px-4 md:px-6 ${className}`}
  >
    {children}
  </div>
);
