interface Column {
  key: string;
  label: string;
  editable?: boolean;
  type?: 'text' | 'number' | 'date';
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  onUpdate?: (index: number, key: string, value: any) => void;
  onDelete?: (index: number) => void;
}

export default function DataTable({ columns, data, onUpdate, onDelete }: DataTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full">
        <thead className="bg-muted">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-3 text-left text-sm font-semibold text-foreground"
              >
                {col.label}
              </th>
            ))}
            {onDelete && (
              <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                Действия
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="border-t border-border hover:bg-muted/30 transition-colors"
              data-testid={`row-table-${index}`}
            >
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3">
                  {col.editable ? (
                    <input
                      type={col.type || 'text'}
                      value={row[col.key] || ''}
                      onChange={(e) => onUpdate?.(index, col.key, e.target.value)}
                      className="w-full bg-input border border-input rounded px-3 py-1.5 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
                      data-testid={`input-${col.key}-${index}`}
                    />
                  ) : (
                    <span className="text-sm text-foreground" data-testid={`text-${col.key}-${index}`}>
                      {row[col.key]}
                    </span>
                  )}
                </td>
              ))}
              {onDelete && (
                <td className="px-4 py-3">
                  <button
                    onClick={() => onDelete(index)}
                    className="px-3 py-1 text-sm bg-destructive text-destructive-foreground rounded hover:bg-destructive/90 transition-colors"
                    data-testid={`button-delete-${index}`}
                  >
                    Удалить
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
