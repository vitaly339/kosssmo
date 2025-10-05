import { useState, useEffect } from 'react';
import DataTable from './DataTable';

interface Expense {
  category: string;
  amount: string;
  comment: string;
}

const DEFAULT_EXPENSES: Expense[] = [
  { category: 'Аренда', amount: '50000', comment: '' },
  { category: 'Коммунальные', amount: '20000', comment: '' },
  { category: 'Прочие', amount: '0', comment: '' },
];

export default function Expenses() {
  const [expenses, setExpenses] = useState<Expense[]>(DEFAULT_EXPENSES);

  useEffect(() => {
    const saved = localStorage.getItem('expenses');
    if (saved) {
      setExpenses(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleUpdate = (index: number, key: string, value: any) => {
    const newExpenses = [...expenses];
    newExpenses[index] = { ...newExpenses[index], [key]: value };
    setExpenses(newExpenses);
  };

  const handleDelete = (index: number) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const handleAdd = () => {
    setExpenses([...expenses, {
      category: '',
      amount: '',
      comment: '',
    }]);
  };

  const handleReset = () => {
    if (confirm('Вы уверены, что хотите сбросить все расходы к значениям по умолчанию?')) {
      setExpenses(DEFAULT_EXPENSES);
      localStorage.setItem('expenses', JSON.stringify(DEFAULT_EXPENSES));
    }
  };

  const columns = [
    { key: 'category', label: 'Категория', editable: true },
    { key: 'amount', label: 'Сумма ₽', editable: true, type: 'number' as const },
    { key: 'comment', label: 'Комментарий', editable: true },
  ];

  const totalExpenses = expenses.reduce((sum, exp) => sum + (parseFloat(exp.amount) || 0), 0);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-foreground">Расходы</h2>
        <button
          onClick={handleAdd}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium neon-glow"
          data-testid="button-add-expense"
        >
          + Добавить категорию
        </button>
      </div>

      <DataTable
        columns={columns}
        data={expenses}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />

      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-foreground">Итого расходов:</span>
          <span className="text-2xl font-bold text-foreground" data-testid="text-total-expenses">
            {totalExpenses.toLocaleString('ru-RU')} ₽
          </span>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleReset}
          className="px-6 py-2 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-colors font-medium"
          data-testid="button-reset-expenses"
        >
          Сбросить данные
        </button>
      </div>
    </div>
  );
}
