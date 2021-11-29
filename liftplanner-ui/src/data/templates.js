let templates = [
    {
      name: "Test template 1",
      number: 1995,
      amount: "$10,800",
      due: "12/05/1995"
    },
    {
      name: "Test template 2",
      number: 2000,
      amount: "$8,000",
      due: "10/31/2000"
    },
    {
      name: "Test template 3",
      number: 2003,
      amount: "$9,500",
      due: "07/22/2003"
    } 
  ];
  
  export function getTemplates() {
    return templates;
  }

  export function getTemplate(number) {
    return templates.find(
      template => template.number === number
    );
  }

  export function deleteTemplate(number) {
    templates = templates.filter(
    template => template.number !== number
  );
}