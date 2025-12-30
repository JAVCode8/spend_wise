import { CardContainer } from "./CardContainer";
import { ContentHeader } from "./ContentHeader";
import { Inputs } from "./Inputs";

export function Content({ expenses, onAdd, onDelete ,total ,budget, setBudget}) {
  return(
    <div className="max-w-250 mx-auto">
      <ContentHeader total={total} budget={budget} setBudget={setBudget}/>
      <Inputs onAddExpenses={onAdd}/>
      <CardContainer expenses={expenses} onDelete={onDelete}/>
    </div>
  );
}