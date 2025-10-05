import { useState, useEffect } from 'react';
import DataTable from './DataTable';

interface Payment {
  date: string;
  employee: string;
  terminal: string;
  cashCollected: string;
  jumps: string;
  comment: string;
}

export default function DailyPayments() {
  const [payments, setPayments] = useState<Payment[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('dailyPayments');
    if (saved) {
      setPayments(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('dailyPayments', JSON.stringify(payments));
  }, [payments]);

  const handleUpdate = (index: number, key: string, value: any) => {
    const newPayments = [...payments];
    newPayments[index] = { ...newPayments[index], [key]: value };
    setPayments(newPayments);
  };

  const handleDelete = (index: number) => {
    setPayments(payments.filter((_, i) => i !== index));
  };

  const handleAdd = () => {
    const today = new Date().toISOString().split('T')[0];
    setPayments([...payments, {
      date: today,
      employee: '',
      terminal: '',
      cashCollected: '',
      jumps: '',
      comment: '',
    }]);
  };

  const handleReset = () => {
    if (confirm('Вы уверены, что хотите сбросить все ежедневные оплаты?')) {
      setPayments([]);
      localStorage.removeItem('dailyPayments');
    }
  };

  const columns = [
    { key: 'date', label: 'Дата', editable: true, type: 'date' as const },
    { key: 'employee', label: 'Сотрудник', editable: true },
    { key: 'terminal', label: 'Терминал ₽', editable: true, type: 'number' as const },
    { key: 'cashCollected', label: 'Забрал ₽', editable: true, type: 'number' as const },
    { key: 'jumps', label: 'Прыжки шт', editable: true, type: 'number' as const },
    { key: 'comment', label: 'Комментарий', editable: true },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-foreground">Ежедневные оплаты</h2>
        <button
          onClick={handleAdd}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium neon-glow"
          data-testid="button-add-payment"
        >
          + Добавить запись
        </button>
      </div>

      {payments.length > 0 ? (
        <DataTable
          columns={columns}
          data={payments}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ) : (
        <div className="text-center py-12 bg-card rounded-lg border border-border">
          <p className="text-muted-foreground">Нет записей. Нажмите "Добавить запись" для начала.</p>
        </div>
      )}

      <div className="flex justify-end">
        <button
          onClick={handleReset}
          className="px-6 py-2 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-colors font-medium"
          data-testid="button-reset-payments"
        >
          Сбросить данные
        </button>
      </div>
    </div>
  );
}
