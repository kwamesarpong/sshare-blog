export const getCategoriesTitle = categories => {
  const categoryNames = categories.map(category => {
    if (category.category === "lovesexrelationships")
      return "Love ●  Sex ●  Relationships";
    if (category.category === "motivationinspiration")
      return "Motivation ●  Inspiration";
    if (category.category === "money") return "Money";
    if (category.category === "feminism") return "Feminism";
    if (category.category === "lifestyleculture") return "Lifestyle ●  Culture";
    if (category.category === "news") return "News";
    if (category.category === "mindnbody") return "Mind ● And ● Body";
  });

  return categoryNames[0];
};
export const getCategoryTitle = category => {
  //   const categoryNames = categories.map(category => {
  if (category === "lovesexrelationships")
    return "Love ●  Sex ●  Relationships";
  if (category === "motivationinspiration") return "Motivation ●  Inspiration";
  if (category === "money") return "Money";
  if (category === "feminism") return "Feminism";
  if (category === "lifestyleculture") return "Lifestyle ●  Culture";
  if (category === "news") return "News";
  if (category === "mindnbody") return "Mind ● And ● Body";
  //   });

  //   return categoryNames[0];
};
