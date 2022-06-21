import { useAppContext } from "./CalculatorState"

export const CalculatorScreen = () => {

  const calculator = useAppContext();

  return (
    <div className="calculator-screen">
      <div>
        Memory: <strong>{ calculator.memory }</strong>
        <br />
        Operation: <strong>{ calculator.operation }</strong>
      </div>
      <div className="calculator-current_value">{ calculator.currentValue }{ calculator.isDecimal ? '.' : '' }</div>
    </div>
  )
}
