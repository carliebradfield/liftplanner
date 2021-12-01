let templates = [
    {
      id: 1,
      name: "Strength Training",
      activity: "Strength training",
      timeElapsedMinutes: "90"
    },
    {
      id: 2,
      name: "Strength Training - short",
      activity: "Strength training",
      timeElapsedMinutes: "45"
    },
    {
      id: 3,
      name: "Hike",
      activity: "Hike",
      timeElapsedMinutes: "60"
    },
    {
      id: 4,
      name: "Walk",
      activity: "Walk",
      timeElapsedMinutes: "30"
    },
  ];
  
  export function getTemplates() {
    return templates;
  }

  export function getTemplate(id) {
    return templates.find(
      template => template.id === id
    );
  }

  export function deleteTemplate(id) {
    templates = templates.filter(
    template => template.id !== id
  );
}