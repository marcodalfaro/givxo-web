type SectionBadgeProps = {
  children: React.ReactNode;
};

export default function SectionBadge({
  children,
}: SectionBadgeProps) {
  return (
    <div className="sectionBadge">
      {children}
    </div>
  );
}