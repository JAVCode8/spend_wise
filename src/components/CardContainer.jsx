import { Card } from "./Card";

export function CardContainer({ expenses, onDelete }) {
  return(
    <div>
      {expenses.map((item) => {
        return(
          <Card key={item.id} expense={item} onDelete={onDelete}/>
        );
      })}
    </div>
  );
}