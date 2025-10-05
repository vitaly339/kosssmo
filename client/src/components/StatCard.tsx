interface StatCardProps {
  label: string;
  value: string | number;
  editable?: boolean;
  onChange?: (value: string) => void;
  type?: 'text' | 'number';
  suffix?: string;
  variant?: 'default' | 'success' | 'error';
}

export default function StatCard({ 
  label, 
  value, 
  editable = false, 
  onChange, 
  type = 'number',
  suffix = '₽',
  variant = 'default'
}: StatCardProps) {
  const variantClasses = {
    default: 'border-border',
    success: 'border-success bg-success/10',
    error: 'border-destructive bg-destructive/10'
  };

  const textClasses = {
    default: 'text-foreground',
    success: 'text-success',
    error: 'text-destructive'
  };

  return (
    <div className={`rounded-lg border ${variantClasses[variant]} bg-card backdrop-blur-sm p-6 transition-all duration-300 hover-elevate`}>
      <h3 className="text-sm font-medium text-muted-foreground mb-2">{label}</h3>
      {editable ? (
        <div className="relative">
          <input
            type={type}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            className={`w-full bg-input border border-input rounded-md px-4 py-2 text-2xl font-bold ${textClasses[variant]} focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all input-glow`}
            data-testid={`input-${label.toLowerCase().replace(/\s+/g, '-')}`}
          />
          {suffix && (
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl font-semibold text-muted-foreground">
              {suffix}
            </span>
          )}
        </div>
      ) : (
        <p 
          className={`text-3xl font-bold ${textClasses[variant]}`}
          data-testid={`text-${label.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {typeof value === 'number' ? value.toLocaleString('ru-RU') : value}
          {suffix && <span className="text-xl ml-1">{suffix}</span>}
        </p>
      )}
    </div>
  );
}
