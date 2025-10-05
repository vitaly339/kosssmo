interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export default function TabButton({ active, onClick, children, icon }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3 rounded-lg font-medium transition-all duration-300 
        flex items-center gap-2 hover-elevate active-elevate-2
        ${active 
          ? 'bg-primary text-primary-foreground neon-glow' 
          : 'bg-card border border-border text-muted-foreground hover:text-foreground'
        }
      `}
      data-testid={`tab-${String(children).toLowerCase().replace(/\s+/g, '-')}`}
    >
      {icon}
      {children}
    </button>
  );
}
