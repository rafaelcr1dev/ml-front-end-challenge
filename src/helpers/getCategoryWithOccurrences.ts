export const getCategoryWithOccurrences = (items: any[]) => {
  const objectWithOccurrences = items.reduce(
    (previousValue: any, currentValue: any) => (
      (previousValue[currentValue.category_id] =
        (previousValue[currentValue.category_id] || 0) + 1),
      previousValue
    ),
    {}
  )
  return Object.keys(objectWithOccurrences).reduce(
    (previousValue, currentValue) =>
      objectWithOccurrences[previousValue] >=
      objectWithOccurrences[currentValue]
        ? previousValue
        : currentValue
  )
}
