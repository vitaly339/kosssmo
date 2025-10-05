import { useState } from 'react';
import DataTable from '../DataTable';

export default function DataTableExample() {
  const [data, setData] = useState([
    { date: '2025-01-01', employee: 'Иван', amount: 5000, comment: 'Вечерняя смена' },
    { date: '2025-01-02', employee: 'Мария', amount: 7500, comment: 'Выходной день' },
  ]);

  const columns = [
    { key: 'date', label: 'Дата', editable: true, type: 'date' as const },
    { key: 'employee', label: 'Сотрудник', editable: true },
    { key: 'amount', label: 'Сумма', editable: true, type: 'number' as const },
    { key: 'comment', label: 'Комментарий', editable: true },
  ];

  const handleUpdate = (index: number, key: string, value: any) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [key]: value };
    setData(newData);
  };

  const handleDelete = (index: number) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <div className="p-8">
      <DataTable 
        columns={columns}
        data={data}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
}
