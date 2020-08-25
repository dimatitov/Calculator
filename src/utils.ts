export const isOperator = (record: string): boolean => isNaN(parseInt(record))

type OperatorType = '+' | '-' | '*' | '/' 

export const calcByOperator = (a: number, b: number, operator: OperatorType): number => {
   switch(operator) {
      case '+':
         return a + b

      case '-':
         return a - b

      case '*':
         return a * b

      case '/':
         return a / b

   }
}

export const calculate = (logs: string): number => {
   let result = 0
   const logsArray = logs.split(/(\+|\-|\*|\/)/)

   logsArray.forEach((record, index, arr) => {
      const recordIsOperator = isOperator(record)
      const isLastRecord = index === arr.length - 1

      if (recordIsOperator) {
         const leftOperand = Number(arr[index - 1])
         const rightOperand = Number(arr[index + 1])

         arr[index + 1] = String(calcByOperator(leftOperand, rightOperand, record as OperatorType))
      }

      if (isLastRecord) {
         result = Number(record)
      }
   })

   return result
}